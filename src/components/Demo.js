import React from "react";
import Demo2 from "./Demo2";

const Demo = (props) => {
    return <div>
        Demo Component
        <h1>{props.text}</h1>

        <Demo2 text2 = {props.text}/>
        Demo Component
        <h1>{props.text}</h1>
        </div>
};

export default Demo;
