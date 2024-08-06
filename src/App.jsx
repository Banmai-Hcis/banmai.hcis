import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=' p-5'>
      <h3 className="text underline">
        Hello Word!
      </h3>
    </div>
    </>
  )
}

export default App
