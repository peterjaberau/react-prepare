import { createMachine, assign, setup } from "xstate"
import { setDefaultColSize } from '../util';


export const FlexLayoutMachine = setup({
  types: {
   context: {} as any,
   events: {} as any,
  },
  actions: {
    handleBeforeInsert: assign(({ context, event }) => {
      const { context: insertContext, store } = event;
      const region = insertContext.region;
      const body = [...(insertContext.schema?.[region] || [])];
      let row = 0;
      let beforeId = insertContext.beforeId;
      let position = insertContext.dragInfo?.position || 'bottom';

      if (body?.length) {
        const beforeNodeIndex = body.findIndex(
          (item: any) => item.$$id === beforeId
        );
        let beforeNode = body[beforeNodeIndex];
        let beforeRow = beforeNode?.row;
        const preNode =
          beforeNodeIndex > -1
            ? body[beforeNodeIndex - 1]
            : body[body.length - 1];
        const preRow = preNode?.row;

        if (!insertContext.dragInfo) {
          const rowNodes = body.filter((item: any) => item.row === preRow);
          if (rowNodes.find((item: any) => item.colSize === 'auto')) {
            position = 'bottom';
          } else {
            const leftSize = rowNodes.reduce((size: number, item: any) => {
              const split = item.colSize?.split('/');
              const colSize =
                split?.[0] && split?.[1] ? split[0] / split[1] : item.colSize;
              return size - colSize;
            }, 1);
            if (leftSize >= eval(insertContext.data.$$defaultColSize || 1)) {
              position = 'right';
            } else {
              position = 'bottom';
            }
          }
          if (position === 'bottom' && beforeRow === preRow) {
            const lastIndex = body.findIndex(
              (item: any) => item.row === preRow
            );
            beforeNode = body[lastIndex + 1];
            beforeId = beforeNode?.$$id;
            beforeRow = beforeNode?.row;
          }
        }
        if (position === 'left') {
          row = beforeRow;
        }
        if (position === 'right') {
          row = preRow;
        }

        if (position === 'bottom' || position === 'top') {
          row = preRow + 1;
        }
      }

      return {
        ...context,
        position,
        beforeId,
        data: {
          ...insertContext.data,
          row
        },
        schema: {
          ...insertContext.schema,
          [region]: body
        }
      };
    }),
    handleAfterInsert: assign(({ context, event }) => {
      const { context: insertContext, store } = event;
      const { isMobile } = store;
      const region = insertContext.region;
      const body = [...(insertContext.schema?.[region] || [])];
      const position = insertContext.dragInfo?.position || insertContext.position || 'bottom';
      const currentIndex = insertContext.regionList.findIndex(
        (item: any) => item.$$id === insertContext.data.$$id
      );
      let regionList = [...insertContext.regionList];
      if (position === 'top' || position === 'bottom') {
        if (isMobile) {
          const preBeforeIndex = body.findIndex(
            (item: any) => item.$$id === insertContext.beforeId
          );
          const preBeforeRow = body[preBeforeIndex]?.row;
          if (preBeforeRow !== body[preBeforeIndex - 1]?.row) {
            for (let i = currentIndex + 1; i < regionList.length; i++) {
              regionList[i] = {
                ...regionList[i],
                row: regionList[i].row + 1
              };
            }
          } else {
            let lastIndex = body.findIndex(
              (item: any) => item.row === preBeforeRow
            );
            lastIndex = lastIndex === -1 ? currentIndex + 1 : lastIndex;
            for (let i = lastIndex; i < regionList.length; i++) {
              regionList[i] = {
                ...regionList[i],
                row: regionList[i].row + 1
              };
            }
          }
        } else {
          for (let i = currentIndex + 1; i < regionList.length; i++) {
            regionList[i] = {
              ...regionList[i],
              row: regionList[i].row + 1
            };
          }
        }
        insertContext.data.$$defaultColSize &&
        (regionList[currentIndex].colSize = insertContext.data.$$defaultColSize);
      } else {
        const rows = regionList.filter(
          (item: any) => item.row === insertContext.data.row
        );
        regionList = regionList.map((item: any) => {
          if (item.row === insertContext.data.row) {
            item = {
              ...item,
              colSize: `1/${rows.length}`
            };
          }
          return item;
        });
      }
      return {
        ...context,
        regionList
      };
    }),
    handleAfterMove: assign(({ context, event }) => {
      const { context: moveContext, store } = event;
      const { isMobile } = store;
      const position = moveContext.dragInfo?.position;
      const region = moveContext.region;
      const body = [...(moveContext.schema?.[region] || [])];
      const preCurrentIndex = body.findIndex(
        (item: any) => item.$$id === moveContext.sourceId
      );

      if (
        position === 'top' &&
        preCurrentIndex === body.length - 1 &&
        !moveContext.beforeId
      ) {
        return context;
      }

      let regionList = [...moveContext.regionList];
      const currentIndex = regionList.findIndex(
        (item: any) => item.$$id === moveContext.sourceId
      );
      const preCurrentRow = body[preCurrentIndex].row;
      if (body.filter((item: any) => item.row === preCurrentRow).length === 1) {
        for (let i = preCurrentIndex; i < regionList.length; i++) {
          if (regionList[i].row > preCurrentRow) {
            regionList[i] = {
              ...regionList[i],
              row: regionList[i].row - 1
            };
          }
        }
      }

      const beforeIndex = regionList.findIndex(
        (item: any) => item.$$id === moveContext.beforeId
      );
      const beforeNode =
        regionList[beforeIndex] || regionList[regionList.length - 2];
      const beforeRow = beforeNode?.row;

      if (typeof beforeRow !== 'number') {
        return context;
      }

      let row = beforeRow;

      if (position === 'right') {
        const preNode = regionList[beforeIndex - 2];
        if (preNode && preNode.row !== beforeRow) {
          row = beforeRow - 1;
        }
      }
      if (position === 'bottom') {
        if (beforeIndex < 0) {
          row = beforeRow + 1;
        }
      }

      if (position === 'top' || position === 'bottom') {
        if (isMobile) {
          const preBeforeIndex = body.findIndex(
            (item: any) => item.$$id === moveContext.beforeId
          );
          if (beforeRow !== body[preBeforeIndex - 1]?.row) {
            for (let i = currentIndex + 1; i < regionList.length; i++) {
              regionList[i] = {
                ...regionList[i],
                row: regionList[i].row + 1
              };
            }
          } else {
            const lastIndex = body.findIndex(
              (item: any) => item.row === beforeRow
            );
            for (let i = lastIndex; i < regionList.length; i++) {
              regionList[i] = {
                ...regionList[i],
                row: regionList[i].row + 1
              };
            }
          }
        } else {
          for (let i = currentIndex + 1; i < regionList.length; i++) {
            regionList[i] = {
              ...regionList[i],
              row: regionList[i].row + 1
            };
          }
        }
      }
      regionList[currentIndex] = {
        ...regionList[currentIndex],
        row
      };

      regionList = setDefaultColSize(regionList, row, preCurrentRow);

      return {
        ...context,
        regionList
      };
    }),
    handleAfterDelete: assign(({ context, event }) => {
      const { context: deleteContext } = event;
      let regionList = [...deleteContext.regionList];
      let preRow = -1;
      for (let i = 0; i < regionList.length; i++) {
        const row = regionList[i].row;
        if (row - preRow >= 2) {
          regionList[i] = {
            ...regionList[i],
            row: row - 1
          };
        }
        if (regionList[i + 1]?.row !== row) {
          preRow = regionList[i].row;
        }
      }
      regionList = setDefaultColSize(regionList, deleteContext.schema.row);
      return {
        ...context,
        regionList
      };
    }),
    handleAfterMoveUp: assign(({ context, event }) => {
      const { context: moveUpContext } = event;
      const regionList = [...moveUpContext.regionList];
      const sourceId = moveUpContext.sourceId;
      const currentIndex = regionList.findIndex(n => n.$$id === sourceId);
      const currentItem = regionList[currentIndex];
      const changeItem = regionList[currentIndex + 1];
      const tempRow = currentItem.row;
      currentItem.row = changeItem.row;
      changeItem.row = tempRow;

      return {
        ...context,
        regionList
      };
    }),
    handleAfterMoveDown: assign(({ context, event }) => {
      const { context: moveDownContext } = event;
      const regionList = [...moveDownContext.regionList];
      const sourceId = moveDownContext.sourceId;
      const currentIndex = regionList.findIndex(n => n.$$id === sourceId);
      const currentItem = regionList[currentIndex];
      const changeItem = regionList[currentIndex - 1];
      const tempRow = currentItem.row;
      currentItem.row = changeItem.row;
      changeItem.row = tempRow;

      return {
        ...context,
        regionList
      };
    })
  }

}).createMachine({
  id: 'flex-layout-machine',
  initial: 'idle',
  context: {
    regionList: [],
    region: '',
    position: 'bottom',
    beforeId: '',
    data: {},
    schema: {},
    isMobile: false
  },
  states: {
    idle: {
      on: {
        beforeInsert: {
          actions: 'handleBeforeInsert'
        },
        afterInsert: {
          actions: 'handleAfterInsert'
        },
        afterMove: {
          actions: 'handleAfterMove'
        },
        afterDelete: {
          actions: 'handleAfterDelete'
        },
        afterMoveUp: {
          actions: 'handleAfterMoveUp'
        },
        afterMoveDown: {
          actions: 'handleAfterMoveDown'
        }
      }
    }
  }
});

export default FlexLayoutMachine;
