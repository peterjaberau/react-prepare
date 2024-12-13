import {
  BaseEventContext,
  InsertEventContext,
  MoveEventContext
} from '../pluginTypes.ts';


export interface LayoutInterface {
  beforeInsert?: (context: any, store: any) => InsertEventContext;
  afterInsert?: (context: any, store: any) => InsertEventContext;
  beforeMove?: (context: any, store: any) => MoveEventContext;
  afterMove?: (context: any, store: any) => MoveEventContext;
  beforeDelete?: (context: any, store: any) => BaseEventContext;
  afterDelete?: (context: any, store: any) => BaseEventContext;
  beforeMoveDown?: (context: any, store: any) => BaseEventContext;
  afterMoveDown?: (context: any, store: any) => BaseEventContext;
  beforeMoveUp?: (context: any, store: any) => BaseEventContext;
  afterMoveUp?: (context: any, store: any) => BaseEventContext;
}
