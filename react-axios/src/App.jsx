import Navbar from './components/Navbar'

import './App.css'
import { Outlet } from 'react-router-dom'

export default function App() {

  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <Outlet />
      </div>
    </div>
  )
}
