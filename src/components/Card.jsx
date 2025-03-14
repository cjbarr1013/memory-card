import '../styles/Card.css';

function Card({ image, description, handleClick, index }) {
  function getCardStyle(index) {
    const radius =
      document.querySelector('.card-circle').offsetWidth / 2 - 57.5;
    const angle = (index / 12) * (2 * Math.PI);
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    return `translate(${x}px, ${y}px)`;
  }

  return (
    <div
      className="card"
      onClick={handleClick}
      style={{ animation: `move-out-${index} 0.5s ease-out forwards` }}
    >
      <img src={image} alt={description}></img>
      <style jsx="true">{`
        @keyframes move-out-${index} {
          from {
            transform: translate(0px, 0px);
          }
          to {
            transform: ${getCardStyle(index)};
          }
        }
      `}</style>
    </div>
  );
}

export default Card;
