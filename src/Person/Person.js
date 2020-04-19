// It is a functional component
import React from 'react';
import './Person.css'

const person = (props) => {
return (
    <div className = 'Person'>
        <p onClick = {props.click}>{props.firstName} loves {props.secondName}</p> 
        <p>{props.children}</p>
        <input type='text' value = {props.firstName} onChange = {props.changedEvent}/>
    </div>
    )
}

export default person;