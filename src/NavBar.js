import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
    return (
        <header>
            <h1 className="title">BookLiker</h1>
            <nav className="navigation">
                <NavLink className="button" exact to="/">All Books</NavLink>
                <NavLink className="button" exact to="/new">New Book</NavLink>
                <NavLink className="button" exact to="/info">Info</NavLink>
            </nav>
        </header>
    );
}
 
export default NavBar;