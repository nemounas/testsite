import React from 'react'
import f from './frends.module.css'

const Box = (props) => {
    console.log(props.frend)
     return (
         <div>
             {props.frend}
         </div>
     )
}

const Frends = (props) => {
    
    let CurrentFriends = props.state.Frends
    .map(person => <Box frend={person.name} />)

    return (
       <div className={f.frendsWrapper}>
           <div className={f.frends}>Frends:</div>
           <div className={f.person}>{CurrentFriends}</div>
       </div>
    )
}

export default Frends;