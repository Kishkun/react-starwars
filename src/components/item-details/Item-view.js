import React from "react";

import "./item-details.css";
import ErrorButton from "../buttons/Error-button";

const ItemView = (props) => {
    const { item, image, children } = props;
    return (
        <>
            <img className="person-image"
                 src={image} alt="person"/>
            <div className="card-body">
                <h4>{item.name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(children, (child) => {
                            return child
                        })
                    }
                    <li className="list-group-item">
                        <ErrorButton/>
                    </li>
                </ul>
            </div>
        </>
    )
};

export default ItemView;