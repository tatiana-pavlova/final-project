import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './Components/NaviBar';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Main from './Containers/Main';
import Footer from './Components/Footer';
import api from './Utils/Api';
import PokemonInfo from './Containers/PokemonInfo';
import Pagination from './Components/Pagination';
import { Container } from 'react-bootstrap';

function App() {

  let navigate = useNavigate();
  const [initialCards, setInitialCards] = React.useState([]);
  const [pokemonCards, setPokemonCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentPage] = React.useState(1);
  const [cardsPerPage, setcardsPerPage] = React.useState(24);
  
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = pokemonCards.slice(indexOfFirstCard, indexOfLastCard);

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
    initialCards.map((card) => {
      api.getPokemonInfo(card.url)
        .then((res) => {
          updatedPokemonList.push({name: res.name, id: res.id, picture: res.sprites.other['official-artwork'].front_default,
                                    abilities: res.abilities, types: res.types, weight: res.weight, catchStatus: {status:false, date: ''}});
          updatedPokemonList.sort((a, b) => a.id - b.id);
          navigate('/');
        })
        .catch((err) => {
          console.log(err);
        });
      return updatedPokemonList;
    })
    setPokemonCards(updatedPokemonList);
  } ,[initialCards]);


  const handleCardClick = (card) => {
    setSelectedCard(card);
    navigate(`/pokemon/${card.id}`);
  }

  const handleCatchClick = (card) => {
    setSelectedCard(card);
    const currentDate = new Date().toLocaleDateString();
    card.catchStatus.status = true;
    card.catchStatus.date = currentDate;
  }

  const handleLoadMore = () => {
    setcardsPerPage(cardsPerPage + 24);
  }

    
  return (
    <>
      <Container fluid style={{backgroundColor: '#DCDCDC', maxWigth: '100%', padding: '0'}}>
        <NaviBar />
        <Routes>
          <Route exact path="/" element={<Main cards={currentCards} onCardClick={handleCardClick} onCatchClick={handleCatchClick} 
                                              pagination={<Pagination onLoadMoreClick={handleLoadMore} />} />}  />
          <Route path="/pokemons" element={<Main cards={pokemonCards.filter((card) => card.catchStatus.status === true)} 
                                              onCardClick={handleCardClick} hideBtn={true} />}   />
          <Route path="/pokemon/:id" element={<PokemonInfo card={selectedCard}  />} />
        </Routes>
        <Footer />
      </Container>
    </>
  );
}

export default App;
