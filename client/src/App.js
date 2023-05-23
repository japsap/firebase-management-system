import React from 'react'

import { Route, Routes } from 'react-router-dom';

//hooks
import useAuth from './Hooks/useAuth';

// routes
import CreateAccount from './Routes/CreateAccountPage';
import MainPage from './Routes/MainPage';

const App = () => {

  const [ user ] = useAuth();

  return (
      <div className='app-container'>
        <Routes>
         { user ? <Route path='/' element={<MainPage/>}/> : <Route path='/' element={<CreateAccount/>}/>} 
        </Routes>
      </div>
    )
}

export default App