import React from "react";

import "./item-list.css";
import Spinner from "../spinner/Spinner";
import ItemView from "./Item-view";
import ErrorIndicator from "../error-indicator/Error-indicator";

class ItemList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            itemList: null,
            error: false
        }
    }

    onItemLoaded = (itemList) => {
        this.setState({
            itemList
        })
    };

    onError = () => {
        this.setState({
            error: true
        })
    };

    componentDidMount() {
        const {getData} = this.props;
        getData()
            .then(this.onItemLoaded)
            .catch(this.onError)
    }

    render() {
        const {itemList, error} = this.state;
        const {onItemSelected, selectedItem, renderItem} = this.props;

        if (error) {
            return <ErrorIndicator/>
        }

        return (
            <ul className="item-list list-group">
                {itemList ?
                    <ItemView itemList={itemList}
                              onItemSelected={onItemSelected}
                              renderItem={renderItem}
                              selectedItem={selectedItem}
                    /> :
                    <Spinner/>
                }
            </ul>
        );
    }
}

export default ItemList;