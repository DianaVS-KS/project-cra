import React from 'react';
import './styles.css';

function User (props){
    return (
    <div className="container">        
        <div className="image">{props.avatar}</div>
        <div className="user">
            <p className="name">Hello, <span>{props.name}</span></p>
            <p className="desc">{props.description}</p>
            <p className="age"><span>{props.age}</span> years</p>
        </div>
    </div>
    );
}

export default User;