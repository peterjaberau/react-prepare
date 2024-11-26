
import findIndex from 'lodash/findIndex';
import {DefaultDNDMode} from './default';
import {DNDModeInterface} from './interface';

export class PositionHDNDMode
  extends DefaultDNDMode
  implements DNDModeInterface
{
  enter(e: DragEvent, ghost: HTMLElement) {
    ghost.innerHTML = '';
    ghost.classList.add('use-position');
    ghost.classList.add('is-horizontal');

    const dragEl = this.dnd.dragElement;
    const regionRect = this.dndContainer.getBoundingClientRect();

    const list: Array<any> = Array.isArray(this.region.schema)
      ? this.region.schema
      : [];


    if (dragEl && dragEl.closest(`[data-region]`) === this.dndContainer) {
      const id = dragEl.getAttribute('data-editor-id')!;
      const idx = findIndex(list, (item: any) => item.$$id === id);
      if (~idx && list[idx + 1]) {
        this.dropBeforeId = list[idx + 1].$$id;
      }

      if (dragEl.nextElementSibling) {
        const rect = dragEl.nextElementSibling.getBoundingClientRect();
        ghost.style.cssText += `top: 0; left: ${rect.x - regionRect.x}px;`;
      } else {
        ghost.style.cssText += `top: 0; left: 100%;`;
      }
    } else {
      ghost.style.cssText += `top: 0; left: -999999%;`;
    }
    this.dndContainer.appendChild(ghost);
  }

  leave(e: DragEvent, ghost: HTMLElement) {
    ghost.classList.remove('use-position');
    ghost.classList.remove('is-horizontal');
  }

  over(e: DragEvent, ghost: HTMLElement) {
    let target = this.getTarget(e);
    if (!target) {
      return;
    }


    if (this.dndContainer?.getAttribute('data-renderer') === 'table') {
      const col = target.parentElement?.closest(
        'th[data-editor-id], td[data-editor-id]'
      );
      if (col && this.dndContainer.contains(col)) {
        target = col as HTMLElement;
      }
    }

    const regionRect = this.dndContainer.getBoundingClientRect();
    const list: Array<any> = Array.isArray(this.region.schema)
      ? this.region.schema
      : [];

    const rect = target.getBoundingClientRect();
    if (
      target.nextElementSibling &&
      target.nextElementSibling.hasAttribute('data-editor-id')
    ) {
      ghost.style.cssText += `left: ${rect.x - regionRect.x}px;`;
      this.dropBeforeId = target.getAttribute('data-editor-id')!;
    } else if (e.clientX > rect.x + rect.width / 2) {
      ghost.style.cssText += `top: 0; left: ${rect.right - regionRect.x}px;`;
      delete this.dropBeforeId;
    } else {
      ghost.style.cssText += `left: ${rect.x - regionRect.x}px;`;
      this.dropBeforeId = target.getAttribute('data-editor-id')!;
    }
  }
}
