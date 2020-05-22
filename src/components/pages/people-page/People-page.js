import React from "react";
import "./people-page.css";
import ItemList from "../../item-list/Item-list";
import PersonDetails from "../../person-details/Person-details";
import Row from "../../row/Row";
import ErrorBoundry from "../../error-boundry/Error-boundry";

class PeoplePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedItem: null
        }
    }

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        })
    };

    render() {
        const {selectedItem} = this.state;
        const {getData, renderItem} = this.props;

        const itemList = (
            <ItemList onItemSelected={this.onItemSelected}
                      selectedItem={selectedItem}
                      getData={getData}
                      renderItem={renderItem}
            />
        );

        const personDetails = (
            <PersonDetails personId={selectedItem}/>
        );

        return (
            <ErrorBoundry>
                <Row left={itemList} right={personDetails}/>
            </ErrorBoundry>
        )
    }
}

export default PeoplePage;