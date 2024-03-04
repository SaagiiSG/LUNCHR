import "./dashboard.css"
import Download from "./download arrow.jsx"
export default function Dashboard(props){

    return(
        <section className="dashboard">
           <div className="top-three">
                <div className="info-el this-month">
                    <p>This month:</p>
                    <h1>{props.mealNumber}</h1>
                </div>
                <div className="info-el total">
                    <p>Total:</p>
                    <h1>{props.totalNumber}</h1>
                </div>
                <div className="info-el avarage-student">
                    <p>Avarage student:</p>
                    <h1>{props.mealNumber}</h1>
                </div>
           </div>

            <section className="tabel view">
                <div className="month-container">
                    <h3>{props.monthBeforeLastMonth}</h3>
                    <h3>{props.lastMonth}</h3>
                    <h3>{props.thisMonth}</h3>
                </div>
                
            </section>
            <div className="floating-island">
                <h3>Class Total: {props.classTotal}</h3>
                <h3>Download excel sheet <img src={Download}/></h3>
            </div>
        </section>
    )
}