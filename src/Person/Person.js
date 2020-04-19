import React from 'react';

const person = (props) => {
return (
    <div>
        <p>{props.firstName} loves {props.secondName}</p> 
        <p>{props.children}</p>
    </div>
    )
}

export default person;