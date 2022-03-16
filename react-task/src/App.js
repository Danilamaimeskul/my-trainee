import {Route, Routes, Link} from 'react-router-dom'

import './styles/App.css';

import Homepage from './pages/Homepage';
import Loginpage from './pages/Loginpage';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/login' element={<Loginpage />} />
    </Routes>
  );
}

export default App;
