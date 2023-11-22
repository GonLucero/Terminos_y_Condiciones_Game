import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import "./Global.css";
import Home from "./componentes/Home";
import Main from "./componentes/Main";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
			    <Route exact path="/" element={<Main/>}/> 
          <Route exact path="/home" element={<Home/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
