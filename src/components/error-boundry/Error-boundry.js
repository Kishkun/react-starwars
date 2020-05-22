import React from "react";
import ErrorIndicator from "../error-indicator/Error-indicator";

class ErrorBoundry extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    }

    render() {
        const {hasError} = this.state;

        if (hasError) {
            return (
                <div className="error-wrapper">
                    <ErrorIndicator/>
                </div>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundry;