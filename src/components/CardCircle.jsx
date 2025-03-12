import Card from './Card.jsx';
import { GiphyAPI } from '../modules/giphyAPI.js';
import '../styles/CardCircle.css';
import { useState, useEffect, useRef } from 'react';

async function getGiphyData() {
  const api = GiphyAPI();
  return await api.getData();
}

function CardCircle({ handleClick }) {
  const allCards = useRef(null);
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

  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    const radius = document.querySelector('.card-circle').offsetWidth / 2;

    cards.forEach((card, index) => {
      const angle = (index / 12) * (2 * Math.PI);
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      card.style.transform = `translate(${x}px, ${y}px)`;
    });

    return () => {
      cards.forEach((card) => {
        card.style.transform = `translate(0px, 0px)`;
      });
    };
  }, [activeCards]);

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
      {activeCards.map((card) => {
        return (
          <Card
            key={card.id}
            image={card.url}
            description={card.desc}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
}

export default CardCircle;
