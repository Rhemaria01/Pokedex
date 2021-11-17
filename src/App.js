import React from 'react';  
import { BrowserRouter as Router, Routes ,Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import PokeType from './pages/PokeType';
import Types from './components/Types';
import Header from './header/Header';
import './App.css';
import PokeInfo from './components/PokeInfo';
import Pokedex from './pages/Pokedex';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
function App() {
  return (
    <Router> 
      <div className="background">
      <Header/>
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<PokeType />} />
        <Route exact path="/types" element={<Types />} />
        <Route exact path="/pokeinfo" element={<PokeInfo />} />
        <Route path="*" element={<div>Not Found</div>} />
        <Route path="/pokedex" element={<Pokedex />} />
      </Routes>
      </div>
    </Router>
  );
}
export default App;