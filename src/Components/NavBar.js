import Button from "./Button"
import "./NavBar.css"

const NavBar = () => {
    return <div className="navbar">
        <Button buttonText="What is Pursuit?"/>
        <Button buttonText="Create an Account"/>
        <Button buttonText="Sign In"/>
    </div>
}

export default NavBar