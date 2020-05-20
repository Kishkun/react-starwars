import React from "react";
import "./spinner.css";

const Spinner = () => {
    return (
        <div className="loadingio-spinner-double-ring">
            <div className="ldio">
                <div></div>
                <div></div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
            </div>
        </div>
    )
};

export default Spinner;