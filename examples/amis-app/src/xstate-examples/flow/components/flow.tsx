import { createMachine } from "xstate";
import PageComponent1 from "./PageComponent1"
import PageComponent2 from "./PageComponent2"

const flow = {
  id: "exampleFlow",
  stateMachine: createMachine({
    id: "exampleFlow",
    initial: "page1",
    states: {
      page1: {
        on: {
          NEXT: "page2",
        },
      },
      page2: {
        on: {
          BACK: "page1",
        },
      },
    },
  }),
  pages: {
    page1: {
      component: PageComponent1,
      properties: (context: any, pageApi: any) => ({
        title: "Page 1",
        onNext: () => pageApi.send({ type: "NEXT" }),
      }),
    },
    page2: {
      component: PageComponent2,
      properties: (context: any, pageApi: any) => ({
        title: "Page 2",
        onBack: () => pageApi.send({ type: "BACK" }),
      }),
    },
  },
};

export default flow;
