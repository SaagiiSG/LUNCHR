import "./dropmenu.css"
import Uparrow from "./expand_less_up.svg"
import Button from "../button/button"
import React, { useEffect } from "react";
export default function Drop(props){
    
    return(
        <div className="drop-down-menu ">
            <div className="visible">
                <p className="mune-name">{props.gradeName}</p>
              <img src={Uparrow} alt="arrow" id="arrow" className="img" />

            </div>
            <div className="button-container" id="buttons">
                <Button btnName={props.btnName + ".1"}/>
                <Button btnName={props.btnName + ".2"}/>
                <Button btnName={props.btnName + ".3"}/>
            </div>
        </div>
    )
}