
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

  const [onAir , setOnAir] = React.useState(false)

  function displayPage(){
    setOnAir(!onAir)
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
                      
                      <button className="button-function" onClick={displayPage}>
                        <Button btnName={"Add card"}/>
                      </button>
                      
                      <button className="button-function">
                        <Button btnName={"Delete card"}/>
                      </button>
                  
                  </div>
              </nav>
            <section className="page-display">
                {/* <Delete/> */}
                
                <Add
                  onDisplay={onAir}
                />
            </section>
              
        </section>
        
      </section>
  )
}

export default App