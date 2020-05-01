import React from 'react';
import './Character.scss';

const Character = (props) => (
    <div className="card">
        <img src="person.png" alt="Avatar" style={{width: 200}}></img>
        <div className="container">
            <h4><b>{props.name}</b></h4>
            <p>{props.bio}</p>
        </div>
    </div>
    // <div className="info">
    //     <div className="name">{props.name}</div>
    //     <div className="bio">{props.bio}</div>
    // </div>
);

export default Character;