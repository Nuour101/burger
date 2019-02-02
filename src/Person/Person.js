import React from 'react';
import './Person.css'
const person = (props) => {
    return (
        <div className="Person" >
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old!</p>
            <p> {props.children} </p>
            <input type="text" onChange={props.changed} value={props.name}/> {/*onChange triggered whenever the value in this input changes*/}
            {/* 1.we listened to changes via onChange
                2.called changed method which referes to nameChangedHandler which updates the state
                3.we passed down the state to the person
                4.we always output the current name as a value of the input via value={props.name} */}
        </div>
    )
}

export default person;
