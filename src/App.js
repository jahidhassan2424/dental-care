

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home/Home';
import About from './components/About/About';
import Login from './components/Login/Login';

import Footer from './components/Shared/Footer/Footer';
import Service from './components/Service/Service';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/service' element={<Service></Service>}></Route>
      </Routes>
      <Footer></Footer>


    </div>
  )
}

export default App;
