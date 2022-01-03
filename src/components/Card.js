import { useState, useEffect } from "react";

// interface Props {
//   title: string;
//   text: string[];
//   type: "primary" | "secondary" | "tertiary";
// }
// { title, text, type }: Props

const Card = ({flipped, brightness}) => {

  const brightnessClass = "brightness-[" + brightness / 10 + "]"

  const toggleflipped = () => {
    flipped = !flipped
  }

  useEffect(() => {
    console.log(brightnessClass)
  }, [brightnessClass])
  
  useEffect(() => {
    console.log(flipped)
  }, [flipped])
  return (
    <button
      className={`${
        flipped && "animate-hideCard"
      } bg-blue-500 p-4 text-white rounded hover:shadow-xl`}
      onAnimationEnd={() => console.log('hello')}
    >
      {flipped ? (
        <img src="test-card.png" className={brightnessClass} width={100} />
      ) : (
        <img src="back.svg" width={100} />
      )}
    </button>
  );
};

export default Card;
