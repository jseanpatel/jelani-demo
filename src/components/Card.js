import { useState, useEffect } from "react";

// interface Props {
//   title: string;
//   text: string[];
//   type: "primary" | "secondary" | "tertiary";
// }
// { title, text, type }: Props

const Card = ({flipped, brightness, distance}) => {
  
  return (
    <button
      className={`${
        flipped ? "animate-wiggle" : "animate-wiggleBack"
      } bg-blue-500 p-4 text-white rounded hover:shadow-xl`}
      onAnimationEnd={() => console.log('hello')}
    >
      {flipped ? (
        <img src="test-card.png" width={distance} />
      ) : (
        <img src="back.svg" width={distance} />
      )}
    </button>
  );
};

export default Card;
