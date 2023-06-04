import React from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import {Routes, Route} from 'react-router-dom'
import Training from './pages/TrainingPage/Training';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import Navbar from './components/Navbar/Navbar';
import AboutPage from './pages/AboutPage/AboutPage';
import PricingSection from './pages/PricingSection/PricingSection';
import PricingAfter from './pages/PricingSection/PricingAfter';


function App() {



  return (
    <div className="App">
      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route path = '/' element = {<HomePage/>} />
        <Route path ='/training' element ={<Training/>} />
        <Route path ='/about' element ={<AboutPage/>}/>
        <Route path = '/login' element ={<LoginPage/>} />
        <Route path = '/register' element ={<RegisterPage/>} />
        <Route path = '/pricing' element ={<PricingSection/>} />
        <Route path = '/pricingafter' element ={<PricingAfter/>}/>
      </Routes>
    </div>
  );
}

export default App;
