import {Route, Routes, Link, Navigate} from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjects } from './http/index';
import getProjects from './store/actionsCreators/projectsAction'

import './styles/App.css';


import Homepage from './pages/Homepage';
import Loginpage from './pages/Loginpage';


function App() {


  
  // const projects = useSelector(({projects}) => projects.projects)
  const user = useSelector( ({user}) => user)

  return (
    <Routes>
      <Route path='/' element={user.isLogin ? <Homepage/> : <Navigate to="/login"/>}/>
      <Route path='/login' element={<Loginpage />} />
    </Routes>
  );
}

export default App;
