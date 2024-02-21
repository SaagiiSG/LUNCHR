import "./button.css"

export default function Button(props){
    
    return(
        <button className="navbutton">{props.btnName}</button>
    )
}