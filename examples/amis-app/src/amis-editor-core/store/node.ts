
import {
  getParent,
  getRoot,
  IAnyModelType,
  Instance,
  isAlive,
  types,
  SnapshotIn
} from 'mobx-state-tree';
import uniq from 'lodash/uniq';
import {RegionConfig, RendererInfo} from '../plugin';
import {guid, JSONPipeIn} from '../util';
import {filterSchema} from 'amis';
import React from 'react';
import {EditorStoreType} from './editor';
import findIndex from 'lodash/findIndex';
import type {RendererConfig} from 'amis-core';

export const EditorNode = types
  .model('EditorNode', {

    parentId: '',
    parentRegion: '',
    isCommonConfig: false,
    isFormConfig: false,

    id: '',
    type: '',
    label: '',

    regionInfo: types.maybe(types.frozen<RegionConfig>()),
    path: '',
    schemaPath: '',
    region: '',
    preferTag: '',

    state: types.optional(types.frozen(), {}),

    widthMutable: false,
    heightMutable: false,


    memberIndex: -1,


    folded: false,


    patched: false,

    x: 0,
    y: 0,
    w: 0,
    h: 0,

    dialogTitle: '',

    dialogType: '',

    children: types.optional(
      types.array(types.late((): IAnyModelType => EditorNode)),
      []
    )
  })
  .volatile(() => ({
    getData: types.frozen<() => any>()
  }))
  .views(self => {
    let info: RendererInfo;
    let rendererConfig: RendererConfig | undefined;

    return {
      get info() {
        return info;
      },

      getNodeById(id: string, regionOrType?: string) {

        let pool = self.children.concat();
        let resolved: any = undefined;

        while (pool.length) {
          const item = pool.shift();
          if (
            item.id === id &&
            (!regionOrType ||
              item.region === regionOrType ||
              item.type === regionOrType)
          ) {
            resolved = item;
            break;
          }


          if (item.children.length) {
            pool.push.apply(pool, item.uniqueChildren);
          }
        }

        return resolved;
      },

      getNodeByComponentId(id: string) {
        let pool = self.children.concat();
        let resolved: any = undefined;

        while (pool.length) {
          const item = pool.shift();
          const schema = item.schema;

          if (schema && schema.id === id) {
            resolved = item;
            break;
          }


          if (item.children.length) {
            pool.push.apply(pool, item.uniqueChildren);
          }
        }

        return resolved;
      },

      setInfo(value: RendererInfo) {
        info = value;
      },

      updateSharedContext(value: Record<string, any>) {
        if (!value || !info?.hasOwnProperty('sharedContext')) {
          return;
        }

        info.sharedContext = value;
      },

      get rendererConfig() {
        return rendererConfig;
      },

      setRendererConfig(value: RendererConfig) {
        rendererConfig = value;
      },

      get isVitualRenderer() {
        return !!~self.memberIndex;
      },

      get clickable() {
        if (this.info?.editable === false && this.info?.hostId) {
          return false;
        }

        return true;
      },

      get draggable() {
        if (this.moveable && this.info?.draggable !== false) {
          return true;
        }

        return false;
      },


      get moveable() {
        if (
          !this.isRegion &&
          this.info?.movable !== false &&
          Array.isArray(this.schemaParent) &&
          !this.host?.memberImmutable(this.parent.region)
        ) {
          return true;
        }

        return false;
      },


      get canMoveUp() {
        if (
          !this.isRegion &&
          this.moveable &&
          Array.isArray(this.schemaParent) &&
          this.prevSibling
        ) {
          return true;
        }
        return false;
      },


      get canMoveDown() {
        if (
          !this.isRegion &&
          this.moveable &&
          Array.isArray(this.schemaParent) &&
          this.nextSibling
        ) {
          return true;
        }
        return false;
      },


      get removable() {
        if (
          !this.isRegion &&
          this.info?.removable !== false &&
          Array.isArray(this.schemaParent) &&
          this.host &&
          !this.host.memberImmutable(this.parent.region)
        ) {
          return true;
        }

        return false;
      },

      get duplicatable() {
        if (
          !this.isRegion &&
          this.info?.duplicatable !== false &&
          Array.isArray(this.schemaParent) &&
          !this.host.memberImmutable(this.parent.region)
        ) {
          return true;
        }

        return false;
      },


      get replaceable() {
        if (!this.isRegion && this.info?.replaceable !== false) {
          return true;
        }

        return false;
      },

      memberImmutable(region: string) {
        return !!(
          this.info?.memberImmutable === true ||
          (Array.isArray(this.info?.memberImmutable) &&
            ~this.info!.memberImmutable.indexOf(region))
        );
      },

      get isRegion() {
        return !!self.region;
      },

      get childRegions() {
        const regions = this.uniqueChildren.filter(
          (item, index, list) => item.isRegion
        );

        if (this.info?.multifactor) {
          const sameIdChild = this.sameIdChild;
          sameIdChild?.childRegions?.forEach((region: any) =>
            regions.push(region)
          );
        }

        return regions;
      },

      get uniqueChildren() {
        let children: Array<any> = [];
        let map: Record<string, any> = {};
        self.children.forEach(child => {
          const key = child.isRegion ? `${child.region}-${child.id}` : child.id;
          if (map[key]) {
            return;
          }

          map[key] = true;
          children.push(child);
        });

        if (Array.isArray(this.schema)) {
          const arr = this.schema.map(item => item?.$$id).filter(item => item);
          children = children.sort((a, b) => {
            const idxa = arr.indexOf(a.id);
            const idxb = arr.indexOf(b.id);
            return idxa - idxb;
          });
        }

        return children;
      },

      get sameIdChild() {
        return this.uniqueChildren?.find(
          child => !child.isRegion && child.id === self.id
        );
      },



      get singleRegion() {
        return !!(
          this.uniqueChildren.length === 1 && this.uniqueChildren[0].isRegion
        );
      },

      isExists(id: string): boolean {
        return self.children.some(child => child.id === id);
      },

      getChildById(id: string) {
        return self.children.find(child => child.id === id);
      },

      get parent(): any {
        try {
          const parent = getParent(self, 2) as EditorNodeType;
          return parent?.id !== 'root' ? parent : null;
        } catch (e) {
          return null;
        }
      },

      get ancestorField(): any {
        const ancestor = getParent(self, 4) as EditorNodeType;

        if (ancestor?.id === 'root') {
          return null;
        }
        const ancestorProps = ancestor?.getComponent()?.props ?? {};
        const body = ancestorProps?.body ?? [];
        const context = Object.keys(ancestorProps?.data ?? {});

        return uniq([...body.map((item: any) => item?.name ?? ''), ...context]);
      },

      get host(): any {
        let host = (self as any).parent;

        if (host?.isRegion) {
          host = host.parent;
        }

        return host;
      },

      get firstChild(): any {
        let host = self;
        if (!host.children.length) {
          return null;
        }
        let firstChild = host.children[0];

        while (firstChild) {
          if (firstChild.isRegion || firstChild.id === host.id) {
            if (firstChild.children.length) {
              firstChild = firstChild.children[0];
            } else {
              firstChild = null;
            }

            continue;
          }

          return firstChild;
        }

        return null;
      },

      get index() {
        const parent = this.parent;
        const list = parent.uniqueChildren;
        return list.indexOf(self);
      },

      get prevSibling() {
        const parent = this.parent;
        const list = parent.uniqueChildren;
        const idx = list.indexOf(self);
        let index = idx - 1;
        while (index >= 0 && list[index]) {
          if (list[index].id !== self.id) {
            return list[index];
          }

          index--;
        }

        return null;
      },

      get nextSibling() {
        const parent = this.parent;
        const list = parent.uniqueChildren;
        const len = list.length;
        const idx = list.indexOf(self);
        let index = idx + 1;
        while (index < len && list[index]) {
          if (list[index].id !== self.id) {
            return list[index];
          }

          index++;
        }

        return null;
      },

      get schema(): any {
        if (!isAlive(self)) {
          return null;
        }
        const schema = (getRoot(self) as EditorStoreType).getSchema(self.id);
        if (this.isRegion && schema) {
          return schema[self.region];
        }

        return schema;
      },

      get schemaParent(): any {
        const editor = getRoot(self) as EditorStoreType;

        if (this.isRegion) {
          return editor.getSchema(self.id);
        }

        return editor.getSchemaParentById(self.id);
      },

      get isSecondFactor() {
        return this.parent?.id === self.id;
      }
    };
  })
  .actions(self => {


    function normalizeContainer(schema: any, containers: Array<string>) {
      let isModified = false;
      let toUpdate: any = {};
      if (!schema) {
        return;
      }

      containers.forEach(key => {
        const paths = key.split('.');
        key = paths.shift() as string;

        let container = schema[key];

        if (typeof container === 'string') {
          isModified = true;
          toUpdate[key] = [
            JSONPipeIn({
              type: 'tpl',
              tpl: container,
              wrapperComponent: '',
              inline: false
            })
          ];
          return;
        } else if (!Array.isArray(container)) {
          if (container) {
            toUpdate[key] = [JSONPipeIn(container)];
            isModified = true;
          }

          return;
        }

        let currentIsModified = false;
        const modified = container.map((item: any) => {

          if (typeof item === 'string' && item) {
            currentIsModified = true;
            return JSONPipeIn({
              type: 'tpl',
              tpl: item,
              wrapperComponent: '',
              inline: false
            });
          } else if (paths.length) {
            const changed = normalizeContainer(item, [paths.join('.')]);

            if (changed !== item) {
              currentIsModified = true;
              item = changed;
            }
          }

          return item;
        });

        if (currentIsModified) {
          isModified = true;
          toUpdate[key] = modified;
        }
      });

      if (isModified) {
        schema = {
          ...schema,
          ...toUpdate
        };
      }

      return schema;
    }

    function getReactOfTargets(targets: Array<HTMLElement>) {
      const arr = targets.concat();
      const first = arr.shift()!;
      const firstRect = first.getBoundingClientRect();





      const rect = {
        left: firstRect.left,
        top: firstRect.top,
        width: firstRect.width,
        height: firstRect.height,
        right: firstRect.right,
        bottom: firstRect.bottom
      };

      let region: HTMLElement | null = first.parentElement!.closest(
        '.ae-Preview-inner,[data-region]'
      );

      while (arr.length) {
        const item = arr.shift()!;
        const itemRect = item.getBoundingClientRect();
        const blong = item.parentElement!.closest(
          '.ae-Preview-inner,[data-region],[data-editor-id]'
        );

        if (!region && blong) {
          region = blong as HTMLElement;
        } else if (blong && region && blong !== region) {
          continue;
        }

        rect.left = Math.min(rect.left, itemRect.left);
        rect.top = Math.min(rect.top, itemRect.top);
        rect.right = Math.max(rect.right, itemRect.right);
        rect.bottom = Math.max(rect.bottom, itemRect.bottom);
        rect.width = rect.right - rect.left;
        rect.height = rect.bottom - rect.top;
      }
      return rect;
    }

    function calculateHighlightBox(target: HTMLElement | Array<HTMLElement>) {
      const targets = Array.isArray(target) ? target : target ? [target] : [];
      if (!targets.length) {
        return;
      }

      const root = getRoot(self) as any;
      const iframe = root.getIframe();
      const layer: HTMLElement = (getRoot(self) as any).getLayer();
      const layerRect = layer.getBoundingClientRect();

      const targetRect = getReactOfTargets(targets);
      const position = {
        left: targetRect.left - layerRect.left,
        top: targetRect.top - layerRect.top
      };

      if (iframe) {
        const rect = iframe.getBoundingClientRect();
        position.left += rect.left;
        position.top += rect.top;
      }

      let height = targetRect.height;

      if (!height) {
        return;
      }
      self.x = position.left + 0;
      self.y = position.top + 0;
      self.w = targetRect.width;
      self.h = height;
    }

    function getClosestParentByType(type: string): EditorNodeType | void {
      let node = self;

      while (node === node.parent) {
        if (node.schema.type === type) {
          return node as EditorNodeType;
        }
        if (node.id === 'root') {
          return;
        }
        node = node.parent;
      }
    }


    function getParentNodeByCB(
      callback: (node: EditorNodeSnapshot) => Boolean
    ) {
      let cursor = self;

      if (!callback || typeof callback !== 'function') {
        return cursor;
      }

      while (cursor) {
        const res = callback(cursor);

        if (res) {
          break;
        }

        if (cursor.id === 'root') {
          return cursor;
        }

        cursor = cursor.parent;
      }

      return cursor;
    }


    let component: any;

    function updateIsCommonConfig(value: boolean) {
      self.isCommonConfig = !!value;
    }

    function updateIsFormConfig(value: boolean) {
      self.isFormConfig = !!value;
    }

    return {
      getClosestParentByType,
      getParentNodeByCB,
      updateIsCommonConfig,
      updateIsFormConfig,
      addChild(props: {
        id: string;
        type: string;
        label: string;
        path: string;
        isCommonConfig?: boolean;
        isFormConfig?: boolean;
        info?: RendererInfo;
        region?: string;
        getData?: () => any;
        preferTag?: string;
        schemaPath?: string;
        dialogTitle?: string;
        dialogType?: string;
        regionInfo?: RegionConfig;
        widthMutable?: boolean;
        memberIndex?: number;
      }) {
        self.children.push({
          ...props,
          parentId: self.id,
          parentRegion: self.region
        });
        const node = self.children[self.children.length - 1];
        node.setInfo(props.info);
        return node;
      },

      removeChild(child: any) {
        const idx = self.children.findIndex(item => item === child);
        const node = self.children[idx];
        if (!node) {
          return;
        }

        self.children.splice(idx, 1);
      },

      toggleFold(e: React.MouseEvent<HTMLAnchorElement>) {
        e.stopPropagation();
        e.preventDefault();

        self.folded = !self.folded;
      },

      patch(
        store: any,
        force = false,
        setPatchInfo?: (id: string, value: any) => void,
        ids?: Map<string, string>
      ) {

        if (self.patched && !force) {
          return;
        }
        self.patched = true;

        const root = store as EditorStoreType;
        const info = self.info!;

        if (info.editable === false) {
          return;
        }

        let schema = root.getSchema(info.id);
        let patched = schema;

        if (!patched?.id) {
          patched = {...patched, id: 'u:' + guid()};
        }


        if (ids?.has(patched.id) && ids?.get(patched.id) !== self.schemaPath) {
          patched = {...patched, id: 'u:' + guid()};
        }

        if (
          (Array.isArray(info.regions) && info.regions.length) ||
          Array.isArray(info.patchContainers)
        ) {
          patched = normalizeContainer(
            patched,
            info.patchContainers || info.regions!.map(region => region.key)
          );
        }


        patched = filterSchema(patched, {
          component: info.renderer.component
        } as any);

        patched =
          info.plugin?.patchSchema?.(
            patched,
            {
              component: info.renderer.component
            },
            component?.props
          ) || patched;

        if (patched !== schema) {
          setPatchInfo
            ? setPatchInfo(info.id, patched)
            : root.changeValueById(info.id, patched, undefined, true, true);
        }
      },

      updateSchema(value: any) {
        const info = self.info!;

        if (info.editable === false) {
          return;
        }
        const root = getRoot(self) as any;
        let schema = root.getSchema(info.id);
        schema = {...schema, ...value};
        root.changeValueById(info.id, schema);
      },

      updateSchemaStyle(value: any) {
        const info = self.info!;

        if (info.editable === false) {
          return;
        }
        const root = getRoot(self) as any;
        let schema = root.getSchema(info.id);
        schema = {
          ...schema,
          style: {
            ...schema.style,
            ...value
          }
        };
        root.changeValueById(info.id, schema);
      },

      setComponent(value: any) {
        component = value;
      },

      getComponent() {
        return component;
      },

      getTarget(): null | HTMLElement | Array<HTMLElement> {
        const doc = (getRoot(self) as any).getDoc();

        if (self.isRegion) {
          const target = doc.querySelector(
            `[data-region="${self.region}"][data-region-host="${self.id}"]`
          ) as HTMLElement;
          return target;
        } else {
          const target = [].slice.call(
            doc.querySelectorAll(`[data-editor-id="${self.id}"]`)
          );

          return self.info?.renderer.name === 'button' ? target?.[0] : target;
        }
      },


      calculateHighlightBox(root: any = getRoot(self)) {
        if (!root.calculateStarted) {
          return;
        }
        const target = this.getTarget();
        if (!target) {
          return;
        }

        calculateHighlightBox(target);
        self.childRegions.forEach(child => child.calculateHighlightBox(root));
      },

      resetHighlightBox(root: any) {
        self.x = 0;
        self.y = 0;
        self.w = 0;
        self.h = 0;

        self.childRegions.forEach(child => child.resetHighlightBox(root));
      },

      updateState(state: any, replace = false) {
        self.state = {
          ...(replace ? null : self.state),
          ...state
        };
      },

      setWidthMutable(value: any) {
        self.widthMutable = !!value;
      },

      setHeightMutable(value: any) {
        self.heightMutable = !!value;
      }
    };
  });

export const EditorNodeContext = React.createContext<EditorNodeType | null>(
  null
);
export type EditorNodeType = Instance<typeof EditorNode>;

export type EditorNodeSnapshot = SnapshotIn<typeof EditorNode>;
