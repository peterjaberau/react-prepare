## Command Bar
- **Do** `Find and select command`
- **Do** `Initialize arguments to submit`
- **Transition** to [Command Bar.Command selected](#command-barcommand-selected)

**On** `Add commands`:

- **Do** `inline:Command Bar.Closed#Add commands[-1]#transition[0]`

**On** `Remove commands`:

- **Do** `inline:Command Bar.Closed#Remove commands[-1]#transition[0]`


## Command Bar.Selecting command
**On** `Select command`:

- **Do** `Set selected command`
- **Do** `Initialize arguments to submit`
- **Transition** to [Command Bar.Command selected](#command-barcommand-selected)


## Command Bar.Command selected
**On** `always` if `Command has no arguments`:

- **Do** `Execute command`
- **Transition** to [Command Bar.Closed](#command-barclosed)

**On** `always` if `All arguments are skippable`:

- **Transition** to [Command Bar.Checking Arguments](#command-barchecking-arguments)

**On** `always`:

- **Do** `Set current argument to first non-skippable`
- **Transition** to [Command Bar.Gathering arguments](#command-bargathering-arguments)


## Command Bar.Gathering arguments
**On** `Change current argument`:

- **Do** `Set current argument`

**On** `Deselect command`:

- **Do** `inline:Command Bar.Gathering arguments#Deselect command[-1]#transition[0]`
- **Transition** to [Command Bar.Selecting command](#command-barselecting-command)

## Command Bar.Gathering arguments.Awaiting input
**On** `Submit argument`:

- **Transition** to [Command Bar.Gathering arguments.Validating](#command-bargathering-argumentsvalidating)


## Command Bar.Gathering arguments.Validating
**Invoke** from source `Validate argument` (ID: `validateSingleArgument`)

**When invoked actor done** with ID `validateSingleArgument`:

- **Do** `enqueueValidArgsToSubmit`
- **Transition** to [Command Bar.Checking Arguments](#command-barchecking-arguments)

**On** `error.platform.validateSingleArgument`:

- **Transition** to [Command Bar.Gathering arguments.Awaiting input](#command-bargathering-argumentsawaiting-input)



## Command Bar.Review
**On entry:**
- **Do** `Clear current argument`

**On** `Submit command`:

- **Do** `Execute command`
- **Transition** to [Command Bar.Closed](#command-barclosed)

**On** `Add argument`:

- **Do** `Set current argument`
- **Transition** to [Command Bar.Gathering arguments](#command-bargathering-arguments)

**On** `Remove argument`:

- **Do** `Remove argument`

**On** `Edit argument`:

- **Do** `Set current argument`
- **Transition** to [Command Bar.Gathering arguments](#command-bargathering-arguments)


## Command Bar.Checking Arguments
**Invoke** from source `Validate all arguments` (ID: `validateArguments`)

**When invoked actor done** with ID `validateArguments` if `Command needs review`:

- **Transition** to [Command Bar.Review](#command-barreview)

**When invoked actor done** with ID `validateArguments`:

- **Do** `Execute command`
- **Transition** to [Command Bar.Closed](#command-barclosed)

**On** `error.platform.validateArguments`:

- **Do** `Set current argument to first non-skippable`
- **Transition** to [Command Bar.Gathering arguments](#command-bargathering-arguments)

