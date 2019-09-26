import React from 'react';
import n from './nav.module.css'
import { NavLink } from 'react-router-dom';


const Nav = () => {
    return (
         <div className={n.nav}>
        <div className={n.item}>
            <div ><NavLink activeClassName={n.activeLink} to="/Profile" >Profile</NavLink></div>
            <div ><NavLink activeClassName={n.activeLink} to="/dialog">Messages</NavLink></div>
            <div ><NavLink activeClassName={n.activeLink} to="/news">News</NavLink></div>
            <div><NavLink activeClassName={n.activeLink} to="/music">Music</NavLink></div>
            <div><NavLink activeClassName={n.activeLink} to="/settings">Settings</NavLink></div>
        </div>
        
        </div> 
    )
}

export default Nav;