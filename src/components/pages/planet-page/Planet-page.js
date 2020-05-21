import React from "react";
import "./planet-page.css";
import ItemList from "../../item-list/Item-list";
import PersonDetails from "../../person-details/Person-details";
import ErrorIndicator from "../../error-indicator/Error-indicator";

class PeoplePage extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            selectedItem: null,
            hasError: false
        }
    }

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        })
    };

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    }

    render() {
        const {selectedItem, hasError} = this.state;
        const {getData, renderItem} = this.props;

        if (hasError) {
            return (
                <div className="error-wrapper">
                    <ErrorIndicator/>
                </div>
            )
        }

        return (
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList onItemSelected={this.onItemSelected}
                              selectedItem={selectedItem}
                              getData={getData}
                              renderItem={renderItem}
                    />
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={selectedItem}/>
                </div>
            </div>
        )
    }
}

export default PeoplePage;