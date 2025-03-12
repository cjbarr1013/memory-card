import { useState } from 'react';
import CardCircle from './CardCircle.jsx';
import Scorecard from './Scorecard.jsx';

import '../styles/Body.css';

function Body() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function handleCardClick(e) {}

  return (
    <main>
      <div className="content-container">
        <CardCircle handleClick={handleCardClick} />
        <Scorecard current={currentScore} high={highScore} />
      </div>
    </main>
  );
}

export default Body;
