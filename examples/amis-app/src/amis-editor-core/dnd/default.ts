
import {animation} from 'amis';
import findIndex from 'lodash/findIndex';
import {EditorDNDManager} from '.';
import {renderThumbToGhost} from '../component/factory';
import {EditorNodeType} from '../store/node';
import {translateSchema} from '../util';
import {DNDModeInterface} from './interface';

export class DefaultDNDMode implements DNDModeInterface {
  readonly dndContainer: HTMLElement;
  dropBeforeId?: string;
  constructor(readonly dnd: EditorDNDManager, readonly region: EditorNodeType) {

    this.dndContainer = this.dnd.store
      .getDoc()
      .querySelector(
        `[data-region="${region.region}"][data-region-host="${region.id}"]`
      ) as HTMLElement;
  }


  exchangeX: number = 0;
  exchangeY: number = 0;


  enter(e: DragEvent, ghost: HTMLElement) {
    const dragEl = this.dnd.dragElement;

    if (dragEl && dragEl.closest('[data-region]') === this.dndContainer) {
      const list: Array<any> = Array.isArray(this.region.schema)
        ? this.region.schema
        : [];
      const child = this.getChild(this.dndContainer, dragEl);
      const id = dragEl.getAttribute('data-editor-id')!;
      const idx = findIndex(list, (item: any) => item.$$id === id);
      if (~idx && list[idx + 1]) {
        this.dropBeforeId = list[idx + 1].$$id;
      }
      this.dndContainer.insertBefore(ghost, child);

      let innerHTML = dragEl.outerHTML
        .replace('ae-is-draging', '')


        .replace(/\bdata\-editor\-id=(?:'.+?'|".+?")/g, '');

      ghost.innerHTML = innerHTML;
    } else {
      const manager = this.dnd.manager;
      const store = manager.store;
      renderThumbToGhost(
        ghost,
        this.region,
        translateSchema(store.dragSchema),
        manager
      );
      this.dndContainer.appendChild(ghost);
    }
  }


  leave(e: DragEvent, ghost: HTMLElement) {
    this.dndContainer.removeChild(ghost);
  }

  over(e: DragEvent, ghost: HTMLElement) {
    const target = this.getTarget(e);
    const wrapper = this.dndContainer;
    const elemSchema = this.region.schema;
    const list: Array<any> = Array.isArray(elemSchema) ? elemSchema : [];
    const dx = e.clientX - this.exchangeX;
    const dy = e.clientY - this.exchangeY;
    const vertical = Math.abs(dy) > Math.abs(dx);
    const manager = this.dnd.manager;
    const store = manager.store;

    if (target && !animation.animating) {
      const targetId = target.getAttribute('data-editor-id')!;
      const targetChild = this.getChild(wrapper, target!);
      const idx = findIndex(list, (item: any) => item.$$id === targetId);

      const originIdx = Array.prototype.indexOf.call(wrapper.children, ghost);
      const targetIdx = Array.prototype.indexOf.call(
        wrapper.children,
        targetChild
      );

      if (
        ~originIdx &&
        originIdx > targetIdx &&
        (!this.exchangeY || (vertical ? dy < 0 : dx < 0))

      ) {

        this.exchangeX = e.clientX;
        this.exchangeY = e.clientY;
        this.dropBeforeId = list[idx]?.$$id;

        if (originIdx !== targetIdx - 1) {
          animation.capture(wrapper);
          wrapper.insertBefore(ghost, targetChild);
          animation.animateAll(store.calculateHighlightBox);
        }
      } else if (
        ~originIdx &&
        originIdx < targetIdx &&

        (!this.exchangeY || (vertical ? dy > 0 : dx > 0))
      ) {

        this.exchangeX = e.clientX;
        this.exchangeY = e.clientY;

        if (list[idx + 1]) {
          this.dropBeforeId = list[idx + 1]?.$$id;
        } else {
          delete this.dropBeforeId;
        }

        if (originIdx !== targetIdx + 1) {
          animation.capture(wrapper);
          wrapper.insertBefore(ghost, targetChild.nextSibling);
          animation.animateAll(store.calculateHighlightBox);
        }
      }
    }

    if (ghost.parentNode !== wrapper) {
      delete this.dropBeforeId;
      animation.capture(wrapper);
      wrapper.appendChild(ghost);
      animation.animateAll(store.calculateHighlightBox);
    }
  }


  getDropBeforeId() {
    return this.dropBeforeId;
  }


  getTarget(e: DragEvent) {
    let target = (e.target as HTMLElement).closest(
      '[data-editor-id]'
    ) as HTMLElement;

    while (target) {
      const region = target.parentElement?.closest('[data-region]');

      if (region === this.dndContainer) {
        const renderer = target.getAttribute('data-renderer');
        if (renderer === 'grid') {

          return target.parentElement;
        } else {
          return target;
        }
      }

      target =
        (target.parentElement?.closest('[data-editor-id]') as HTMLElement) ||
        null;
    }

    return null;
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
  }
}
