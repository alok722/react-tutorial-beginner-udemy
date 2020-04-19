// It is a functional component
import React from 'react';
import './Person.css'

const person = (props) => {
return (
    <div className = 'Person'>
        <p onClick = {props.click}>Name: {props.name} Age: {props.age}</p> 
        <p>{props.children}</p>
        <input type='text' value = {props.name} onChange = {props.changedEvent}/>
    </div>
    )
}

export default person;