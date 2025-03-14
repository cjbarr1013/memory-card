import Card from './Card.jsx';
import { GiphyAPI } from '../modules/GiphyAPI.js';
import '../styles/CardCircle.css';
import { useState, useEffect, useRef } from 'react';

async function getGiphyData() {
  const api = GiphyAPI();
  return await api.getData();
}

function CardCircle({ handleScores }) {
  const allCards = useRef(null);
  const clickedIds = useRef([]);
  const [activeCards, setActiveCards] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchedCards = await getGiphyData();
      allCards.current = fetchedCards;
      getNewActiveCards();
    })();

    return () => {
      allCards.current = null;
    };
  }, []);

  function handleCardClick(id) {
    if (!clickedIds.current.includes(id)) {
      clickedIds.current.push(id);
    } else {
      clickedIds.current = [];
    }

    handleScores(clickedIds.current.length);
    getNewActiveCards();
  }

  function getNewActiveCards() {
    let newCards = [];
    // let ready = false;
    while (newCards.length < 12) {
      const random = Math.floor(Math.random() * allCards.current.length);
      if (newCards.length > 0) {
        if (!newCards.some((e) => e['id'] === allCards.current[random]['id'])) {
          newCards.push(allCards.current[random]);
        }
      } else {
        newCards.push(allCards.current[random]);
      }
      // Check if newCards has at least one card that has not been clicked
    }
    setActiveCards(newCards);
  }

  return (
    <div className="card-circle">
      {activeCards.map((card, index) => {
        return (
          <Card
            key={card.id}
            image={card.url}
            description={card.desc}
            handleClick={() => handleCardClick(card.id)}
            index={index}
          />
        );
      })}
    </div>
  );
}

export default CardCircle;
