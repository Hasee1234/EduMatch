import React from 'react'
import { Navbar } from './Components/Navbar/Navbar'
import { BottomBar } from './Components/BottomBar\'/BottomBar'
import Routing from './Routing/Routing'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Routing/>
      <BottomBar/>
    </div>
  )
}
