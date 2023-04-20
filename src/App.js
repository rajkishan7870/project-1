
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import {Routes, Route} from 'react-router-dom'
import Training from './pages/TrainingPage/Training';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route path = '/' element = {<HomePage/>} />
        <Route path ='/training' element ={<Training/>} />
        <Route path = '/login' element ={<LoginPage/>} />
        <Route path = '/register' element ={<RegisterPage/>} />
      </Routes>
    </div>
  );
}

export default App;
