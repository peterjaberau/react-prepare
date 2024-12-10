import React, { useEffect } from "react"
import { Prompts } from "@ant-design/x"
import { createStyles } from "antd-style"
import { GetProp, Space } from "antd"
import { CommentOutlined, FireOutlined, HeartOutlined, ReadOutlined, SmileOutlined } from "@ant-design/icons"


const renderTitle = (icon: React.ReactElement, title: string) => (
  <Space align="start">
    {icon}
    <span>{title}</span>
  </Space>
)


export const promptItems = [
  {
    key: "1",
    description: "Hot Topics",
    icon: <FireOutlined style={{ color: "#FF4D4F" }} />,
  },
  {
    key: "2",
    description: "Design Guide",
    icon: <ReadOutlined style={{ color: "#1890FF" }} />,
  },
]

export const promptGroupItems = [
  {
    key: "1",
    label: renderTitle(<FireOutlined style={{ color: "#FF4D4F" }} />, "Hot Topics"),
    description: "What are you interested in?",
    children: [
      {
        key: "1-1",
        description: `What's new in X?`,
      },
      {
        key: "1-2",
        description: `What's AGI?`,
      },
      {
        key: "1-3",
        description: `Where is the doc?`,
      },
    ],
  },
  {
    key: "2",
    label: renderTitle(<ReadOutlined style={{ color: "#1890FF" }} />, "Design Guide"),
    description: "How to design a good product?",
    children: [
      {
        key: "2-1",
        icon: <HeartOutlined />,
        description: `Know the well`,
      },
      {
        key: "2-2",
        icon: <SmileOutlined />,
        description: `Set the AI role`,
      },
      {
        key: "2-3",
        icon: <CommentOutlined />,
        description: `Express the feeling`,
      },
    ],
  },
]



