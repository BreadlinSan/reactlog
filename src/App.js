import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './Components/Login/Login';
import { Register  } from './Components/Register/Register';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer';
import DarkModeToggle from './Components/Darkmode/DarkModeToggle';
function App() {
  const [currentForm , setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div><Navbar/>
    <div className="App">
      
     { currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
     }
    </div>
    <DarkModeToggle/>
    <Footer/></div>
  );
}

export default App;
