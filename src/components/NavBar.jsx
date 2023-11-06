import Button from "./Button";
import { List } from "./List";
import "./NavBar.css";
import { Links } from "./NavLinks";

const Nav = () => {
    return (
        <header>
            <a href="#" className="logo">React</a>
            <ul>
                <List data={Links} />
            </ul>
            <Button type="button" className="getStarted" disabled={true}>Get Started</Button>
        </header>
    )
}

export default Nav