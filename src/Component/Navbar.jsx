import react from "react";
import "./Navbar.css";
import logo from '../assets/logo.png'

function Navbar(){
    return (
       
   <nav className="navbar">
    <img src={logo} alt="logo" id="logo"/>
   <div className="nav-links">
           <a href="#Home">Home</a>
           <a href="#About">About</a>
           <a href="#skills">skills</a>
           <a href="#project">project</a>
           <a href="#contact">contact</a>

         </div>
     </nav>

    );
}

export default Navbar;