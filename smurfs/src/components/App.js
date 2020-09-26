import React, { useEffect } from "react";
import "./App.css";
import { getSmurfs } from '../actions/SmurfAction'


const App = () => {

  useEffect(() => {
    getSmurfs();
  }, [])
  
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
  
}

export default App;
