import React, { useEffect } from "react"
import "./button.css"

export default function Button(props){
    const [look , setLook] = React.useState(false)

    function Change(){
        setLook(!look)
    }
    
    return(
    <button onClick={Change} className={`navbutton ${look ?'nav-btn-active' :''}`} >{props.btnName}</button>
    )
}