import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import "./Global.css";
import Home from "./componentes/Home";
import Main from "./componentes/Main";
import Cookies from "./componentes/Cookies";
import Licencia from "./componentes/Licencia";
import Nodebes from "./componentes/Nodebes";
import Responsabilidad from "./componentes/Responsabilidad";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
			    <Route exact path="/" element={<Main/>}/> 
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/cookies" element={<Cookies/>}/>
          <Route exact path="/licencia" element={<Licencia/>}/>
          <Route exact path="/nodebes" element={<Nodebes/>}/>
          <Route exact path="/responsabilidad" element={<Responsabilidad/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
