
import { Link } from "react-router-dom";
import Button from "./button.jsx";
import "./styles/navBar.css"

function NavBar() {

    return(
        <div className="containerNavBar">
            <div className="buttonAcceuille">
                <Button text="CRUD REACT"  />
            </div>
            <div className="buttonNav">
                <Link to={"/create"}>
                    <Button text="CREATE CONTACT" />
                </Link>
                <Link to={"/"}>
                <Button text="SHOW CONTACTS" />
                </Link>
            </div>
        </div>
    )
}

export default NavBar;