import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [counter,setCounter] = useState (0)
 const addValue = () => {
  console.log('clicked',counter);
  setCounter(counter + 1)
  // counter =counter+1;
 }
 const removeValue = () => {
  console.log('clicked',counter);
  setCounter(counter - 1)
  // counter =counter-1;
 }
// let counter =10
  return (
    <>
      <h2>counter value'{counter}'</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
