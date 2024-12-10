import { useChildMachine, useChildMachineState } from "@/machines/useMyMachines.ts"
import { Button, SpaceBetween } from "@cloudscape-design/components"

export const Profile = () => {
  const profileMachine = useChildMachine("profile")
  const customizeUserMachine = useChildMachine("customizeUser")
  const changePasswordMachine = useChildMachine("changePassword")

  const { statusMessage: statusMessageChangePassword }: any = useChildMachineState(
    "changePassword",
    (state: any) => state.context,
  )

  const {
    username,
    avatar_character,
    avatar_background,
    statusMessage: statusMessageCustomizeUser,
  }: any = useChildMachineState("customizeUser", (state: any) => state.context)

  const handlePasswordFormSubmit = (e: any) => {
    e.preventDefault()
    changePasswordMachine.send({
      type: "save",
      password: "password",
      newPassword: "password",
    })
  }

  const handleCustomizeFormSubmit = (e: any) => {
    e.preventDefault()
    customizeUserMachine.send({ type: "save" })
  }

  const handleAvatarBackgroundChange = (e: any) => {
    customizeUserMachine.send({
      type: "changeAvatarBackground",
      value: e.target.value,
    })
  }

  const handleAvatarCharacterChange = (e: any) => {
    customizeUserMachine.send({
      type: "changeAvatarCharacter",
      value: e.target.value,
    })
  }

  const handleUsernameChange = (e: any) => {
    customizeUserMachine.send({
      type: "changeUsername",
      value: e.target.value,
    })
  }

  const handleLogoutClick = () => {
    profileMachine.send({ type: "logout" })
  }

  return (
    <SpaceBetween size={"xs"} direction={"vertical"}>
      <Button onClick={handleAvatarBackgroundChange}>handleAvatarBackgroundChange</Button>
      <Button onClick={customizeUserMachine}>customizeUserMachine</Button>
      <Button onClick={handleUsernameChange}>handleUsernameChange</Button>
      <Button onClick={handleLogoutClick}>handleLogoutClick</Button>

      <Button onClick={handlePasswordFormSubmit}>Change Password</Button>
      <Button onClick={handleLogoutClick}>Sign out</Button>
    </SpaceBetween>
  )
}
