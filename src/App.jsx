import { useState } from 'react'
import './App.css'
import Playgame from './Components/Playgame'
import Startgame from './Components/Startgame'

function App() {
  const [value, setValue] = useState(true);

  function handleChange() {
    setValue(!value);
  }

  return (
    <>
      {value ? <Playgame /> : <Startgame toggle={handleChange} />}
    </>
  )
}

export default App
