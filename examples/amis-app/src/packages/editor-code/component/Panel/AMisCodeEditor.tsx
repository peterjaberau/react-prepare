import React, { useState, useEffect, useCallback } from "react"
import { Editor } from "amis-ui"
import { isObjectShallowModified, guid, diff, filterSchemaForConfig } from "../../util"
import cx from "classnames"
import { prompt, toast } from "amis"
import debounce from "lodash/debounce"
import isArray from "lodash/isArray"
import findIndex from "lodash/findIndex"
import { parse, stringify } from "json-ast-comments"
import isPlainObject from "lodash/isPlainObject"

const internalSchema = /^\/schemas\/(.*).json$/

async function buildSchema(schemaUrl: string, definition: string, fileUri: string, origin: any) {
  const schemas: Array<{
    uri: string
    fileMatch?: Array<any>
    schema: any
  }> = Array.isArray(origin) ? origin.concat() : []

  // The development environment directly reads the local schema.json file.
  if (process.env.NODE_ENV !== "production") {
    schemas.some((item) => item.uri === schemaUrl) ||
      schemas.push({
        uri: schemaUrl,
        // @ts-ignore
        schema: await import("amis/schema.json").then((item) => item.default),
      })
  }

  if (internalSchema.test(definition)) {
    const rawName = RegExp.$1
    const uri = `${schemaUrl.replace(/^(\w+\:\/\/[^\/]+)\/.*$/, "$1")}/schemas/${rawName}.json`

    // If it exists, delete it first
    const idx = findIndex(schemas, (item) => item.fileMatch?.[0] === fileUri)
    if (~idx) {
      schemas.splice(idx, 1)
    }

    schemas.push({
      uri,
      fileMatch: [fileUri],
      schema: {
        $schema: "http://json-schema.org/draft-07/schema#",
        $ref: `${schemaUrl}#/definitions/${rawName}`,
      },
    })
  }

  return schemas
}

const codeErrorWarning = debounce((e) => {
  toast.warning(`Code error, the error is\n ${e.toString().split("\n")[1]}`)
}, 3000)

export interface AMisCodeEditorProps {
  value: any
  onChange: (value: any, diff: any) => void
  onPaste?: (e: any) => void
  disabled?: boolean
  $schemaUrl?: string
  $schema?: string
  className?: string
  theme?: string
}

const AMisCodeEditor: React.FC<AMisCodeEditorProps> = ({
  value,
  onChange,
  onPaste,
  disabled,
  $schemaUrl,
  $schema,
  className,
  theme,
}) => {
  const [wrongSchema, setWrongSchema] = useState("")
  const [contents, setContents] = useState(() => obj2str(value, { value, onChange, $schema }))

  const uri = `isuda://schema/${guid()}.json`
  let lastResult: any

  useEffect(() => {
    setContents(obj2str(value, { value, onChange, $schema }))
  }, [value, $schema])

  const obj2str = (value: any, props: AMisCodeEditorProps) => {
    // Hide common configuration
    value = filterSchemaForConfig(value)

    if (!isArray(value)) {
      value = {
        type: value?.type,
        ...value,
      }
    }

    if (isArray(value)) {
      return stringify(value)
    } else if (!value.type && props.$schema?.match(/PageSchema/i)) {
      value.type = "page"
    } else if (!value.type) {
      delete value.type
    }

    delete value.$schema

    return stringify(value)
  }

  const str2obj = (str: string) => {
    try {
      if (str === "") {
        return {}
      }
      const curObj = parse(str)
      if (codeErrorWarning) {
        // Cancel the previous error warning immediately after successful code conversion
        codeErrorWarning.cancel()
      }
      return curObj
    } catch (e) {
      codeErrorWarning(e)
      return null
    }
  }

  const emitChange = useCallback(
    debounce(() => {
      let ret: any = str2obj(contents)

      if (!ret || (!isPlainObject(ret) && !isArray(ret))) {
        setWrongSchema(contents)
        return
      }

      setWrongSchema("")

      delete ret.$schema

      // Complete common configuration items
      ret = filterSchemaForConfig(ret, value)
      const diffResult = diff(lastResult || value, ret)
      lastResult = ret

      onChange(ret, diffResult)
    }, 250),
    [contents, value, onChange],
  )

  const handleChange = (value: string) => {
    setContents(value)
    emitChange()
  }

  const handleBlur = async () => {
    if (!wrongSchema) {
      return
    }
    const result = await prompt(
      [
        {
          className: "w-full",
          type: "tpl",
          label: false,
          tpl: "Some changes have not been saved due to incorrect format. Do you want to discard these changes?",
        },
        {
          type: "switch",
          label: false,
          option: "View changes",
          name: "diff",
          value: false,
        },
        {
          visibleOn: "this.diff",
          label: false,
          type: "diff-editor",
          allowFullscreen: true,
          disabled: true,
          name: "newValue",
          size: "xxl",
          language: "json",
          diffValue: "${oldValue}",
        },
      ],
      {
        oldValue: value,
        newValue: wrongSchema,
      },
      "Please confirm",
    )
    if (result) {
      setWrongSchema("")
      setContents(stringify(value))
    }
  }

  return (
    <Editor
      className={cx("amis-code-editor", className)}
      value={contents}
      onChange={handleChange}
      onBlur={handleBlur}
      language="json"
      theme={theme}
      options={{
        automaticLayout: true,
        lineNumbers: "off",
        glyphMargin: false,
        tabSize: 2,
        wordWrap: "on",
        lineDecorationsWidth: 0,
        lineNumbersMinChars: 0,
        selectOnLineNumbers: true,
        scrollBeyondLastLine: false,
        folding: true,
        minimap: {
          enabled: false,
        },
        readOnly: disabled,
      }}
    />
  )
}

export default AMisCodeEditor
