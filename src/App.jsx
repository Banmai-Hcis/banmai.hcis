import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import ScreenList from './components/ScreenList'
import ScreenForm from './components/ScreenForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<ScreenList />} />
            <Route path="/form" element={<ScreenForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
