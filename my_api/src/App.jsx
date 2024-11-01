import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Usertable from './components/Usertable'
import Task from './components/Task'
import { Route, Routes } from 'react-router-dom'
import Listmap from './components/Listmap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/> 
      {/* <Usertable/> */}
      {/* <Task/> */}
      <Listmap/>
    </>
  )
}

export default App
