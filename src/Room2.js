import React, { useReducer } from 'react';
import numberReducer from './numberReducer'

function Room1() {
    let [state, abc] = useReducer(numberReducer, 55);
    return (
        <div>
            child2 {state}
            <button onClick={() => { abc({ type: "increment" , value: 44}); }}>increment</button>
            <button onClick={() => { abc({ type: "decrement" , value: 54}); }}>decrement</button>
        </div>
    );
}

export default Room1;
