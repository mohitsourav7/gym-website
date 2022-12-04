// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route}from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Programs from './components/Programs';
import Contact from './components/Contact';
import Error from './components/Error';
import Nav from './components/Nav';
// import Header from './components/Header';


function App() {
  return (
   <BrowserRouter>
   <Nav/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/programs' element={<Programs/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='*' element={<Error/>}/>
   </Routes>
   </BrowserRouter>
   
  );
}

export default App;
