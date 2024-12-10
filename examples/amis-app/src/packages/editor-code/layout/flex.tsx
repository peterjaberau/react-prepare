import React, { useState, useCallback } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { LayoutInterface } from './interface';
import { setDefaultColSize } from '../util';
import { findLastIndex } from 'lodash';

const FlexLayout: React.FC<LayoutInterface> = ({ context, store }) => {
  const [regionList, setRegionList] = useState(context.regionList);

  const handleBeforeInsert = useCallback((context, store) => {
    const region = context.region;
    const body = [...(context.schema?.[region] || [])];
    let row = 0;
    let beforeId = context.beforeId;
    let position = context.dragInfo?.position || 'bottom';

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

      // Handle direct component addition
      if (!context.dragInfo) {
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
          if (leftSize >= eval(context.data.$$defaultColSize || 1)) {
            position = 'right';
          } else {
            position = 'bottom';
          }
        }
        if (position === 'bottom' && beforeRow === preRow) {
          const lastIndex = findLastIndex(
            body,
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
        ...context.data,
        row
      },
      schema: {
        ...context.schema,
        [region]: body
      }
    };
  }, []);

  const handleAfterInsert = useCallback((context, store) => {
    const { isMobile } = store;
    const region = context.region;
    const body = [...(context.schema?.[region] || [])];
    const position = context.dragInfo?.position || context.position || 'bottom';
    const currentIndex = context.regionList.findIndex(
      (item: any) => item.$$id === context.data.$$id
    );
    let updatedRegionList = [...regionList];
    if (position === 'top' || position === 'bottom') {
      if (isMobile) {
        const preBeforeIndex = body.findIndex(
          (item: any) => item.$$id === context.beforeId
        );
        const preBeforeRow = body[preBeforeIndex]?.row;
        if (preBeforeRow !== body[preBeforeIndex - 1]?.row) {
          for (let i = currentIndex + 1; i < updatedRegionList.length; i++) {
            updatedRegionList[i] = {
              ...updatedRegionList[i],
              row: updatedRegionList[i].row + 1
            };
          }
        } else {
          let lastIndex = findLastIndex(
            updatedRegionList,
            (item: any) => item.row === preBeforeRow
          );
          lastIndex = lastIndex === -1 ? currentIndex + 1 : lastIndex;
          for (let i = lastIndex; i < updatedRegionList.length; i++) {
            updatedRegionList[i] = {
              ...updatedRegionList[i],
              row: updatedRegionList[i].row + 1
            };
          }
        }
      } else {
        for (let i = currentIndex + 1; i < updatedRegionList.length; i++) {
          updatedRegionList[i] = {
            ...updatedRegionList[i],
            row: updatedRegionList[i].row + 1
          };
        }
      }
      context.data.$$defaultColSize &&
      (updatedRegionList[currentIndex].colSize = context.data.$$defaultColSize);
    } else {
      const rows = updatedRegionList.filter(
        (item: any) => item.row === context.data.row
      );
      updatedRegionList = updatedRegionList.map((item: any) => {
        if (item.row === context.data.row) {
          item = {
            ...item,
            colSize: `1/${rows.length}`
          };
        }
        return item;
      });
    }
    setRegionList(updatedRegionList);
    return {
      ...context,
      regionList: updatedRegionList
    };
  }, [regionList]);

  const handleAfterMove = useCallback((context, store) => {
    const { isMobile } = store;
    const position = context.dragInfo?.position;
    const region = context.region;
    const body = [...(context.schema?.[region] || [])];
    const preCurrentIndex = body.findIndex(
      (item: any) => item.$$id === context.sourceId
    );

    if (
      position === 'top' &&
      preCurrentIndex === body.length - 1 &&
      !context.beforeId
    ) {
      return context;
    }

    let updatedRegionList = [...regionList];
    const currentIndex = updatedRegionList.findIndex(
      (item: any) => item.$$id === context.sourceId
    );
    const preCurrentRow = body[preCurrentIndex].row;
    if (body.filter((item: any) => item.row === preCurrentRow).length === 1) {
      for (let i = preCurrentIndex; i < updatedRegionList.length; i++) {
        if (updatedRegionList[i].row > preCurrentRow) {
          updatedRegionList[i] = {
            ...updatedRegionList[i],
            row: updatedRegionList[i].row - 1
          };
        }
      }
    }

    const beforeIndex = updatedRegionList.findIndex(
      (item: any) => item.$$id === context.beforeId
    );
    const beforeNode =
      updatedRegionList[beforeIndex] || updatedRegionList[updatedRegionList.length - 2];
    const beforeRow = beforeNode?.row;

    if (typeof beforeRow !== 'number') {
      return context;
    }

    let row = beforeRow;

    if (position === 'right') {
      const preNode = updatedRegionList[beforeIndex - 2];
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
          (item: any) => item.$$id === context.beforeId
        );
        if (beforeRow !== body[preBeforeIndex - 1]?.row) {
          for (let i = currentIndex + 1; i < updatedRegionList.length; i++) {
            updatedRegionList[i] = {
              ...updatedRegionList[i],
              row: updatedRegionList[i].row + 1
            };
          }
        } else {
          const lastIndex = findLastIndex(
            updatedRegionList,
            (item: any) => item.row === beforeRow
          );
          for (let i = lastIndex; i < updatedRegionList.length; i++) {
            updatedRegionList[i] = {
              ...updatedRegionList[i],
              row: updatedRegionList[i].row + 1
            };
          }
        }
      } else {
        for (let i = currentIndex + 1; i < updatedRegionList.length; i++) {
          updatedRegionList[i] = {
            ...updatedRegionList[i],
            row: updatedRegionList[i].row + 1
          };
        }
      }
    }
    updatedRegionList[currentIndex] = {
      ...updatedRegionList[currentIndex],
      row
    };

    updatedRegionList = setDefaultColSize(updatedRegionList, row, preCurrentRow);

    setRegionList(updatedRegionList);
    return {
      ...context,
      regionList: updatedRegionList
    };
  }, [regionList]);

  const handleAfterDelete = useCallback((context) => {
    let updatedRegionList = [...regionList];
    let preRow = -1;
    for (let i = 0; i < updatedRegionList.length; i++) {
      const row = updatedRegionList[i].row;
      if (row - preRow >= 2) {
        updatedRegionList[i] = {
          ...updatedRegionList[i],
          row: row - 1
        };
      }
      if (updatedRegionList[i + 1]?.row !== row) {
        preRow = updatedRegionList[i].row;
      }
    }
    updatedRegionList = setDefaultColSize(updatedRegionList, context.schema.row);
    setRegionList(updatedRegionList);
    return {
      ...context,
      regionList: updatedRegionList
    };
  }, [regionList]);

  const handleAfterMoveDown = useCallback((context) => {
    const updatedRegionList = [...regionList];
    const sourceId = context.sourceId;
    const currentIndex = updatedRegionList.findIndex(n => n.$$id === sourceId);
    const currentItem = updatedRegionList[currentIndex];
    const changeItem = updatedRegionList[currentIndex - 1];
    const tempRow = currentItem.row;
    currentItem.row = changeItem.row;
    changeItem.row = tempRow;

    setRegionList(updatedRegionList);
    return {
      ...context,
      regionList: updatedRegionList
    };
  }, [regionList]);

  const handleAfterMoveUp = useCallback((context) => {
    const updatedRegionList = [...regionList];
    const sourceId = context.sourceId;
    const currentIndex = updatedRegionList.findIndex(n => n.$$id === sourceId);
    const currentItem = updatedRegionList[currentIndex];
    const changeItem = updatedRegionList[currentIndex + 1];
    const tempRow = currentItem.row;
    currentItem.row = changeItem.row;
    changeItem.row = tempRow;

    setRegionList(updatedRegionList);
    return {
      ...context,
      regionList: updatedRegionList
    };
  }, [regionList]);

  return (
    <div>
      {/* Render your layout here using Ant Design components */}
    </div>
  );
};

export default FlexLayout;
