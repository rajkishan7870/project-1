
import './App.css';
import HomePage from './pages/HomePage';
import {Routes, Route} from 'react-router-dom'
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PricingSection from './pages/PricingSection';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/' element = {<HomePage/>} />
        <Route path ='/about' element ={<AboutPage/>} />
        <Route path = '/login' element ={<LoginPage/>} />
        <Route path = '/register' element ={<RegisterPage/>} />
        <Route path = '/pricing' element ={<PricingSection/>} />
      </Routes>
    </div>
  );
}

export default App;
