import React from 'react';
import d from './dialog.module.css'
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
    return (
        <div className={d.dialog}>
            <div className={d.dialog_person}>
                <div className={d.person}><NavLink to="/dialog/1"> Sergey </NavLink></div>
                <div className={d.person}><NavLink to="/dialog/2"> Sveta </NavLink></div>
                <div className={d.person}><NavLink to="/dialog/3"> Kosty </NavLink></div>
                <div className={d.person}><NavLink to="/dialog/4"> Masha </NavLink></div>
                <div className={d.person}><NavLink to="/dialog/5"> Sasha </NavLink></div>
            </div>
            <div className={d.dialog_text}>
                <div className={d.text}>Hello</div>
                <div className={d.text}>How are you?</div>
                <div className={d.text}>Not bad</div>
                <div className={d.text}>Wery good</div>
                <div className={d.text}>Nice to meet you</div>
            </div>
        </div>
    )
}

export default Dialog;