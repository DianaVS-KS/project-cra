import React from 'react';
import './styles.css';

let Hobby = (props) => {
    if(!props.showHobbies){
        return <h1>Hobbies not allowed!</h1>
    }

    function count(){
        const active = props.hobbies.filter(hobby => hobby.isActive === true);
        return active.length;
    }
    
    return (
    <div>
        <h1>Hobbies:</h1>
        <div className="hobbies-container">
            {
                props.hobbies.map(hobby => (
                    <div className="hobbies">
                    <h2>{hobby.name}</h2>
                    <h4>Description:</h4>
                    <p>{hobby.description}</p>
                    <h4>Active:</h4>
                    <p>{hobby.isActive ? 'Yes :)' : 'No :('} </p>
                    </div>
                )
                )
            }
        </div>
        <h1><span>{count()}</span> active hobbies!</h1>
    </div>
    );
}

export default Hobby;