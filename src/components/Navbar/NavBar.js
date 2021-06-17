import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import '../sass/MenuList.scss';
import { FiX } from 'react-icons/fi'
import { FiMenu } from 'react-icons/fi'
import HomePage from '../Pages/HomePage';
import Workspace from '../Pages/Workspace';
import Service from '../Pages/Service';
import Events from '../Pages/Events';
import Reviews from '../Pages/Reviews';
import Contact from '../Pages/Contact';
import Login from '../Sign/Login';
import Signup from '../Sign/Signup';

function NavBar() {

    
    const [click, setClick] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const [scroll, setScroll] = useState(0);

    const handleClick = () => setClick(!click);

    // const changeBackground = () => {
    //     if (window.scrollY >= 40)
    //     {
    //         setNavbar(true);
    //     }
    //     else {
    //         setNavbar(false);
    //     }
    // }

    const changeBackground = () => {
    if((scroll - setScroll) !== 0){
        setNavbar(true);
    }
    else 
    {
        setNavbar(false);
    }
}

    // console.log(window.scrollY);

    window.addEventListener('scroll', changeBackground);

    return (
        <Router>
            <div className={navbar ? 'Container effect' : 'Container'}> 
                <nav>
                    <NavLink exact to="/" className="Fris">Frispes.</NavLink>
                    <div className={click ? "zip active" : "zip"}>
                        <ul>
                            <li><NavLink onClick={handleClick} to="/home">Home</NavLink></li>
                            <li><NavLink onClick={handleClick} to="/work">Workspace</NavLink></li>
                            <li><NavLink onClick={handleClick} to="/serv">Service</NavLink></li>
                            <li><NavLink onClick={handleClick} to="/even">Events</NavLink></li>
                        </ul>
                        <ul>
                        <li><NavLink onClick={handleClick} to="/log">Log In</NavLink></li>
                        <li><NavLink onClick={handleClick} to="/sign">Sign Up</NavLink></li>
                        </ul>
                    </div>
                    <div className="nav-icon" onClick={handleClick}>
                        <span>{click ? <FiX /> :<FiMenu/>}</span>
                    </div>
                    <div className={click ? " zipOne rar" : "zipOne"}></div>
                </nav>
            </div>
            <Switch>
        <Route exact path="/">
            <HomePage/>
        </Route>
        <Route path="/home">
            <HomePage/>
        </Route>
        <Route path="/work">
            <Workspace/>
        </Route>
        <Route path="/serv">
            <Service/>
        </Route> 
        <Route path="/even">
            <Events/>
        </Route>
        <Route path="/revi">
            <Reviews/>
        </Route>
        <Route path="/cont">
            <Contact/>
        </Route>
        <Route path="/log">
            <Login/>
        </Route>
        <Route path="/sign">
            <Signup/>
        </Route> 
        </Switch>
        </Router>
    )
}

export default NavBar;
