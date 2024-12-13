import omit from "lodash/omit"
import { makeAsyncLayer } from "./component/AsyncLayer"
import { EditorManager } from "./manager"
import { EditorNodeType } from "./store/node"
import React from "react"
import find from "lodash/find"
import { RAW_TYPE_MAP } from "./util"
import type { RendererConfig, Schema } from "amis-core"
import type { SchemaCollection } from "amis"
import type { SchemaType } from "amis/lib/Schema"
import {
  EventContext,
  PluginEvent,
  PluginInterface,
  RendererInfoResolveEventContext,
  BasicRendererInfo,
  BasicPanelItem,
  BuildPanelEventContext,
  RendererEventContext,
  SubRendererInfo,
  BasicSubRenderInfo,
  ActiveEventContext,
  ResizeMoveEventContext,
} from "./pluginTypes.ts"
import { createMachine, fromCallback, fromPromise, assign } from 'xstate';

// Create an event actor
const createEventActor = (type: string, context: EventContext) => {
  return createMachine({
    context: { type, context, prevented: false, stoped: false },
    actions: {
      preventDefault: (ctx) => ctx.prevented = true,
      stopPropagation: (ctx) => ctx.stoped = true,
      setData: (ctx, event) => ctx.context.data = event.data
    }
  });
};

// BasePlugin logic as an XState actor
export const BasePlugin = (manager: EditorManager) => {
  return createMachine({
    context: { manager },
    states: {
      idle: {
        on: {
          GET_RENDERER_INFO: {
            actions: (ctx, event) => {
              const { renderer, schema } = event;
              const plugin: PluginInterface = ctx;
              if (schema.$$id && plugin.name && plugin.rendererName && plugin.rendererName === renderer.name) {
                let curPluginName = plugin.name;
                if (schema?.isFreeContainer) {
                  curPluginName = "自由容器";
                } else if (schema?.isSorptionContainer) {
                  curPluginName = "吸附容器";
                }
                return {
                  name: curPluginName,
                  regions: plugin.regions,
                  patchContainers: plugin.patchContainers,
                  vRendererConfig: plugin.vRendererConfig,
                  wrapperProps: plugin.wrapperProps,
                  wrapperResolve: plugin.wrapperResolve,
                  filterProps: plugin.filterProps,
                  $schema: plugin.$schema,
                  renderRenderer: plugin.renderRenderer,
                  multifactor: plugin.multifactor,
                  scaffoldForm: plugin.scaffoldForm,
                  disabledRendererPlugin: plugin.disabledRendererPlugin,
                  isBaseComponent: plugin.isBaseComponent,
                  isListComponent: plugin.isListComponent,
                  rendererName: plugin.rendererName,
                  memberImmutable: plugin.memberImmutable,
                  getSubEditorVariable: plugin.getSubEditorVariable,
                };
              }
            }
          },
          BUILD_EDITOR_PANEL: {
            actions: (ctx, event) => {
              const { context, panels } = event;
              const plugin: PluginInterface = ctx;
              const store = ctx.manager.store;

              if (!store.activeId || context.selections.length) {
                return;
              }

              if (
                !context.info.hostId &&
                (plugin.panelControls ||
                  plugin.panelControlsCreator ||
                  plugin.panelBody ||
                  plugin.panelBodyCreator ||
                  plugin.panelBodyAsyncCreator) &&
                context.info.plugin === ctx
              ) {
                const enableAsync = !!(plugin.panelBodyAsyncCreator && typeof plugin.panelBodyAsyncCreator === "function");
                const body = plugin.panelBodyAsyncCreator
                  ? plugin.panelBodyAsyncCreator(context)
                  : plugin.panelBodyCreator
                    ? plugin.panelBodyCreator(context)
                    : plugin.panelBody!;

                ctx.manager.trigger("after-build-panel-body", {
                  context,
                  data: body,
                  plugin,
                });

                const baseProps = {
                  definitions: plugin.panelDefinitions,
                  submitOnChange: plugin.panelSubmitOnChange,
                  api: plugin.panelApi,
                  controls: plugin.panelControlsCreator ? plugin.panelControlsCreator(context) : plugin.panelControls!,
                  justify: plugin.panelJustify,
                  panelById: store.activeId,
                  pipeOut: plugin.panelFormPipeOut?.bind?.(plugin),
                };

                panels.push({
                  key: "config",
                  icon: plugin.panelIcon || plugin.icon || "fa fa-cog",
                  pluginIcon: plugin.pluginIcon,
                  title: plugin.panelTitle || "设置",
                  render: enableAsync
                    ? makeAsyncLayer(
                      async () => {
                        const panelBody = await (body as Promise<SchemaCollection>);

                        return ctx.manager.makeSchemaFormRender({
                          ...baseProps,
                          body: panelBody,
                        } as any);
                      },
                      omit(plugin.async, "enable"),
                    )
                    : ctx.manager.makeSchemaFormRender({
                      ...baseProps,
                      body: body as SchemaCollection,
                    } as any),
                });
              } else if (
                context.info.plugin === ctx &&
                context.info.hostId &&
                (plugin.vRendererConfig?.panelControls ||
                  plugin.vRendererConfig?.panelControlsCreator ||
                  plugin.vRendererConfig?.panelBody ||
                  plugin.vRendererConfig?.panelBodyCreator)
              ) {
                panels.push({
                  key: context.info.multifactor ? "vconfig" : "config",
                  icon: plugin.vRendererConfig.panelIcon || "fa fa-cog",
                  title: plugin.vRendererConfig.panelTitle || "设置",
                  render: ctx.manager.makeSchemaFormRender({
                    submitOnChange: plugin.panelSubmitOnChange,
                    api: plugin.panelApi,
                    definitions: plugin.vRendererConfig.panelDefinitions,
                    controls: plugin.vRendererConfig.panelControlsCreator
                      ? plugin.vRendererConfig.panelControlsCreator(context)
                      : plugin.vRendererConfig.panelControls!,
                    body: plugin.vRendererConfig.panelBodyCreator
                      ? plugin.vRendererConfig.panelBodyCreator(context)
                      : plugin.vRendererConfig.panelBody!,
                    justify: plugin.vRendererConfig.panelJustify,
                    panelById: store.activeId,
                  }),
                });
              }

              if (context.info.plugin === ctx && context.info.multifactor) {
                const sameIdChild: EditorNodeType = context.node.sameIdChild;

                if (sameIdChild) {
                  const subPanels = ctx.manager.collectPanels(sameIdChild, false, true);
                  subPanels.forEach((panel) => {
                    if (panel.key === "config" || panel.key === "vconfig") {
                      panels.push({
                        ...panel,
                        key: `sub-${panel.key}`,
                        icon: sameIdChild.info?.plugin?.icon || panel.icon,
                      });
                    }
                  });
                }
              }
            }
          },
          BUILD_SUB_RENDERERS: {
            actions: (ctx, event) => {
              const { context, subRenderers, renderers } = event;
              const plugin: PluginInterface = ctx;

              if (Array.isArray(plugin.scaffolds)) {
                return plugin.scaffolds.map((scaffold) => ({
                  name: (scaffold.name ?? plugin.name)!,
                  icon: scaffold.icon ?? plugin.icon,
                  pluginIcon: plugin.pluginIcon,
                  description: scaffold.description ?? plugin.description,
                  previewSchema: scaffold.previewSchema ?? plugin.previewSchema,
                  tags: scaffold.tags ?? plugin.tags,
                  docLink: scaffold.docLink ?? plugin.docLink,
                  type: scaffold.type ?? plugin.type,
                  scaffold: scaffold.scaffold ?? plugin.scaffold,
                  scaffoldForm: plugin.scaffoldForm,
                  disabledRendererPlugin: plugin.disabledRendererPlugin,
                  isBaseComponent: plugin.isBaseComponent,
                  rendererName: plugin.rendererName,
                }));
              } else if (plugin.name && plugin.description) {
                return {
                  searchKeywords: plugin.searchKeywords,
                  name: plugin.name,
                  icon: plugin.icon,
                  description: plugin.description,
                  previewSchema: plugin.previewSchema,
                  tags: plugin.tags,
                  docLink: plugin.docLink,
                  type: plugin.type,
                  scaffold: plugin.scaffold,
                  scaffoldForm: plugin.scaffoldForm,
                  disabledRendererPlugin: plugin.disabledRendererPlugin,
                  isBaseComponent: plugin.isBaseComponent,
                  pluginIcon: plugin.pluginIcon,
                  rendererName: plugin.rendererName,
                };
              }
            }
          },
          RENDER_PLACEHOLDER: {
            actions: (ctx, event) => {
              const { text, key, style } = event;
              return React.createElement("div", {
                key,
                className: "wrapper-sm b-a b-light m-b-sm",
                style: style,
                children: React.createElement("span", {
                  className: "text-muted",
                  children: text,
                }),
              });
            }
          },
          GET_PLUGIN: {
            actions: (ctx, event) => {
              const { rendererNameOrKlass } = event;
              return find(ctx.manager.plugins, (plugin) =>
                typeof rendererNameOrKlass === "string"
                  ? plugin.rendererName === rendererNameOrKlass
                  : plugin instanceof rendererNameOrKlass,
              );
            }
          },
          BUILD_DATA_SCHEMAS: {
            actions: (ctx, event) => {
              const { node, region, trigger, parent } = event;
              return {
                type: "string",
                rawType: RAW_TYPE_MAP[node.schema.type as SchemaType] || "string",
                title: typeof node.schema.label === "string" ? node.schema.label : node.schema.name,
                originalValue: node.schema.value,
              } as any;
            }
          },
          GET_KEY_AND_NAME: {
            actions: (ctx) => {
              return {
                key: ctx.rendererName,
                name: ctx.name,
              };
            }
          }
        }
      }
    }
  });
};

// LayoutBasePlugin logic as an XState actor
export const LayoutBasePlugin = (manager: EditorManager) => {
  return createMachine({
    context: { manager },
    states: {
      idle: {
        on: {
          ON_ACTIVE: {
            actions: (ctx, event) => {
              const { context } = event;
              if (context.info?.plugin !== ctx || !context.node) {
                return;
              }

              const node = context.node!;
              const curSchema = node.schema || {};

              if (curSchema.isFixedWidth) {
                node.setWidthMutable(true);
              }
              if (curSchema.isFixedHeight) {
                node.setHeightMutable(true);
              }
            }
          },
          ON_WIDTH_CHANGE_START: {
            actions: (ctx, event) => {
              return ctx.onSizeChangeStart(event, "horizontal");
            }
          },
          ON_HEIGHT_CHANGE_START: {
            actions: (ctx, event) => {
              return ctx.onSizeChangeStart(event, "vertical");
            }
          },
          ON_SIZE_CHANGE_START: {
            actions: (ctx, event) => {
              const { context, direction = "both" } = event;
              const node = context.node;
              const store = context.store;
              if (node.info?.plugin !== ctx) {
                return;
              }

              const resizer = context.resizer;
              const dom = context.dom;
              const doc = store.getDoc() || document;
              const frameRect = dom.parentElement!.getBoundingClientRect();
              const rect = dom.getBoundingClientRect();
              const startX = context.nativeEvent.pageX;
              const startY = context.nativeEvent.pageY;

              event.setData({
                onMove: (e: MouseEvent) => {
                  const dy = e.pageY - startY;
                  const dx = e.pageX - startX;
                  const height = Math.max(50, rect.height + dy);
                  const width = Math.max(100, Math.min(rect.width + dx, frameRect.width));
                  const state: any = {
                    width,
                    height,
                  };

                  const dragHlBoxItem = doc.querySelector(`[data-hlbox-id='${node.id}']`) as HTMLElement;

                  const dragContainerItem = doc.querySelector(`[data-editor-id='${node.id}']`) as HTMLElement;

                  if (direction === "both") {
                    resizer.setAttribute("data-value", `${width}px x ${height}px`);
                    dragHlBoxItem.style.height = `${height}px`;
                    dragHlBoxItem.style.width = `${width}px`;
                    dragContainerItem.style.height = `${height}px`;
                    dragContainerItem.style.width = `${width}px`;
                  } else if (direction === "vertical") {
                    resizer.setAttribute("data-value", `${height}px`);
                    dragHlBoxItem.style.height = `${height}px`;
                    dragContainerItem.style.height = `${height}px`;
                    delete state.width;
                  } else {
                    resizer.setAttribute("data-value", `${width}px`);
                    dragHlBoxItem.style.width = `${width}px`;
                    dragContainerItem.style.width = `${width}px`;
                    delete state.height;
                  }

                  node.updateState(state);

                  requestAnimationFrame(() => {
                    node.calculateHighlightBox();
                  });
                },
                onEnd: (e: MouseEvent) => {
                  const dy = e.pageY - startY;
                  const dx = e.pageX - startX;
                  const height = Math.max(50, rect.height + dy);
                  const width = Math.max(100, Math.min(rect.width + dx, frameRect.width));
                  const state: any = {
                    width,
                    height,
                  };

                  if (direction === "vertical") {
                    delete state.width;
                  } else if (direction === "horizontal") {
                    delete state.height;
                  }

                  resizer.removeAttribute("data-value");
                  node.updateSchemaStyle(state);
                  requestAnimationFrame(() => {
                    node.calculateHighlightBox();
                  });
                },
              });
            }
          }
        }
      }
    }
  });
};
