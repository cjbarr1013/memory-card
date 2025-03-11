import '../styles/Scorecard.css';

function Scorecard({ current, high }) {
  return (
    <div className="scorecard">
      <div className="scores">
        <div className="current">
          <h2>Current</h2>
          <span>{current}</span>
        </div>
        <div className="high">
          <h2>High</h2>
          <span>{high}</span>
        </div>
      </div>
      <div className="how-to">
        <span>How to Play</span>
        <span className="how-to-text">
          Click a card to start. For every unique card you click, you recieve
          one point. Current points will reset when a repeat card is selected.
          Good luck!
        </span>
      </div>
    </div>
  );
}

export default Scorecard;
