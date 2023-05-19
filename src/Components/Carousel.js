import React, { useState } from 'react';
import "../Styles/mainfile.css"


const emojis = [
  ["🐳", "spouting whale", "U+1F433"],
  ["🐋", "whale", "U+1F40B"],
  ["🐬", "dolphin", "U+1F42C"],
  ["🐟", "fish", "U+1F41F"],
  ["🐠", "tropical fish", "U+1F420"],
  ["🐡", "blowfish", "U+1F421"],
  ["🦈", "shark", "U+1F988"],
  ["🐙", "octopus", "U+1F419"],
  ["🐚", "spiral shell", "U+1F41A"]
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % emojis.length);
  };

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + emojis.length) % emojis.length);
  };

  return (
    <div className="wrapper">
      <div className="carousel">
        {emojis.map((emoji, index) => (
          <div
            key={index}
            className={`carousel__item ${index === currentIndex ? 'active' : ''}`}
          >
            <div className="carousel__item-head">{emoji[0]}</div>
            <div className="carousel__item-body">
              <p className="title">{emoji[1]}</p>
              <p>Unicode: {emoji[2]}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button onClick={handlePrevSlide} className="prev-button">
          Previous
        </button>
        <button onClick={handleNextSlide} className="next-button">
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
