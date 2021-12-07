import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './Components/NaviBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Containers/Main';
import CaughtPokemons from './Containers/CaughtPokemons';
import Footer from './Components/Footer';

function App() {

  // const [pokemonCards, setPokemonCards] = React.useState([]);
  
  

  return (
    <>
      <Router>
        <NaviBar />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/pokemons" element={<CaughtPokemons />}   />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
