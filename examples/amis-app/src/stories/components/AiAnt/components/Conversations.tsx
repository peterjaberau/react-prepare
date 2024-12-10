import { ConversationsProps } from "@ant-design/x"
import { DeleteOutlined, EditOutlined, StopOutlined } from "@ant-design/icons"
import { message } from "antd"
import React from "react"

export const conversationsItemsConfig = [
  {
    key: "0",
    label: "What is Ant Design X?",
  },
  {
    key: "1",
    label: "Conversation 1",
    disabled: false,
  },
  {
    key: "2",
    label: "Conversation 2",
    disabled: false,
  },
  {
    key: "3",
    label: "Conversation 3",
    disabled: false,
  },
]


export const conversationMenuConfig = (conversation: any) => ({
  items: [
    {
      label: "Operation 1",
      key: "operation1",
      icon: <EditOutlined />,
    },
    {
      label: "Operation 2",
      key: "operation2",
      icon: <StopOutlined />,
      disabled: true,
    },
    {
      label: "Operation 3",
      key: "operation3",
      icon: <DeleteOutlined />,
      danger: true,
    },
  ],
  onClick: (menuInfo: any) => {
    message.info(`Click ${conversation.key} - ${menuInfo.key}`)
  },
})
