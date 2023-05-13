import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {HomePage} from './pages/HomePage'
import {NotFound} from './pages/NotFound'
import { DashBoardPage } from './pages/DashBoardPage';
import { Login } from './pages/Login';
import { Register } from './pages/Register';



const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/dashboard' element={<DashBoardPage/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/*' element={<NotFound/>} />
    </Routes>
    
  )
}

export default App