import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {HomePage} from './pages/HomePage'
import {NotFound} from './pages/NotFound'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/*' element={<NotFound/>} />
    </Routes>
    
  )
}

export default App