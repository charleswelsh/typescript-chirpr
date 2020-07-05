import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC<NavBarProps> = () => {
    
    return(
        <nav className = "nav p-2 shadow justify-content-between align-items-center">
            <img className= "brand-logo" src="https://static.thenounproject.com/png/3298-200.png" alt="chirpr logo"/>
            <NavLink className= "text-dark mx-1" activeClassName="border-bottom border-dark mx-1" exact to ="/">Timeline</NavLink>
            <NavLink className= "text-dark mx-1" activeClassName="border-bottom border-dark mx-1" exact to ="/compose">Compose</NavLink>
        </nav>
    )
} 

interface NavBarProps {};

export default Navbar;