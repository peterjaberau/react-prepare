import {isMobile} from 'amis-core';

import findIndex from 'lodash/findIndex';
import {EditorDNDManager} from '.';
import {renderThumbToGhost} from '../component/factory';
import {EditorNodeType} from '../store/node';
import {translateSchema} from '../util';
import {DNDModeInterface} from './interface';
import findLastIndex from 'lodash/findLastIndex';
import find from 'lodash/find';

const className = 'PushHighlight';

export class FlexDNDMode implements DNDModeInterface {
  readonly dndContainer: HTMLElement;
  dropBeforeId?: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  maxRolLength = 4;
  dragNode?: any;
  dragId: string = '';
  store: any;
  constructor(
    readonly dnd: EditorDNDManager,
    readonly region: EditorNodeType,
    config: any
  ) {

    this.dndContainer = this.dnd.store
      .getDoc()
      .querySelector(
        `[data-region="${region.region}"][data-region-host="${region.id}"]`
      ) as HTMLElement;
    this.maxRolLength = config.regionNode.maxRolLength || 4;
  }


  enter(e: DragEvent, ghost: HTMLElement) {
    const dragEl = this.dnd.dragElement;
    const list = Array.isArray(this.region.schema) ? this.region.schema : [];
    const manager = this.dnd.manager;
    this.store = manager.store;

    if (list.length === 0) {
      if (dragEl && dragEl.closest('[data-region]') === this.dndContainer) {
        const child = this.getChild(this.dndContainer, dragEl);
        this.dndContainer.insertBefore(ghost, child);
        let innerHTML = dragEl.outerHTML
          .replace('ae-is-draging', '')
          .replace(/\bdata\-editor\-id=(?:'.+?'|".+?")/g, '');
        ghost.innerHTML = innerHTML;
      } else {
        renderThumbToGhost(
          ghost,
          this.region,
          translateSchema(this.store.dragSchema),
          manager
        );
        this.dndContainer.appendChild(ghost);
      }
    } else {
      ghost.innerHTML = '';

      this.dndContainer.appendChild(ghost);
    }
    this.dragId = this.store.dragId;
    this.dragNode =
      find(list, (item: any) => item.$$id === this.dragId) ||
      this.store.dragSchema;
  }


  leave(e: DragEvent, ghost: HTMLElement) {
    this.dndContainer.removeChild(ghost);
    this.clearGhostStyle(ghost);
  }

  over(e: DragEvent, ghost: HTMLElement) {
    const {isMobile} = this.store;
    const colTarget = (e.target as HTMLElement).closest('[role="flex-col"]');
    const wrapper = this.dndContainer;
    const elemSchema = this.region.schema;
    const {x: wx, y: wy} = wrapper.getBoundingClientRect();
    const list: Array<any> = Array.isArray(elemSchema) ? elemSchema : [];
    this.clearGhostStyle(ghost);

    if (colTarget && list.length) {
      const {width, height, x, y} = colTarget.getBoundingClientRect();
      const cx = e.clientX;
      const cy = e.clientY;
      const w = width / 8;
      const h = height / 2;

      const target = this.getTarget(colTarget);
      const targetId = target.getAttribute('data-editor-id')!;
      const targetIndex = findIndex(
        list,
        (item: any) => item.$$id === targetId
      );
      const targetRow = list[targetIndex].row;
      const targetRowLen = list.filter(
        (item: any) => item.row === targetRow
      ).length;

      const canRL =
        this.dragId !== targetId &&
        this.dragNode?.$$dragMode !== 'hv' &&
        list[targetIndex]?.$$dragMode !== 'hv' &&
        (targetRowLen < this.maxRolLength ||
          this.dragNode?.row === targetRow) &&
        !isMobile;

      if (cx < x + w && canRL) {
        ghost.classList.add(`ae-${className}-left`);
        ghost.style.left = x - wx + 'px';
        ghost.style.top = y - wy + 'px';
        ghost.style.height = height + 'px';
        this.dropBeforeId = targetId;
        this.position = 'left';
      } else if (cx > x + 7 * w && canRL) {
        ghost.classList.add(`ae-${className}-right`);
        ghost.style.left = x - wx + width + 'px';
        ghost.style.top = y - wy + 'px';
        ghost.style.height = height + 'px';
        this.dropBeforeId =
          list[
            list[targetIndex + 1]?.$$id === this.dragId
              ? targetIndex + 2
              : targetIndex + 1
          ]?.$$id;
        this.position = 'right';
      } else if (cy < y + h) {

        if (
          this.store.isMobile &&
          (this.dragNode?.$$dragMode !== 'hv' ||
            list[targetIndex]?.$$dragMode !== 'hv') &&
          list[targetIndex].row === list[targetIndex - 1]?.row
        ) {
          delete this.position;
          delete this.dropBeforeId;
          return;
        }

        ghost.classList.add(`ae-${className}-top`);
        ghost.style.width = '100%';
        ghost.style.top = y - wy + 'px';

        if (this.store.isMobile) {
          this.dropBeforeId = targetId;
        } else {
          const beforeIndex = findIndex(
            list,
            (item: any) => item.row === targetRow
          );
          const index =
            list[beforeIndex]?.$$id === this.dragId
              ? beforeIndex + 1
              : beforeIndex;
          this.dropBeforeId = list[index]?.$$id;
        }
        this.position = 'top';
      } else {

        if (
          this.store.isMobile &&
          (this.dragNode?.$$dragMode !== 'hv' ||
            list[targetIndex]?.$$dragMode !== 'hv') &&
          list[targetIndex].row === list[targetIndex + 1]?.row
        ) {
          delete this.position;
          delete this.dropBeforeId;
          return;
        }
        ghost.classList.add(`ae-${className}-bottom`);
        ghost.style.width = '100%';
        ghost.style.top = y - wy + height + 'px';
        if (this.store.isMobile) {
          this.dropBeforeId = list[targetIndex + 1]?.$$id;
        } else {
          const lastIndex = findLastIndex(
            list,
            (item: any) => item.row === targetRow
          );
          const index =
            list[lastIndex + 1]?.$$id === this.dragId
              ? lastIndex + 2
              : lastIndex + 1;
          this.dropBeforeId = list[index]?.$$id;
        }
        this.position = 'bottom';
      }
    } else {
      this.dropBeforeId = undefined;
      if (list.length) {
        const rows = wrapper.querySelectorAll('[role="flex-row"]');
        const lastRow = rows[rows.length - 1];
        const {y, height} = lastRow.getBoundingClientRect();
        ghost.classList.add(`ae-${className}-bottom`);
        ghost.style.width = '100%';
        ghost.style.top = y - wy + height + 'px';
      }
      this.position = 'bottom';
    }
  }

  clearGhostStyle(ghost: HTMLElement) {

    ghost.style.left = '';
    ghost.style.top = '';
    ghost.style.right = '';
    ghost.style.bottom = '';
    ghost.style.width = '';
    ghost.style.height = '';
    ghost.classList.remove(`ae-${className}-left`);
    ghost.classList.remove(`ae-${className}-right`);
    ghost.classList.remove(`ae-${className}-top`);
    ghost.classList.remove(`ae-${className}-bottom`);
  }


  getDropBeforeId() {
    return this.dropBeforeId;
  }


  getTarget(col: Element | null) {
    let target = col?.querySelector('[data-editor-id]') as HTMLElement;
    return target;
  }


  getChild(dom: HTMLElement, descend: HTMLElement) {
    let child = descend;

    while (child) {
      if (child.parentElement === dom) {
        break;
      }

      child = child.parentElement!;
    }

    return child;
  }


  dispose() {
    delete this.dropBeforeId;
    delete this.position;
  }

  getDropPosition() {
    return this.position;
  }


  interruptionDrop() {

    if (!this.dropBeforeId && !this.position) {
      return true;
    }
    return false;
  }
}
