import Profile from "./profile/profile"
import Button from "./button/button"
import Drop from "./drop-down-menu/dropmenu"
import "./navbar.css"
export default function Navbar(){
    return(
        <nav>
            <Profile
                name={"Name"}
                position={"Position"}
            />
        <section className="scroll"> 
        <Button
            btnName={"Add card"}/>

        <Button
            btnName={"Delete card"}/>
       
             <Drop gradeName={"12"}
            btnName={"12"}/>
            <Drop gradeName={"11"}
            btnName={"11"}/>
            <Drop gradeName={"10"}
            btnName={"10"}/>
            <Drop gradeName={"9"}
            btnName={"9"}/>
             <Drop gradeName={"8"}
            btnName={"8"}/>
            <Drop gradeName={"7"}
            btnName={"7"}/>
            <Drop gradeName={"6"}
            btnName={"6"}/>
        </section>
        </nav>
        
    )
}