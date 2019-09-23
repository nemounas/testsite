import React from 'react';
import n from './nav.module.css'

const Nav = () => {
    return (
        <div className={`${n.nav} ${n.item}`}>
            <div className={n.active}><a href="#">Profile</a></div>
            <div ><a href="#">Messages</a></div>
            <div ><a href="#">News</a></div>
            <div><a href="#">Music</a></div>
            <div><a href="#">Settings</a></div>
        </div>
    )
}

export default Nav;