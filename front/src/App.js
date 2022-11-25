import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Connexion from './pages/Connexion';
import Home from "./pages/Home";
import Identifiant from './pages/Identifiant';
import Inscription from './pages/Inscription';
import Modification from './pages/Modification';
import Traitement from './pages/Traitement';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/connexion" element={<Connexion/>}/>
        <Route path="/inscription" element={<Inscription/>}/>
        <Route path="/id" element={<Identifiant/>}/>
        <Route path="/modifier" element={<Modification/>}/>
        <Route path="/traitement" element={<Traitement/>}/>
        <Route path="*" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;