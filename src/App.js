import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      showAlert("Dark mode enabled.", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode enabled.", "success")
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
      {/* <Routes> */}
          {/* <Route exact path="/about" element={<About/>}/> */}
          {/* <Route path="/" element={<TextForm heading="Enter text:" mode={mode}/>}/> */}
        {/* </Routes> */}
        <TextForm heading="Enter text:" mode={mode}/>
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
