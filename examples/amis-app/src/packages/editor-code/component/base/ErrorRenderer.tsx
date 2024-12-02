import * as React from "react"
import { Alert, Button } from "antd"
import { useState } from "react"

const { ErrorBoundary } = Alert

const ThrowError: React.FC = () => {
  const [error, setError] = useState<Error>()
  const onClick = () => {
    setError(new Error("An Uncaught Error"))
  }

  if (error) {
    throw error
  }
  return (
    <Button danger onClick={onClick}>
      Click me to throw an error
    </Button>
  )
}

interface ErrorBoundaryWrapperProps {
  children: React.ReactNode
}

interface ErrorBoundaryWrapperState {
  hasError: boolean
  error: Error | null
}

class ErrorBoundaryWrapper extends React.Component<ErrorBoundaryWrapperProps, ErrorBoundaryWrapperState> {
  state: ErrorBoundaryWrapperState = { hasError: false, error: null }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <Alert message="Something went wrong." description={this.state.error?.message} type="error" />
    }

    return this.props.children
  }
}

export class ErrorRenderer extends React.Component<any> {
  render() {
    return (
      <ErrorBoundaryWrapper>
        <ThrowError />
      </ErrorBoundaryWrapper>
    )
  }
}
