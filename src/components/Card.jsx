import '../styles/Card.css';

function Card({ image, description, handleClick }) {
  return (
    <div className="card" onClick={handleClick}>
      <img src={image} alt={description}></img>
    </div>
  );
}

export default Card;
