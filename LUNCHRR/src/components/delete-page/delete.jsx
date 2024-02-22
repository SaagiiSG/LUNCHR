import "./delete.css"

import Navbar from "../navbar/navbar"
import ButtonMain from "../mainButton/buttonMain"
import Search from "./search/search"
import Card from "./card/card"
<<<<<<< HEAD
import React, { useEffect } from "react"
// import Json from "./data.jsx"    
export default function Delete(){
    const [users , setUsers] = React.useState([])

    useEffect(() => {
        data();
    }, [])
    const data = async () => {
        await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setUsers(json))
        .catch((err) => {
            console.log(err)
        })
    }
    console.log(users)
=======

export default function Delete(){
>>>>>>> f58d0dcb61aaae2dc904a89cce9092ddea5a646b
    return(
        <section className="delete-page">
                <Navbar/>
            <section className="main">
                <Search/>
                    <section className="display">
<<<<<<< HEAD
                       
                        {users.map((user) => 
                            <Card
                            key={user.key}
                            grade={user.id}
                            name={user.username}
                            />
                        )}
=======
                        <Card
                            grade={"11.1"}
                            name={"Saran-Ochir"}
                            surname={".S"}
                        />
                    
>>>>>>> f58d0dcb61aaae2dc904a89cce9092ddea5a646b
                    </section>
                
                <section className="button-container">

                    <ButtonMain buttonname={"Delete user"}/>

                </section>
                
            </section>
        </section>
    )
}