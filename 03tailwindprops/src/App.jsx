import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import card1 from './Component/card1.jsx'
import Card from './Component/Card'
import Card1 from './Component/Card1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black mb-4'>vivek</h1>
    <Card />
    <Card1  btnText="viv"/>
    </>
  )
}

export default App
