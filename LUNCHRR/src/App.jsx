
import "./App.css"
import Delete from "./components/delete-page/delete"
import Navbar from "./components/navbar/navbar"
import Login from "./components/login/Login"
// import Read from "./assets/data.js"
import Add from "./components/add-page/add"
function App() {
  
    const data = async () => {
      await fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch((err) => {
          console.log(err)
      })
  }
  return(
      <section>
        {/* <Login/> */}
        <section className="display-pages">
              <Navbar/>
            <section className="page-display">
                {/* <Delete/> */}
                <Add/>
            </section>
              
        </section>
        
      </section>
  )
}

export default App