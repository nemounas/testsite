import React from 'react';
import d from './dialog.module.css'
import DialogText from './dialogtext/dialogtext'
import Person from './person/person'

const Dialog = (props) => {

    let DialogData = [
        { id: "1", name: "Sergey" },
        { id: "2", name: "Sveta" },
        { id: "3", name: "Kosty" },
        { id: "4", name: "Masha" },
        { id: "5", name: "Sasha" },
        { id: "6", name: "Irina" },
    ]

    let TextData = [
        { id: "1", text: "Hello" },
        { id: "2", text: "How are you?" },
        { id: "3", text: "Not bad" },
        { id: "4", text: "Wery good" },
        { id: "5", text: "Nice to meet you" },
    ]

    let DialogPerson = DialogData
        .map(person => <Person id={person.id} name={person.name} />)

    let DialogTexts = TextData
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