import React, { useRef } from "react"
import Editor, {EditorProps} from './Editor';
import cx from 'classnames';
import Preview from './Preview';
import {SubEditor} from './SubEditor';
import {ScaffoldModal} from './ScaffoldModal';
import {autobind} from "core-decorators";
import {BaseEventContext, BasicPanelItem, PluginEvent} from '../plugin';

const MiniEditor: React.FC<EditorProps> = (props) => {

  return (
    <>
    mini editor
    </>
  )

  // const { preview, className, theme, data, isMobile, autoFocus, previewProps } = props;
  // const manager = useRef(new EditorManager()).current;
  //
  // useEffect(() => {
  //   manager.on('build-panels', buildPanels);
  //   return () => {
  //     manager.off('build-panels', buildPanels);
  //   };
  // }, [manager]);
  //
  // const buildPanels = (event: PluginEvent<BaseEventContext>) => {
  //   const panels: Array<BasicPanelItem> = event.context.data!;
  //   if (Array.isArray(panels)) {
  //     panels.splice(0, panels.length);
  //   }
  // };
  //
  // return (
  //   <div className={cx('ae-Editor', { preview: preview }, className)}>
  //     <div className="ae-Editor-inner" onContextMenu={handleContextMenu}>
  //       <div className="ae-Main">
  //         <Preview
  //           {...previewProps}
  //           isMobile={isMobile}
  //           editable={!preview}
  //           store={props.store}
  //           manager={manager}
  //           theme={theme}
  //           data={data}
  //           autoFocus={autoFocus}
  //           appLocale={props.appLocale}
  //         />
  //       </div>
  //     </div>
  //     <SubEditor store={props.store} manager={manager} theme={theme} />
  //     <ScaffoldModal store={props.store} manager={manager} theme={theme} />
  //   </div>
  // );
};

export default MiniEditor;


// export default class MiniEditor1 extends Editor {
//   constructor(props: EditorProps) {
//     super(props);
//     this.manager.on('build-panels', this.buildPanels as any);
//   }
//
//   componentWillUnmount() {
//     this.manager.off('build-panels', this.buildPanels as any);
//   }
//
//   @autobind
//   buildPanels(event: PluginEvent<BaseEventContext>) {
//     const panels: Array<BasicPanelItem> = event.context.data!;
//
//     // todo, don’t collect it at all in the future.
//     // Because MiniEditor does not display panels, kill all collected panels.
//     if (Array.isArray(panels)) {
//       panels.splice(0, panels.length);
//     }
//   }
//
//   render() {
//     const {preview, className, theme, data, isMobile, autoFocus, previewProps} =
//         this.props;
//
//     return (
//         <div
//             className={cx(
//                 'ae-Editor',
//                 {
//                   preview: preview
//                 },
//                 className
//             )}
//         >
//           <div className="ae-Editor-inner" onContextMenu={this.handleContextMenu}>
//             <div className="ae-Main">
//               <Preview
//                   {...previewProps}
//                   isMobile={isMobile}
//                   editable={!preview}
//                   store={this.store}
//                   manager={this.manager}
//                   theme={theme}
//                   data={data}
//                   autoFocus={autoFocus}
//                   appLocale={this.props.appLocale}
//               ></Preview>
//             </div>
//           </div>
//
//           <SubEditor store={this.store} manager={this.manager} theme={theme} />
//           <ScaffoldModal
//               store={this.store}
//               manager={this.manager}
//               theme={theme}
//           />
//         </div>
//     );
//   }
// }
