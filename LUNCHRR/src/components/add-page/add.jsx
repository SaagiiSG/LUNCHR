import "./add.css"
import Navbar from "../navbar/navbar";

function Add(props){
        const doesNothing = () =>{
            console.log("Button clicked");
        }
    const addPage = <section className="add-page">
                    <h1>Add user</h1>
            <form  >

            <div>
                <label htmlFor="">name</label>
                <input type="text" placeholder="enter name"/>
            </div>
            
            <div>
                <label htmlFor="">surname</label>
                <input type="text" placeholder="enter surname"/>
            </div>

            <div>
                <label htmlFor="">class</label>
                <input type="text" placeholder="enter class "/>
            </div>

            <div>
                <label htmlFor="">phone number</label>
                <input type="text" placeholder="enter phone number"/>
            </div>

                    <button onClick={doesNothing}>Add user</button>
                </form>
                    
                </section>;
    // return(addPage)
        const empty = ""
        if(props.onDisplay){
            return(
                addPage
            )
        }
    
    }
export default Add