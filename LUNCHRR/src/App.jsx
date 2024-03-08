
import "./App.css"
import Delete from "./components/delete-page/delete"
import Login from "./components/login/Login"
import Profile from "./components/navbar/profile/profile"
import Button from "./components/navbar/button/button"
// import Read from "./assets/data.js"
import Add from "./components/add-page/add"
import React from "react"
function App() {
  
    const data = async () => {
      await fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch((err) => {
          console.log(err)
      })
  }

  const [onAdd , setOnAdd] = React.useState(false)
  const [onDelete , setOnDelete] = React.useState(false)
  const [onDashboard , setOnDashboard] = React.useState(true)
  
  function displayAdd(){
        setOnAdd(!onAdd)
        if(onAdd = true){
          setOnDelete(false)
          
          setOnDashboard(false)
        }
      }
      function displayDelete(){
        setOnDelete(!onDelete)
        if(onDelete = true){
          setOnAdd(onAdd = false)
          if(onAdd = false){
            console.log("onAdd inactive")
          }
          setOnDashboard(onDashboard = false)
        }
      }    
  return(
      <section>
        <Login/>
        <section className="display-pages">
              <nav>
                      <Profile 
                      name={"Saran-Ochir"}
                      position={"11.1"}
                      />
                  <div className="scroll">
                    
                      <button className="button-function">
                        <Button btnName={"Dashboard"}/>
                      </button>
                      
                      <button className="button-function" onClick={displayAdd}>
                        <Button btnName={"Add user"} onDisplay={onAdd}/>
                      </button>
                      
                      <button className="button-function" onClick={displayDelete}>
                        <Button btnName={"Delete user"}
                        onDisplay={onAdd}
                        />
                      </button>

                  </div>
                  
              </nav>
            <section className="page-display">
                <Delete
                onDisplay={onDelete}/>
                
                <Add
                  onDisplay={onAdd}
                />
                
                
            </section>
              
        </section>
        
      </section>
  )
}

export default App