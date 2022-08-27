// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './Alert';

// import About from './components/About';




function App() {

  const [mode, setmode] = useState('light');

  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {


    setalert({

      msg: message,
      type: type

    })

    setTimeout(() => {

      setalert(null);
    }, 1500);

  }

  const toggleMode = () => {

    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#343a40';

      showAlert("Dark mode has been Enabled");

      document.title = "Text Analyzer - Dark Mode";
    }

    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been Enabled");

      document.title = "Text Analyzer - Light Mode";
    }
  }

  return (
    <>

      {/* navbar */}
     
      <Navbar title ="Text Analyzer" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
     
        
        <TextForm showAlert={showAlert} heading="Enter your text here" mode={mode}/>

       {/* <About/> */}
    
      </div>


    </>

  )
}

export default App;
