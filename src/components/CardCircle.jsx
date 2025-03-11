import Card from './Card.jsx';
import golf from '../assets/images/SaEAVSK.jpg';
import '../styles/CardCircle.css';
import { useState, useEffect } from 'react';

function CardCircle({ handleClick }) {
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
  }, []);

  return (
    <div className="card-circle">
      <Card image={golf} description="Example Text" handleClick={handleClick} />
      <Card image={golf} description="Example Text" />
      <Card image={golf} description="Example Text" />
      <Card image={golf} description="Example Text" />
      <Card image={golf} description="Example Text" />
      <Card image={golf} description="Example Text" />
      <Card image={golf} description="Example Text" />
      <Card image={golf} description="Example Text" />
      <Card image={golf} description="Example Text" />
      <Card image={golf} description="Example Text" />
      <Card image={golf} description="Example Text" />
      <Card image={golf} description="Example Text" />
    </div>
  );
}

export default CardCircle;
