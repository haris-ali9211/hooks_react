import React, { useContext, useState } from 'react';
import './Room.css';
import ValueContext from './ValueContext';
import Room2 from './Room2';

function Room() {
    const [islet, setlet] = useState(false);
    let [inc, setinc] = useState(20);

    // function change() {
    //     setlet(!islet);
    // }

    // function incchange(){
    //     setinc(++inc);
    // }

    const incchange = () =>{
        setinc(++inc);
    }
    let value = useContext(ValueContext);
    return (
        <div className={'room' + (islet ? "lit" : "dark")}>
            this room is : let = {islet ? "lit" : "dark"}
            <br />
            <button onClick={ () => {
                setlet(!islet);
                }}
                >button</button>
            <br/>
            my age is {inc}
            <button onClick={incchange}>button</button>
            <div>
                haris ali is {value[0]}
            </div>
            <button onClick={()=>{value[1](++value[0])}}>++</button>
            <button onClick={()=>{value[1](--value[0])}}>--</button>
            <Room2/>
        </div>
    );
}

export default Room;
