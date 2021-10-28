import React, {useState} from 'react';
import './App.css';
import Room from './Room';
import ValueContext from './ValueContext';

function App() {
  // const state = useState(true);
  // const islet = state[0];
  // const setlet = state[1];
  // console.log("first value =",islet);
  // console.log("secind value =", setlet);
  let value = useState(43);
  console.log(value);
  return (
    <ValueContext.Provider value={value}>
      <div>
        <Room/>
      </div>
    </ValueContext.Provider>
  );
}

export default App;
