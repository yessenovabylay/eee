import {Routes, Route, useLocation} from 'react-router-dom'
import {useSstate, useEffect } from 'react'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'


function App() {


  return (
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
    </Routes>
  );
}

export default App;
