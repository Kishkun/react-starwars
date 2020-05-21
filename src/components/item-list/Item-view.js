import React from "react";

import "./item-list.css";

const ItemView = (props) => {
    const {itemList, onItemSelected, selectedItem, renderItem} = props;

    return (
        <>
            {itemList.map((item) => {
                const isSelected = selectedItem === item.id;
                const label = renderItem(item);
                return (
                    <li
                        className={
                            isSelected ?
                                "list-group-item active" :
                                "list-group-item"
                        }
                        key={item.id}
                        onClick={() => onItemSelected(item.id)}
                    >
                        {label}
                    </li>
                )
            })}
        </>
    )
};

export default ItemView;