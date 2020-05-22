import React from "react";

import "./item-details.css";
import ItemView from "./Item-view";
import Spinner from "../spinner/Spinner";
import ErrorIndicator from "../error-indicator/Error-indicator";

class ItemDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            item: null,
            error: false,
            isLoading: false,
            image: null
        }
    }

    onItemLoaded = (item) => {
        this.setState({
            item,
            isLoading: !this.state.isLoading,
            image: this.props.getImageUrl(item)
        })
    };

    onError = () => {
        this.setState({
            error: true
        })
    };

    updateItem = () => {
        const {itemId, getItem } = this.props;

        if (!itemId) {
            return;
        }
        getItem(itemId)
            .then(this.onItemLoaded)
            .catch(this.onError)
    };

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
            this.timeout = setTimeout(this.updateItem, 1500);
        }
    }

    componentWillUnmount() {
        clearInterval(this.timeout);
    }

    render() {
        const {item, error, isLoading, image} = this.state;

        if (error) {
            return <ErrorIndicator/>
        }

        if (!item) {
            return <span>Select a person from a list</span>
        }
        return (
            <div className="person-details card">
                {
                    isLoading ?
                        <Spinner/> :
                        <ItemView item={item} image={image}/>
                }
            </div>
        )
    }
}

export default ItemDetails;