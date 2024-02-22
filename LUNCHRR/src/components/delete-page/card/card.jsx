<<<<<<< HEAD
import React, { useEffect } from "react"
=======
>>>>>>> f58d0dcb61aaae2dc904a89cce9092ddea5a646b
import "./card.css"

export default function Card(props){

<<<<<<< HEAD
    const [card , setCard] = React.useState(false);

    function Change(){
        setCard(!card)
    };

    
    return(
        <button onClick={Change} className={`card ${card ? 'active':''}`}>
            <div className="name" key={props.key}>
=======
    return(
        <div className="card">
            <div className="name">
>>>>>>> f58d0dcb61aaae2dc904a89cce9092ddea5a646b
                <p>{props.grade}</p>
                <p>{props.name}</p>
                <p>{props.surname}</p>
            </div>
            <div className="selector">.</div>
<<<<<<< HEAD
        </button>
=======
        </div>
>>>>>>> f58d0dcb61aaae2dc904a89cce9092ddea5a646b
    )

}