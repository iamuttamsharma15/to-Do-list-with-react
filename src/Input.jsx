import React from "react";
import "./Form.css"
function Input(props) {
    return <div className="input">
        <input
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            name={props.name}
            onChange={props.onChange}
        />
    </div>



}

export default Input;