import { useState } from 'react';
import CardCircle from './CardCircle.jsx';
import Scorecard from './Scorecard.jsx';

import '../styles/Body.css';

function Body() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function handCardClick(e) {}

  return (
    <main>
      <div className="content-container">
        <CardCircle handleClick={handCardClick} />
        <Scorecard current={5} high={7} />
      </div>
    </main>
  );
}

export default Body;
