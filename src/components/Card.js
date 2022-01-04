import { useState, useEffect } from "react";
var classNames = require('classnames');


// interface Props {
//   title: string;
//   text: string[];
//   type: "primary" | "secondary" | "tertiary";
// }
// { title, text, type }: Props

const Card = ({ flipped, brightness, distance, cardAsset }) => {
  const [selected, setSelected] = useState(false);

  return (
    <button
      className={classNames(
        "bg-blue-500 p-4 text-white rounded hover:shadow-xl hover:brightness-50",
        {
          "animate-wiggle": flipped, // if success={true}, 'success' is added
          "animate-wiggleBack": !flipped,
          "brightness-50": selected,
          "brightness-100": !selected
        }
      )}
      onAnimationEnd={() => console.log("hello")}
      onClick={() => setSelected(!selected)}
    >
      {flipped ? (
        <img src={cardAsset} width={distance} />
      ) : (
        <img src="back.svg" width={distance} />
      )}
    </button>
  );
};

export default Card;
