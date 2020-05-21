import React from "react";

import "./buttons.css";

class ErrorButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            renderError: false
        }
    }

    render() {
        if (this.state.renderError) {
            this.foo.bar = 0;
        }

        return (
            <button
                className="error-button btn btn-danger btn-lg"
                onClick={() => this.setState({renderError: true})}>
                Throw Error
            </button>
        );
    }
}

export default ErrorButton;