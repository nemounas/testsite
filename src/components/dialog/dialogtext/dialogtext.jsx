import React from 'react'
import d from './dialogtext.module.css'

const DialogText = (props) => {
    return (
        <div className={d.text}>{props.text}</div>
    )
}

export default DialogText;