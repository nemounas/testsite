import React from 'react';
import h from './header.module.css'

const Header = () => {
    return (
        <div className={h.header}>
            <img className="App-logo" alt="logo" src="http://dietkremlin.ru/img/logo0601.png"></img>
        </div>
    )
}

export default Header;