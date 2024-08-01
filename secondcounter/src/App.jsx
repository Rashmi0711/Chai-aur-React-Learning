import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setCounter] =useState (15)

  // let [counter , anythingnameCounter] =useState (15)

  const addValue = () => {
    // console.log ("clicked", counter);
    // counter = counter+1
    // setCounter(counter)

    setCounter(counter+1)
  }
  const removeValue = () =>{
    setCounter(counter - 1)
  }

  return (
    <>
      <h1> Learning hookes in React</h1>
      <h2>Counter Value : {counter} </h2>

      <button onClick ={addValue}
      >Add value :{counter}  </button>
      <br/>
      <button
      onClick={removeValue}>Remove value : {counter} </button>
      
    </>
  )
}

export default App
