import React from "react";

function Inputs(props){
    return(
        <input type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onchange}></input>
    );
}

export default Inputs;