import React, { useEffect } from "react"
import "./button.css"

export default function Button(props){
    const [look , setLook] = React.useState(false)

    function Change(){
        setLook(!look)
    }
    
    function pageChange(){
        const [visible , setVisible] = React.useState(false)
        useEffect(()=>{
            setVisible(!visible)
        }, [])
    }

    const handleClick= () =>{
        Change();
        pageChange()
    }
    return(
    <button onClick={handleClick}className={`navbutton ${look ?'nav-btn-active' :''}`} >{props.btnName}</button>
    )
}