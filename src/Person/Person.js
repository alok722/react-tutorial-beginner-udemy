// It is a functional component
import React from 'react';

const person = (props) => {
return (
    <div>
        <p onClick = {props.click}>{props.firstName} loves {props.secondName}</p> 
        <p>{props.children}</p>
    </div>
    )
}

export default person;