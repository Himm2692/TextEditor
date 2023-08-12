import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
  BrowserRouter,
  Routes,
  Route
 
} from "react-router-dom"
import About from './components/About';
import Alert from './components/Alert';

function App() {
    const[mode, setMode] = useState("light")
  const[alert,setAlert] = useState(null)
  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  const toggleMode = () =>{
    if(mode === "light"){
      setMode("dark")
      showAlert("Dark mode is enabled","success");
      document.body.style.backgroundColor = "grey"
    }else{
      setMode("light")
      showAlert("light mode is enabled","success");
      document.body.style.backgroundColor = "white"
    }

  }

  return (
    <>
   <BrowserRouter basename='/TextEditor'>
   <Navbar title="TextEditor" mode = {mode} toggleMode = {toggleMode}/>
    <Alert alert ={alert}/>
   <div className='container my-3'>
   <Routes>
          <Route path="/about" element={<About title="About Us"/>}/>
            
          <Route exact path="/" element={<TextForm heading = " Try TextEditor- Word counter, Character counter"  mode = {mode} showAlert={showAlert}/>}/>
            
    </Routes>
   </div>
   </BrowserRouter>
  </>
  );
}

export default App;
