import React from 'react';
import n from './nav.module.css'

const Nav = () => {
    return (
        <div className={`${n.nav} ${n.item}`}>
            <div className={n.active}><a href="/Profile">Profile</a></div>
            <div ><a href="/dialog">Messages</a></div>
            <div ><a href="/news">News</a></div>
            <div><a href="/music">Music</a></div>
            <div><a href="/settings">Settings</a></div>
        </div>
    )
}

export default Nav;