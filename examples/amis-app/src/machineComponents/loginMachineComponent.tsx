import { useChildMachine, useChildMachineState } from "@/machines/useMyMachines.ts"
import { SpaceBetween, Button, Container, Header, Box, ContentLayout } from "@cloudscape-design/components"
import { Flex } from "antd"

const Login = () => {
  const statusMessage = useChildMachineState("login", (state: any) => state.context.statusMessage)
  const loginMachine = useChildMachine("login")

  const handleLogin = (e: any) => {
    e.preventDefault()
    const username: any = "admin"
    const password: any = "password"
    loginMachine.send({
      type: "login",
      username,
      password,
    })
  }

  const handleRegister = (e: any) => {
    e.preventDefault()
    const username: any = "admin"
    const password: any = "password"
    loginMachine.send({
      type: "register",
      username,
      password,
    })
  }

  return (

    <ContentLayout defaultPadding maxContentWidth={600}>
      <Container>
        <Flex vertical={false} gap={4} align={'center'} justify={'center'}>
          <Button onClick={handleLogin}>Login</Button>
          <Button onClick={handleRegister} variant="normal">
            Register
          </Button>
        </Flex>
      </Container>
    </ContentLayout>


  )
}

export default Login
