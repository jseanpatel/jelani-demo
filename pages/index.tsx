import Head from "next/head";
import { useState, useEffect } from "react";

import Card from "../src/components/Card";

export default function Home() {
  const [flipped, setFlipped] = useState(false);
  const [brightness, setBrightness] = useState();
  const [distance, setDistance] = useState(100);
  const [time, setTime] = useState(6);
  const [hideControls, setHideControls] = useState(false);

  const handleBrightnessChange = (e) => {
    console.log("setting level", e.target.value);
    setBrightness(e.target.value);
  };

  const handleTimeChange = (e) => {
    console.log("setting level", e.target.value);
    setTime(e.target.value);
  };

  const handleDistanceChange = (e) => {
    setDistance(e.target.value);
  };

  useEffect(() => {
    if (flipped) {
      const milliseconds = time * 1000;
      const timer = setTimeout(() => {
        console.log("should flip back now");
        setFlipped(!flipped);
      }, milliseconds);
      return () => clearTimeout(timer);
    }
  }, [flipped]);

  useEffect(() => {
    document.addEventListener("keyup", (e) => {
      if (e.key === "]") {
        setHideControls(!hideControls);
      }
      if (e.key === "l") {
        setFlipped(!flipped);
      }
    });
  }, [flipped]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Dr. Mel Jelani - Overturned Convictions</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative flex flex-col items-center self-center justify-center flex-1 w-full px-20 text-center">
        <div className="w-0 h-0 bg-transparent animate-wiggle brightness-25"></div>
        <div className="w-0 h-0 bg-transparent animate-wiggleBack"></div>
        <div className="absolute p-4 text-left border-4 border-black top-14 left-14 brightness-50">
          <p className="text-base text-3xl font-bold text-left">
            Dr. Mel Jelani
          </p>
          <p className="text-base text-2xl italic font-medium font-2xl">
            Overturned Convictions
          </p>
        </div>
        <div className="grid grid-cols-4 gap-8">
          <Card
            flipped={flipped}
            brightness={brightness}
            distance={distance}
            cardAsset={"test-card.png"}
          />
          <Card
            flipped={flipped}
            brightness={brightness}
            distance={distance}
            cardAsset={"test-card.png"}
          />
          <Card
            flipped={flipped}
            brightness={brightness}
            distance={distance}
            cardAsset={"test-card.png"}
          />
          <Card
            flipped={flipped}
            brightness={brightness}
            distance={distance}
            cardAsset={"green-square.png"}
          />
          <Card
            flipped={flipped}
            brightness={brightness}
            distance={distance}
            cardAsset={"test-card.png"}
          />
          <Card
            flipped={flipped}
            brightness={brightness}
            distance={distance}
            cardAsset={"test-card.png"}
          />
          <Card
            flipped={flipped}
            brightness={brightness}
            distance={distance}
            cardAsset={"test-card.png"}
          />
          <Card
            flipped={flipped}
            brightness={brightness}
            distance={distance}
            cardAsset={"test-card.png"}
          />
          <Card
            flipped={flipped}
            brightness={brightness}
            distance={distance}
            cardAsset={"test-card.png"}
          />
          <Card
            flipped={flipped}
            brightness={brightness}
            distance={distance}
            cardAsset={"test-card.png"}
          />
          <Card
            flipped={flipped}
            brightness={brightness}
            distance={distance}
            cardAsset={"test-card.png"}
          />
          <Card
            flipped={flipped}
            brightness={brightness}
            distance={distance}
            cardAsset={"test-card.png"}
          />
          <Card
            flipped={flipped}
            brightness={brightness}
            distance={distance}
            cardAsset={"test-card.png"}
          />
          <Card
            flipped={flipped}
            brightness={brightness}
            distance={distance}
            cardAsset={"test-card.png"}
          />
          <Card
            flipped={flipped}
            brightness={brightness}
            distance={distance}
            cardAsset={"test-card.png"}
          />
          <Card
            flipped={flipped}
            brightness={brightness}
            distance={distance}
            cardAsset={"test-card.png"}
          />
        </div>

        {!hideControls && (
          <div className="absolute flex flex-col p-4 mx-24 ml-16 border-4 border-black -right-8">
            <label className="mb-4 text-2xl font-semibold underline form-label">
              Noise Factors:
            </label>
            <label className="mb-1 font-semibold form-label">Brightness:</label>

            <input
              type="range"
              className="h-6 p-0 mb-4 bg-blue-100 appearance-none w-72 focus:outline-none focus:ring-0 focus:shadow-none"
              id="customRange1"
              value={brightness}
              onChange={(e) => handleBrightnessChange(e)}
              min="0"
              max="10"
            ></input>
            <label className="mb-1 font-semibold form-label">Time:</label>

            <input
              type="range"
              className="h-6 p-0 mb-4 bg-blue-100 appearance-none w-72 focus:outline-none focus:ring-0 focus:shadow-none"
              id="customRange1"
              value={time}
              onChange={(e) => handleTimeChange(e)}
              min="1"
              max="11"
            ></input>
            <label className="mb-1 font-semibold form-label">Distance:</label>

            <input
              type="range"
              className="h-6 p-0 bg-blue-100 appearance-none w-72 focus:outline-none focus:ring-0 focus:shadow-none"
              id="customRange1"
              value={distance}
              onChange={(e) => handleDistanceChange(e)}
              min="20"
              max="100"
            ></input>
          </div>
        )}
      </main>
    </div>
  );
}
