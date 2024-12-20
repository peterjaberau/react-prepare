import sortBy from "lodash/sortBy"
import cloneDeep from "lodash/cloneDeep"
import reverse from "lodash/reverse"
import pick from "lodash/pick"
import { JSONSchema, DataSchema, mapTree, findTree, eachTree, DATASCHEMA_TYPE_MAP } from "amis-core"
import type { Option } from "amis-core"

export interface VariableGroup {
  name: string
  title: string
  parentId: string
  order: number
  schema: JSONSchema
}

export interface VariableOptions {
  beforeScopeInsert?: (context: VariableManager, schema: JSONSchema) => JSONSchema
  afterScopeInsert?: (context: VariableManager) => void
  onContextSchemaChange?: (context: VariableManager, schema: JSONSchema[]) => JSONSchema[]
  onContextOptionChange?: (context: VariableManager, option: Option[], type: "normal" | "formula") => Option[]
}

export class VariableManager {
  readonly variables: VariableGroup[]
  readonly dataSchema: DataSchema
  readonly options: VariableOptions

  constructor(
    dataSchema: DataSchema | undefined,
    variables: VariableGroup[] | undefined,
    options: VariableOptions | undefined,
  ) {
    this.variables = Array.isArray(variables) ? sortBy(cloneDeep(variables), [(item) => item.order ?? 1]) : []
    this.dataSchema = dataSchema instanceof DataSchema ? dataSchema : new DataSchema([])
    this.options = pick(options, [
      "beforeScopeInsert",
      "afterScopeInsert",
      "onContextSchemaChange",
      "onContextOptionChange",
    ])

    this.init()
  }

  init() {
    const variables = this.variables
    const dataSchema = this.dataSchema
    const { beforeScopeInsert, afterScopeInsert } = this.options ?? {}

    variables.forEach((item) => {
      const { parentId, name: scopeName, title: tagName } = item
      let schema = item.schema

      if (!dataSchema.hasScope(parentId)) {
        return
      }

      dataSchema.switchTo(parentId)

      if (dataSchema.hasScope(scopeName)) {
        dataSchema.removeScope(scopeName)
      }

      if (beforeScopeInsert && typeof beforeScopeInsert === "function") {
        schema = beforeScopeInsert(this, schema)
      }

      dataSchema.addScope(
        {
          type: "object",
          $id: scopeName,
          properties: {
            [scopeName]: {
              ...schema,
              title: tagName,
            },
          },
        },
        scopeName,
      )
      dataSchema.switchTo(scopeName)

      if (afterScopeInsert && typeof afterScopeInsert === "function") {
        afterScopeInsert(this)
      }
    })

    dataSchema.switchToRoot()
  }

  getVariableContextSchema() {
    let variableSchemas: JSONSchema[] = []
    const { onContextSchemaChange } = this.options ?? {}

    if (this.variables && this.variables?.length > 0) {
      variableSchemas = this.variables
        .map((item) => {
          if (this.dataSchema.hasScope(item.name)) {
            const varScope = this.dataSchema.getScope(item.name)

            /** 变量的Scope只有一个根结点 */
            return varScope.schemas.length > 0 ? varScope.schemas[0] : null
          }
          return null
        })
        .filter((item): item is JSONSchema => item !== null)
    }

    if (onContextSchemaChange && typeof onContextSchemaChange === "function") {
      variableSchemas = onContextSchemaChange(this, variableSchemas)
    }

    return variableSchemas
  }

  getVariableFormulaOptions(reverseOrder: boolean = false) {
    const { onContextOptionChange } = this.options ?? {}
    let options: Option[] = []

    if (this.variables && this.variables?.length > 0) {
      this.variables.forEach((item) => {
        if (this.dataSchema.hasScope(item.name)) {
          const varScope = this.dataSchema.getScope(item.name)
          const children = mapTree(varScope.getDataPropsAsOptions(), (item) => ({
            ...item,
            tag: DATASCHEMA_TYPE_MAP[item.type] ?? item.type,
          }))

          if (varScope.tag) {
            options.push({ label: varScope.tag, children })
          } else {
            options.push(...children)
          }
        }
      })
    }

    if (onContextOptionChange && typeof onContextOptionChange === "function") {
      options = onContextOptionChange(this, options, "formula")
    }
    eachTree(options, (item) => {
      if (item.type === "array") {
        delete item.children
      }
    })

    return reverseOrder ? options : reverse(options)
  }

  getVariableOptions() {
    const { onContextOptionChange } = this.options ?? {}
    let options: Option[] = this.getVariableFormulaOptions(false)?.[0]?.children ?? []

    options = mapTree(options, (item: Option, key: number, level: number, paths: Option[]) => {
      return {
        ...item,
        valueExpression:
          typeof item.value === "string" && !item.value.startsWith("${") ? `\${${item.value}}` : item.value,
      }
    })

    if (onContextOptionChange && typeof onContextOptionChange === "function") {
      options = onContextOptionChange(this, options, "normal")
    }

    return options
  }

  getPageVariablesOptions() {
    let options: Option[] = []

    const rootScope = this.dataSchema?.root
    if (rootScope) {
      options = rootScope.getDataPropsAsOptions().filter((item: any) => ["__query", "__page"].includes(item.value))
    }
    eachTree(options, (item) => {
      if (item.type === "array") {
        delete item.children
      }
    })
    return options
  }

  getNameByPath(path: string, valueField = "value", labelField = "label") {
    if (!path || typeof path !== "string") {
      return ""
    }

    const options = [...this.getVariableOptions(), ...this.getPageVariablesOptions()]
    const node = findTree(options, (item) => item[valueField ?? "value"] === path)

    return node ? (node[labelField ?? "label"] ?? node[valueField ?? "value"] ?? "") : ""
  }
}
