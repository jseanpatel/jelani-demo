import { useState, useEffect } from "react";
var classNames = require('classnames');


// interface Props {
//   title: string;
//   text: string[];
//   type: "primary" | "secondary" | "tertiary";
// }
// { title, text, type }: Props

const Card = ({ flipped, lighting, distance, cardAsset, flipping }) => {
  const [selected, setSelected] = useState(false);

  return (
    <button
      className={classNames(
        "bg-blue-500 p-4 text-white rounded hover:shadow-xl hover:brightness-50",
        {
          "animate-wiggle": flipping, // if success={true}, 'success' is added
          "animate-wiggleBack": !flipping,
          "lighting-50": selected,
          "lighting-100": !selected
        }
      )}
      onAnimationEnd={() => console.log("hello")}
      onClick={() => setSelected(!selected)}
    >
      {flipped ? (
        <img src={cardAsset} width={distance} />
      ) : (
        <img src="back-card.svg" width={distance} />
      )}
    </button>
  );
};

export default Card;
