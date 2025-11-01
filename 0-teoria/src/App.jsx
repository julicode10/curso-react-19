import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [message, setMessage] = useState('hola mundo desde react')

  return (
    <div>
      <h1>{message}</h1>
    </div>
  )
}

export default App
