import React from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Entete from "../Entete/Entete";
import Accueil from "../Accueil/Accueil";
import FilmGhibli from "../FilmGhibli/FilmGhibli";
import "./App.css";




function App() {


    

    return (

        <Router>
            <Entete />
            <Routes>

                <Route path="/" element={<Accueil />} />
                <Route path="/*" element={<Accueil />} />
                <Route path="/film/:id" element={<FilmGhibli />} />
                
            </Routes>
        </Router>

      );

}



export default App;