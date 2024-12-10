import React from "react"
import { Welcome as WelcomePrompt} from "@ant-design/x"
import { Button, Space } from "antd"
import { EllipsisOutlined, ShareAltOutlined } from "@ant-design/icons"

export const Welcome: any = () => {
  return (
    <Welcome
      icon="https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*s5sNRo5LjfQAAAAAAAAAAAAADgCCAQ/fmt.webp"
      title="Hello, I'm Ant Design X"
      description="Base on Ant Design, AGI product interface solution, create a better intelligent vision~"
      extra={
        <Space>
          <Button icon={<ShareAltOutlined />} />
          <Button icon={<EllipsisOutlined />} />
        </Space>
      }
    />
  )
}
