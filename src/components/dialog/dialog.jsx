import React from 'react';
import d from './dialog.module.css'
import DialogText from './dialogtext/dialogtext'
import Person from './person/person'

const Dialog = (props) => {

 
  

    let DialogPerson = props.state.DialogData
        .map(person => <Person id={person.id} name={person.name} />)

    let DialogTexts = props.state.TextData
        .map(message => <DialogText text={message.text} />)


    return (
        <div className={d.dialog}>
            <div className={d.dialog_person}>
                {DialogPerson}
            </div>
            <div className={d.dialog_text}>
                {DialogTexts}
            </div>
        </div>
    )
}

export default Dialog;