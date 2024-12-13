import * as React from 'react';
import { render as renderAmis } from 'amis';
import { getRenderers } from 'amis';
import 'amis/lib/themes/cxd.css';
import 'amis/lib/helper.css';
import 'amis/sdk/iconfont.css';
import JsonView from "react18-json-view";
import { useAmisMachine } from "@/stories/machines/amis/amisMachineStore.ts";
import { Flex } from "antd";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Board, BoardItem } from "@cloudscape-design/board-components";
import { Header } from "@cloudscape-design/components";
import { boardI18nStrings } from "@/amis/helpers/board-helpers.tsx";

interface SpinnerErrorComponentProps {
  isLoading: boolean;
  error: Error | null;
}

export const SpinnerErrorComponent: React.FC<SpinnerErrorComponentProps> = ({ isLoading, error }) => {
  if (isLoading) {
    return <div className="spinner">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }

  return null;
};


export const StoryBoard = {
  i18nStrings: {
    empty: "No items"
  },
  boardItems: [
    {
      id: "boardItemPreview",
      definition: {},
      columnSpan: 1,
      rowSpan: 4,
      data: {
        title: "Preview",
        description: "",
        content: ""
      }
    },
    {
      id: "boardItemPlugin",
      definition: {},
      columnSpan: 3,
      rowSpan: 4,
      data: {
        title: "Plugin",
        description: "",
        content: ""
      }
    },
    {
      id: "boardItemTpls",
      definition: {},
      columnSpan: 1,
      rowSpan: 5,
      data: {
        title: "Templates",
        description: "",
        content: ""
      }
    },
    {
      id: "boardItemAllPlugins",
      definition: {},
      columnSpan: 1,
      rowSpan: 5,
      data: {
        title: "All Plugins",
        description: "",
        content: ""
      }
    },
    {
      id: "boardItemAllTemplates",
      definition: {},
      columnSpan: 1,
      rowSpan: 5,
      data: {
        title: "All Templates",
        description: "",
        content: ""
      }
    },
    {
      id: "boardItemStateContext",
      definition: {},
      columnSpan: 1,
      rowSpan: 5,
      data: {
        title: "State Context",
        description: "",
        content: ""
      }
    }
  ]
};

const BoardItemPreview = React.memo(() => (
  <Flex vertical style={{ padding: '20px' }} justify={'center'} align={'center'}>
    {renderAmis({
      type: 'button',
      label: 'Button',
      level: 'primary',
      size: 'lg',
      style: {
        radius: '4px',
      },
    })}
  </Flex>
));

const BoardItemPlugin = React.memo((props: any) => (
  <JsonView  collapsed={1} displaySize={true} src={{ ...props }} />
));

const BoardItemTpls = React.memo((props: any) => <JsonView collapsed={1} displaySize={true} src={{ ...props }} />)

const BoardItemAllPlugins = React.memo((props: any) =>
    <JsonView collapsed={1} displaySize={true} src={{ ...props }}  />
  );

const BoardItemAllTemplates = React.memo((props: any) =>
  <JsonView collapsed={1} displaySize={true} src={{ ...props }}  />
);

const BoardItemStateContext = React.memo((props: any) =>
  <JsonView collapsed={1} displaySize={true} src={{ ...props }}  />
);


export const RenderAmisComponent = () => {
  const { id } = useParams() as any;
  const { actor, state } = useAmisMachine();
  const [boardItems, setBoardItems] = React.useState(StoryBoard.boardItems);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<Error | null>(null);

  useEffect(() => {
    if (id) {
      actor.send({ type: 'CONNECT_TO_COMPONENT', rendererName: id });
      setIsLoading(false);
    } else {
      setError(new Error('Component ID not found'));
      setIsLoading(false);
    }
  }, [id]);



  const BoardItemComponentMapping = {
    boardItemPreview: { component: BoardItemPreview, props: {} },
    boardItemPlugin: { component: BoardItemPlugin, props: { ...state.context.connectedComponent } },
    boardItemTpls: { component: BoardItemTpls, props: { ...state.context.tpls } },
    boardItemAllPlugins: { component: BoardItemAllPlugins, props: { plugins: state.context.plugins, pluginEvents: state.context.pluginEvents, pluginActions: state.context.pluginActions   } },
    boardItemAllTemplates: { component: BoardItemAllTemplates, props: { ...state.context.tpls } },
    boardItemStateContext: { component: BoardItemStateContext, props: { ...state.context } }
  } as any;


  return (
    <>
      <SpinnerErrorComponent isLoading={isLoading} error={error} />
      {!isLoading && !error && (
        <Board
          items={boardItems}
          renderItem={(item: any): any => {
            const ComponentInfo = BoardItemComponentMapping[item.id] ;

            if (!ComponentInfo) {
              console.error(`Component for id ${item.id} not found`);
              return null;
            }
            const { component: Component, props } = ComponentInfo;

            return (
              <BoardItem header={<Header>{item.data.title}</Header>} i18nStrings={StoryBoard.i18nStrings as any}>
                <Component {...props}/>
              </BoardItem>
            );
          }}
          i18nStrings={boardI18nStrings}
          onItemsChange={(event) => console.log('onItemsChange----', event.detail.items as any)}
          empty="empty"
        />
      )}
    </>
  );
};
