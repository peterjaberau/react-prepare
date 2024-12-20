import {
  BaseEventContext,
  InsertEventContext,
  MoveEventContext
} from '../plugin';


export interface LayoutInterface {
  beforeInsert?: (
    context: InsertEventContext,
    store: any
  ) => InsertEventContext;
  afterInsert?: (context: InsertEventContext, store: any) => InsertEventContext;
  beforeMove?: (context: MoveEventContext, store: any) => MoveEventContext;
  afterMove?: (context: MoveEventContext, store: any) => MoveEventContext;
  beforeDelete?: (context: BaseEventContext, store: any) => BaseEventContext;
  afterDelete?: (context: BaseEventContext, store: any) => BaseEventContext;
  beforeMoveDown?: (context: BaseEventContext, store: any) => BaseEventContext;
  afterMoveDown?: (context: BaseEventContext, store: any) => BaseEventContext;
  beforeMoveUp?: (context: BaseEventContext, store: any) => BaseEventContext;
  afterMoveUp?: (context: BaseEventContext, store: any) => BaseEventContext;
}
