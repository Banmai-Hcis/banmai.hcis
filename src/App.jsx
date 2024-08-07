import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import ScreenList from './components/ScreenList'
import ScreenForm from './components/ScreenForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* < ScreenForm /> */}
      {/* <div className='flex flex-col gap-2 p-5'> */}
      {/* <BrowserRouter basename={"/banmai.hcis"}> */}
        <Routes>
          <Route index element={<ScreenList />} />
          <Route path="/form" element={<ScreenForm />} />
        </Routes>
      {/* </BrowserRouter> */}
      {/* </div> */}
    </>
  )
}

export default App
