import Head from "next/head";
import { useState, useEffect } from "react";

import Card from "../src/components/Card";

export default function Home() {
  const [flipped, setFlipped] = useState(false);
  const [flipping, setFlipping] = useState(false);
  const [lighting, setlighting] = useState(100);
  const [distance, setDistance] = useState(100);
  const [time, setTime] = useState(4);
  const [hideControls, setHideControls] = useState(false);

  const test = "bg-red-" + lighting

  const cardAssets: string[] = [
    "blue-triangle.svg",
    "green-circle.svg",
    "red-triangle.svg",
    "orange-triangle.svg",
    "green-square.svg",
    "blue-square.svg",
    "orange-circle.svg",
    "orange-star.svg",
    "blue-star.svg",
    "red-star.svg",
    "blue-circle.svg",
    "red-square.svg",
    "orange-square.svg",
    "green-star.svg",
    "green-triangle.svg",
  ];

  const cards = cardAssets.map((asset) => (
    <Card
      flipped={flipped}
      flipping={flipping}
      lighting={lighting}
      distance={distance}
      cardAsset={asset}
    />
  ));

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // while there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // and swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const handleLightingChange = (e) => {
    console.log("setting level", e.target.value);
    setlighting(e.target.value);
  };

  const handleTimeChange = (e) => {
    console.log("setting level", e.target.value);
    setTime(e.target.value);
  };

  const handleDistanceChange = (e) => {
    setDistance(e.target.value);
  };

  // start the flipping animation
  useEffect(() => {
    document.addEventListener("keyup", (e) => {
      if (e.key === "]") {
        setHideControls(!hideControls);
      } else if (e.key === "l" && !flipping) {
        setFlipping(!flipping);
      }
    });
  }, [flipping]);

  // switch the card asset halfway through then finish flipping animation
  useEffect(() => {
    if (flipping) {
      const milliseconds = 200;

      let timer = setTimeout(() => {
        setFlipping(!flipping);
        setFlipped(!flipped);
      }, milliseconds);

      return () => clearTimeout(timer);
    }
  }, [flipping]);

  // when card is flipped start timer to flip back
  useEffect(() => {
    if (flipped) {
      const timeToWait = time * 1000;
      let timer = setTimeout(() => {
        setFlipping(!flipping);
        setFlipped(!flipped);
      }, timeToWait);

      return () => clearTimeout(timer);
    }
  }, [flipped]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Dr. Mel Jelani - Overturned Convictions</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative flex flex-col items-center self-center justify-center flex-1 w-full px-20 text-center ">
        <div className="w-0 h-0 bg-transparent animate-wiggle brightness-[0.1]"></div>
        <div className="w-0 h-0 bg-transparent animate-wiggleBack"></div>
        <div className="absolute p-4 text-left border-4 border-black top-14 left-14">
          <p className="text-base text-3xl font-bold text-left">
            Dr. Mel Jelani
          </p>
          <p className="text-base text-2xl italic font-medium font-2xl">
            Overturned Convictions
          </p>
        </div>
        <div className={"grid grid-cols-4 gap-8 " + `${test}`}>
          {cards}
          <Card
            flipped={flipped}
            flipping={flipping}
            lighting={lighting}
            distance={distance}
            cardAsset={"red-circle.svg"}
          />
        </div>
        {!hideControls && (
          <div className="absolute flex flex-col p-4 mx-24 ml-16 border-4 border-black -right-7">
            <label className="mb-4 text-2xl font-semibold underline form-label">
              Noise Factors:
            </label>
            <label className="mb-1 font-semibold form-label">Lighting:</label>
            <input
              type="range"
              className="h-6 p-0 mb-4 bg-blue-100 appearance-none w-72 focus:outline-none focus:ring-0 focus:shadow-none"
              id="customRange1"
              value={lighting}
              onChange={(e) => handleLightingChange(e)}
              step="100"
              min="100"
              max="1000"
            ></input>
            <label className="mb-1 font-semibold form-label">Time:</label>
            <input
              type="range"
              className="h-6 p-0 mb-4 bg-blue-100 appearance-none w-72 focus:outline-none focus:ring-0 focus:shadow-none"
              id="customRange1"
              value={time}
              onChange={(e) => handleTimeChange(e)}
              step="0.25"
              min="1"
              max="7"
            ></input>
            <label className="mb-1 font-semibold form-label">Distance:</label>
            <input
              type="range"
              className="h-6 p-0 bg-blue-100 appearance-none w-72 focus:outline-none focus:ring-0 focus:shadow-none"
              id="customRange1"
              value={distance}
              onChange={(e) => handleDistanceChange(e)}
              min="20"
              max="180"
            ></input>
          </div>
        )}
      </main>
    </div>
  );
}
