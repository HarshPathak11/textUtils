import React from "react";



export default function Alert(props) {
    function Capitalize(a){
        console.log((a.charAt(0).toUpperCase()+a.slice(1)))
        return (a.charAt(0).toUpperCase()+a.slice(1));
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{Capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
    )
}