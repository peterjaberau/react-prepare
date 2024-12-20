import React from 'react';
import {Icon} from 'amis';
import {registerEditorPlugin} from '../manager';
import {AvailableRenderersPanel} from '../component/Panel/AvailableRenderersPanel';
import {BuildPanelEventContext, BasePlugin, BasicPanelItem} from '../plugin';


export class AvailableRenderersPlugin extends BasePlugin {
  static scene = ['layout'];
  order = -9999;

  buildEditorPanel(
    context: BuildPanelEventContext,
    panels: Array<BasicPanelItem>
  ) {
    const store = this.manager.store;


    if (context.selections.length) {
      return;
    }

    if (store.subRenderers.length) {
      panels.push({
        key: 'renderers',
        icon: 'png-icon renderers-png',
        title: (
          <span className="editor-tab-icon" editor-tooltip="组件">
            <Icon icon="editor-renderer" />
          </span>
        ),
        component: AvailableRenderersPanel,
        position: 'left',
        order: -9999
      });
    }
  }
}

registerEditorPlugin(AvailableRenderersPlugin);
