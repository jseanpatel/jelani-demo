import { useState, useEffect } from "react";
var classNames = require("classnames");

// interface Props {
//   title: string;
//   text: string[];
//   type: "primary" | "secondary" | "tertiary";
// }
// { title, text, type }: Props

const Card = ({ flipped, lighting, distance, cardAsset, flipping}) => {
  const [selected, setSelected] = useState(false);


  return (
    <button
      className={classNames(
        "p-4 text-white rounded hover:shadow-xl",
        {
          "animate-wiggle": flipping, // if flipping={true}, 'animate-wiggle' is added
          "animate-wiggleBack": !flipping,
          "": selected,
          "": !selected,
        }
      )}
      onClick={() => setSelected(!selected)}
    >
      {flipped ? (
        // set the max distance to be 100 so cards don't gettoo large
        <img src={cardAsset} width={Math.min(distance, 100)} />
      ) : (
        <img src="back-card.svg" width={Math.min(distance, 100)} />
      )}
    </button>
  );
};

export default Card;
