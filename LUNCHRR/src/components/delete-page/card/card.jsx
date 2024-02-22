
import React, { useEffect } from "react"
import "./card.css"

export default function Card(props){

    const [card , setCard] = React.useState(false);

    function Change(){
        setCard(!card)
    };
       
    return(
        <button onClick={Change} className={`card ${card ? 'active':''}`}>
            
            <div className="name" key={props.key}>

                <p>{props.grade}</p>
                <p>{props.name}</p>
                <p>{props.surname}</p>
            </div>
            <div className="selector">.</div>

        </button>
    )

}