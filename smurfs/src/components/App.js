import React, { useEffect } from "react";
import "./App.css";
import { getSmurfs, updateSmurf } from '../actions/SmurfAction';
import { connect } from 'react-redux';


const App = (props) => {

  useEffect(() => {
    props.getSmurfs();
  }, [])

  const handleChange = e => {
    props.updateSmurf(e)
  }
  
 
    return (
      <div>
        <form>
          <label htmlFor='name'>
            Name: 
            <input name='name' id='name' type='text' value={props.name} onChange={handleChange}/>
          </label>
          <label htmlFor='age'>
            Age: 
            <input name='age' id='age' type='text' value={props.age} onChange={handleChange} />
          </label>
          <label htmlFor='height'>
            Height:
            <input name='height' id='height' type='text' value={props.height} onChange={handleChange} />
          </label>
          <button type='submit'>Add Smurf</button>
        </form>
      {props.smurfs.map(smurf => {
        return (
          smurf.map(item => { 
            return (
          <div className="App">
            <h1 key={item.name}>{item.name}</h1>
            <div key={item.age}>{item.age}</div>
            <div key={item.height}>{item.height}</div>
            <div key={item.id}>{item.id}</div>
          </div>
            )
          })
        )
      })}
      </div>
    );
  
}

const mapStateToProps = (state) => {
  return{
  smurfs: state.smurfs,
  name: state.newSmurf.name,
  age: state.newSmurf.age,
  height: state.newSmurf.height,
  newSmurf: state.newSmurf
  }
}

export default connect(mapStateToProps, {getSmurfs, updateSmurf})(App);
