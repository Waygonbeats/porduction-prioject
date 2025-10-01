import React, { ErrorInfo } from "react";
interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props );
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error:Error) {
 
    return { hasError: true };
  }

  componentDidCatch(error:Error, errorInfo:ErrorInfo) {

    console.log(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
    
      return <h1>Something went wrong.</h1>;
    }

    return children; 
  }
}
export { ErrorBoundary };