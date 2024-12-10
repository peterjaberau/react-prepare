import React, { useEffect } from "react"
import {
  Attachments,
  Bubble,
  Conversations,
  Prompts,
  Sender,
  Welcome,
  useXAgent,
  useXChat,
  ConversationsProps,
  ThoughtChain,
  XProvider,
} from "@ant-design/x"
import {
  CheckCircleOutlined,
  CloudUploadOutlined,
  CommentOutlined,
  DeleteOutlined,
  EditOutlined,
  EllipsisOutlined,
  FireOutlined,
  HeartOutlined,
  LoadingOutlined,
  PaperClipOutlined,
  PlusOutlined,
  ReadOutlined,
  ShareAltOutlined,
  SmileOutlined,
  StopOutlined,
} from "@ant-design/icons"
import { Flex, Badge, Button, type GetProp, message, Space, Card, Divider } from "antd"
import { Button as ButtonCs } from "@cloudscape-design/components"
import { createStyles } from "antd-style"
import {
  initialState,
  roles,
  conversationItems,
  promptsItems,
  promptsItemsGroupped,
  conversationMenuItems,
  throughChainItems,
} from "./ai-ant/initialConfig.tsx"
import { useRootMachine } from "@/stories/machines/rootMachineStore.ts"


export const AiAnt: React.FC = () => {

  const { state, components, actor } = useRootMachine()

  const { styles } = useStyle()
  const [headerOpen, setHeaderOpen] = React.useState(false)
  const [content, setContent] = React.useState("")
  const [attachedFiles, setAttachedFiles] = React.useState<GetProp<typeof Attachments, "items">>([])
  const [agent] = useXAgent({
    request: async ({ message }, { onSuccess }) => {
      onSuccess(`Mock success return. You said: ${message}`)
    },
  })
  const { onRequest, messages, setMessages } = useXChat({
    agent,
  })

  useEffect(() => {
    if (components.aiAnt.internal.activeKey !== undefined) {
      setMessages([])
    }
  }, [components.aiAnt.internal.activeKey])

  const onAddConversation = () => {
    actor.send({ type: "onAddConversation" })
  }

  const onConversationClick = (key: any) => {
    actor.send({ type: "onConversationClick", data: { key } })
  }



  const onSubmit = (nextContent: string) => {
    if (!nextContent) return
    onRequest(nextContent)
    setContent("")
  }

  const onPromptsItemClick = (info: any) => {
    onRequest(info.data.description as string)
  }


  const handleFileChange = (info: any) => setAttachedFiles(info.fileList)


  const items: GetProp<typeof Bubble.List, "items"> = messages.map(({ id, message, status }) => ({
    key: id,
    loading: status === "loading",
    role: status === "local" ? "local" : "ai",
    content: message,
  }))

  const attachmentsNode = (
    <Badge dot={attachedFiles.length > 0 && !headerOpen}>
      <Button type="text" icon={<PaperClipOutlined />} onClick={() => setHeaderOpen(!headerOpen)} />
    </Badge>
  )

  const senderHeader = (
    <Sender.Header
      title="Attachments"
      open={headerOpen}
      onOpenChange={setHeaderOpen}
      styles={{
        content: {
          padding: 0,
        },
      }}
    >
      <Attachments
        beforeUpload={() => false}
        items={attachedFiles}
        onChange={handleFileChange}
        placeholder={(type) =>
          type === "drop"
            ? { title: "Drop file here" }
            : {
                icon: <CloudUploadOutlined />,
                title: "Upload files",
                description: "Click or drag files to this area to upload",
              }
        }
      />
    </Sender.Header>
  )


  return (
    <Card>
      <XProvider>
        <Flex vertical={false} gap={20}>
          <Flex vertical={true}>
            <ButtonCs onClick={onAddConversation} variant="primary" iconName="add-plus">
              New Conversation
            </ButtonCs>
            <Conversations
              menu={components.aiAnt.conversationList.menu}
              items={components.aiAnt.conversationList.items}
              activeKey={components.aiAnt.internal.activeKey}
              onActiveChange={onConversationClick}
            />
          </Flex>

          <Flex vertical style={{ flex: 1 }} gap={8}>
            {items.length > 0 && <Bubble.List style={{ flex: 1 }} items={items} roles={roles} />}

            {items.length === 0 && (
              <Bubble.List
                style={{ flex: 1 }}
                items={[
                  {
                    content: (
                      <>
                        <Welcome
                          {...components.aiAnt.welcome}
                          extra={
                            <Space>
                              <Button icon={<ShareAltOutlined />} />
                              <Button icon={<EllipsisOutlined />} />
                            </Space>
                          }
                        />
                        <Prompts {...components.aiAnt.promptsGroupped} onItemClick={onPromptsItemClick} />
                      </>
                    ),
                  },
                ]}
                roles={components.aiAnt.roles}
              />
            )}


            <Prompts {...components.aiAnt.promptsItems} onItemClick={onPromptsItemClick} />
            <Sender
              value={content}
              header={senderHeader}
              onSubmit={onSubmit}
              onChange={setContent}
              prefix={attachmentsNode}
              loading={agent.isRequesting()}
            />
          </Flex>
          <ThoughtChain
            style={{ width: 200 }}
            items={components.aiAnt.throughChain.items}
          />
        </Flex>
      </XProvider>
    </Card>
  )
}



export const useStyle = createStyles(({ token, css }) => {
  return {
    layout: css`
      width: 100%;
      min-width: 1000px;
      height: 722px;
      border-radius: ${token.borderRadius}px;
      display: flex;
      background: ${token.colorBgContainer};
      font-family: AlibabaPuHuiTi, ${token.fontFamily}, sans-serif;

      .ant-prompts {
        color: ${token.colorText};
      }
    `,
    menu: css`
      background: ${token.colorBgLayout}80;
      width: 280px;
      height: 100%;
      display: flex;
      flex-direction: column;
    `,
    conversations: css`
      padding: 0 12px;
      flex: 1;
      overflow-y: auto;
    `,
    chat: css`
      height: 100%;
      width: 100%;
      max-width: 700px;
      margin: 0 auto;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      padding: ${token.paddingLG}px;
      gap: 16px;
    `,
    messages: css`
      flex: 1;
    `,
    placeholder: css`
      padding-top: 32px;
    `,
    sender: css`
      box-shadow: ${token.boxShadow};
    `,
    logo: css`
      display: flex;
      height: 72px;
      align-items: center;
      justify-content: start;
      padding: 0 24px;
      box-sizing: border-box;

      img {
        width: 24px;
        height: 24px;
        display: inline-block;
      }

      span {
        display: inline-block;
        margin: 0 8px;
        font-weight: bold;
        color: ${token.colorText};
        font-size: 16px;
      }
    `,
    addBtn: css`
      background: #1677ff0f;
      border: 1px solid #1677ff34;
      width: calc(100% - 24px);
      margin: 0 12px 24px 12px;
    `,
    chain: css`
      height: 100%;
    `,
  }
})
