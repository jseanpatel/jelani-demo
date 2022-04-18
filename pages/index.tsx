import Head from "next/head";
import { useState, useEffect } from "react";

import Card from "../src/components/Card";

export default function Home() {
  const [flipped, setFlipped] = useState(false);
  const [flipping, setFlipping] = useState(false);
  const [lighting, setLighting] = useState(100);
  const [time, setTime] = useState(5);
  const [distance, setDistance] = useState(100);
  const [hideControls, setHideControls] = useState(false);

  const test = "brightness-" + lighting;

  const cardAssets: string[] = [
    "blue-triangle.svg",
    "green-circle.svg",
    "red-triangle.svg",
    "orange-triangle.svg",
    "green-square.svg",
    "blue-square.svg",
    "orange-circle.svg",
    "blue-star.svg",
    "red-star.svg",
    "blue-circle.svg",
    "orange-star.svg",
    "red-square.svg",
    "orange-square.svg",
    "green-star.svg",
    "green-triangle.svg",
  ];

  const cards = cardAssets.map((asset, index) => (
    <Card
      key={index}
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
    setLighting(e.target.value);
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
      if (e.key === "[") {
        setHideControls(true);
      } else if (e.key === "]") {
        setHideControls(false)
      } else if (e.key === "l" && !flipping) {
        setFlipping(!flipping);
      } else if (e.key === "'" && !flipping) {
        // reset values to defaults;
        // setDistance(100);
        // setTime(5);
        // setLighting(100);
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
        // notice we don't directly switch flipped as that logic is abstracted away
        setFlipping(!flipping);
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
        <div className="w-0 h-0 bg-transparent bg-gray-200 animate-wiggle brightness-25 brightness-30 brightness-35 brightness-40 brightness-45 brightness-50 brightness-55 brightness-60 brightness-65 brightness-70 brightness-75 brightness-80 brightness-85 brightness-90 brightness-95 brightness-105 brightness-110 brightness-115 brightness-120 brightness-125 brightness-130 brightness-135 brightness-140 brightness-145 brightness-150 brightness-155 brightness-160 brightness-165 brightness-170 brightness-175"></div>
        <div className="w-0 h-0 bg-transparent bg-red-500 flipping animate-wiggleBack"></div>
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
              step="5"
              min="30"
              max="170"
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
              max="9"
            ></input>
            <label className="mb-1 font-semibold form-label">Distance:</label>
            <input
              type="range"
              className="h-6 p-0 bg-blue-100 appearance-none w-72 focus:outline-none focus:ring-0 focus:shadow-none"
              id="customRange1"
              value={distance}
              onChange={(e) => handleDistanceChange(e)}
              min="40"
              max="160"
            ></input>
          </div>
        )}
      </main>
    </div>
  );
}
