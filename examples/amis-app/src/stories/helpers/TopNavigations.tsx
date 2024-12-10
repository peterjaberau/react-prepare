import * as React from "react"
import { Autosuggest, TopNavigation } from "@cloudscape-design/components"

export const TopNavigations = () => {
  const [value, setValue] = React.useState("")
  const handleEnteredTextLabel = (value: string) => `Entered value: ${value}`

  return (
    <div id="h">
      <TopNavigation
        identity={{
          href: "#",
          title: "Title with an href",
        }}
        utilities={[
          {
            type: "menu-dropdown",
            text: "Settings",
            iconName: "settings",
            items: [
              {
                id: "1",
                text: "Option 1",
              },
              {
                id: "2",
                text: "Option 2",
              },
              {
                id: "3",
                text: "Option 3",
              },
              {
                id: "4",
                text: "Option 4",
              },
              {
                id: "5",
                text: "Option 5",
              },
            ],
          },
          {
            type: "menu-dropdown",
            text: "John Doe",
            description: "john.doe@example.com",
            iconName: "envelope",
            items: [
              { type: "button", id: "profile", text: "Profile" },
              { type: "button", id: "preferences", text: "Preferences" },
              { type: "button", id: "security", text: "Security" },
              {
                type: "menu-dropdown",
                id: "support-group",
                text: "Support",
                items: [
                  {
                    id: "documentation",
                    text: "Documentation",
                    href: "#",
                    external: true,
                    externalIconAriaLabel: " (opens in new tab)",
                  },
                  {
                    id: "feedback",
                    text: "Feedback",
                    href: "#",
                    external: true,
                    externalIconAriaLabel: " (opens in new tab)",
                  },
                  { id: "support", text: "Customer support" },
                ],
              },
              { type: "button", id: "signout", text: "Sign out" },
            ] as any[],
          },
        ]}
        search={
          <Autosuggest
            onChange={({ detail }) => setValue(detail.value)}
            value={value}
            options={[
              {
                label: "Group 1",
                options: [
                  { value: "Suggestion 1" },
                  { value: "Suggestion 2" },
                  { value: "Suggestion 3" },
                  { value: "Suggestion 4" },
                ],
              },
              {
                label: "Group 2",
                options: [{ value: "Suggestion 5" }, { value: "Suggestion 6" }, { value: "Suggestion 7" }],
              },
            ]}
            ariaLabel="Entered value"
            placeholder="Enter value"
            empty="No matches found"
            enteredTextLabel={handleEnteredTextLabel}
          />
        }
      />
    </div>
  )
}
