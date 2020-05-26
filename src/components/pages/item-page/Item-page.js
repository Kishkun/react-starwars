import React from "react";
import "./item-page.css";
import ItemList from "../../item-list/Item-list";
import ItemDetails from "../../item-details/Item-details";
import Row from "../../row/Row";
import ErrorBoundry from "../../error-boundry/Error-boundry";

class ItemPage extends React.Component {

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
        const {
            getData,
            getItem,
            renderItem,
            getImageUrl,
            children} = this.props;

        const itemList = (
            <ItemList onItemSelected={this.onItemSelected}
                      selectedItem={selectedItem}
                      getData={getData}
                      renderItem={renderItem}
            />
        );

        const itemDetails = (
            <ItemDetails itemId={selectedItem}
                         getItem={getItem}
                         getImageUrl={getImageUrl}
                         children={children}
            />
        );

        return (
            <ErrorBoundry>
                <Row left={itemList} right={itemDetails}/>
            </ErrorBoundry>
        )
    }
}

export default ItemPage;