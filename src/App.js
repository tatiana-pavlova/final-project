import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './Components/NaviBar';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Main from './Containers/Main';
import CaughtPokemons from './Containers/CaughtPokemons';
import Footer from './Components/Footer';
import api from './Utils/Api';
import PokemonInfo from './Containers/PokemonInfo';

function App() {

  const [initialCards, setInitialCards] = React.useState([]);
  const [pokemonCards, setPokemonCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState({});
  let navigate = useNavigate();
  
  React.useEffect(() => {
    api.getPokemonCards()
      .then((res) => {
        setInitialCards(res.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    let updatedPokemonList = [];
    initialCards.map((card, index) => {
      const id = index + 1;
      api.getPokemonInfo(id)
        .then((res) => {
          updatedPokemonList.push({name: res.name, id: res.id, picture: res.sprites.other['official-artwork'].front_default,
                                    abilities: res.abilities, types: res.types, weight: res.weight, status: false});
          setPokemonCards(updatedPokemonList);
          navigate('/');
        })
        .catch((err) => {
          console.log(err);
        });
      return updatedPokemonList;
    })
  },[initialCards]);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    navigate(`/pokemon/${card.id}`);
  }
  
  
  return (
    <>
      <NaviBar />
      <Routes>
        <Route exact path="/" element={<Main cards={pokemonCards} onCardClick={handleCardClick} />}  />
        <Route path="/pokemons" element={<CaughtPokemons />}   />
        <Route path="/pokemon/:id" element={<PokemonInfo card={selectedCard}  />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
