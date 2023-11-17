import { useContext } from "react";
import Button from "./Button";
import { List } from "./List";
import "./NavBar.css";
import { Links } from "./NavLinks";
import { User } from "../App";


const Nav = () => {
    const data = useContext(User)
    return (
        <header>
            <a href="#" className="logo">React</a>
            <ul>
                <List data={Links} />
                <li>{data.firstName}</li>
            </ul>
            <Button type="button" className="getStarted" disabled={true}>Get Started</Button>
        </header>
    )
}

export default Nav