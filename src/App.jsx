import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tooltip from './tooltip/Tooltip'

function App() {

  return (
    <>
      <Tooltip position={'top'} tip={"test your might"}>
        <h1>Nelson Chang</h1>
      </Tooltip>
    </>
  )
}

export default App
