import React from "react";

import "./item-details.css";
import ErrorButton from "../buttons/Error-button";

const ItemView = ({item, image}) => {

    console.log(item);
    return (
        <>
            <img className="person-image"
                 src={image} alt="person"/>
            <div className="card-body">
                <h4>{item.name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Gender</span>
                        <span>{item.gender}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Birth Year</span>
                        <span>{item.birthYear}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Eye Color</span>
                        <span>{item.eyeColor}</span>
                    </li>
                    <li className="list-group-item">
                        <ErrorButton/>
                    </li>
                </ul>
            </div>
        </>
    )
};

export default ItemView;