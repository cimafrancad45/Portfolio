import React from "react";
import "./Navbar.css"

export default class Navbar extends React.Component {
    render () {
        return (
            <nav>
                <div className="nav-wrapper">
                    <ul className="brand-logo">Daryl Cimafranca</ul>
                    
                    <ul id="nav-mobile" className="links right hide-on-med-and-down">
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
} 
