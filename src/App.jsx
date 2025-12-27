import React from 'react'
import Sidebar from './components/Sidebar'
import Main from './components/Main'

const App = () => {
  return (
    <div className='p-2 min-h-screen flex gap-4 bg-[#181529]'>
      <Sidebar />
      <Main />
    </div>
  )
}

export default App
