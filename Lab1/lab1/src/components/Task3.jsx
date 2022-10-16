import React from "react";

const product1 = {name: "Jerry", tt: "mouse"}

const Product = (props) => {
    return (
        <div>
            I'm a {props.product.name} and I am a {props.product.tt}
        </div>
    );
}

const Task3 = () => {
    return (
        <>
            <h1>Task3</h1>
            <div>
                <strong><Product product={product1}/></strong>
            </div>
        </>
    );
}

export default Task3;
