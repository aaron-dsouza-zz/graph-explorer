import React from 'react';
import './Components.css';

const Character = (props) => (
    <div className="info">
        <div className="name">{props.name}</div>
        <div className="bio">{props.bio}</div>
    </div>
);

export default Character;