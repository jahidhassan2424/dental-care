

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home/Home';
import About from './components/About/About';
import Login from './components/Login/Login';
import Footer from './components/Shared/Footer/Footer';
import Register from './components/Register/Register';
import Services from './components/Services/Services';
import Appoinment from './components/Appoinment/Appoinment';
import RequiredAuth from './components/RequiredAuth/RequiredAuth';
import Blogs from './components/Blogs/Blogs';
import NotFound from './components/Shared/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/appoinment' element={
          <RequiredAuth>
            <Appoinment></Appoinment>
          </RequiredAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes >

      <Footer></Footer>


    </div >
  )
}

export default App;
