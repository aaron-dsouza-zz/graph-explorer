import React from 'react';
import './Components.css';

const Person = (props) => (
    <div className="info">
        <div className="firstname">{props.firstName}</div>
        <div className="lastname">{props.lastName}</div>
    </div>
);

export default Person;