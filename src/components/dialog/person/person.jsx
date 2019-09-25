import React from 'react'
import { NavLink } from 'react-router-dom'
import d from './person.module.css'

const Person = (props) => {
    let link = `/dialog/${props.id}`;
    return (
        <div className={d.person}><NavLink to={link}> {props.name} </NavLink></div>
    )
}

export default Person;