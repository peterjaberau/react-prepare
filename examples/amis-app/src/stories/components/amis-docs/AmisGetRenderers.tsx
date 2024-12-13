import * as React from 'react';
import { render as renderAmis } from 'amis';
import { getRenderers } from 'amis';
import 'amis/lib/themes/cxd.css';
import 'amis/lib/helper.css';
import 'amis/sdk/iconfont.css';
// import 'amins/lib/themes/antd.css';
import JsonView from "react18-json-view"
import { useAmisMachine } from "@/stories/machines/amis/amisMachineStore.ts"
import { Flex } from "antd"

export const AmisGetRenderers = () => {
  const { actors, state } = useAmisMachine()

  return (
    <>
      <Flex vertical style={{ padding: '20px'}} justify={'center'} align={'center'}>
        {renderAmis({
          type: 'button',
          label: 'Button',
          "level": "primary",
          "size": "lg",
          "style": {
            "radius": "4px"
          },
        })}
      </Flex>
      <JsonView src={{...state.context}} collapsed={1} displaySize={true} />
    </>
  )
}
