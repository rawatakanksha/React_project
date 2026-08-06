import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'

function App(props) {
 
  return (
    <>
     <div >
      <Header/>
      <Body/>
    
     </div>
    </>
  )
}

export default App
