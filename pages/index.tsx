import Head from "next/head";
import { useState, useEffect } from "react";

import Card from "../src/components/Card";

export default function Home() {
  const [flipped, setFlipped] = useState(false);
  const [brightness, setBrightness] = useState();
  const [distance, setDistance] = useState(100);
  const [time, setTime] = useState(6);

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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Dr. Mel Jelani - Overturned Convictions</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative flex flex-col items-center self-center justify-center flex-1 w-full px-20 text-center">

        <div className="grid grid-cols-4 gap-2 brightness-[0.25]">
          <Card flipped={flipped} brightness={brightness} distance={distance} />
          <Card flipped={flipped} brightness={brightness} distance={distance} />
          <Card flipped={flipped} brightness={brightness} distance={distance} />
          <Card flipped={flipped} brightness={brightness} distance={distance} />
          <Card flipped={flipped} brightness={brightness} distance={distance} />
          <Card flipped={flipped} brightness={brightness} distance={distance} />
          <Card flipped={flipped} brightness={brightness} distance={distance} />
          <Card flipped={flipped} brightness={brightness} distance={distance} />
          <Card flipped={flipped} brightness={brightness} distance={distance} />
          <Card flipped={flipped} brightness={brightness} distance={distance} />
          <Card flipped={flipped} brightness={brightness} distance={distance} />
          <Card flipped={flipped} brightness={brightness} distance={distance} />
          <Card flipped={flipped} brightness={brightness} distance={distance} />
          <Card flipped={flipped} brightness={brightness} distance={distance} />
          <Card flipped={flipped} brightness={brightness} distance={distance} />
          <Card flipped={flipped} brightness={brightness} distance={distance} />
        </div>

        <div className="absolute flex flex-col mx-24 ml-16 right-3">
          <button
            className="h-16 mb-8 text-white bg-black rounded-lg w-96 hover:opacity-75"
            onClick={() => setFlipped(!flipped)}
          >
            Flip cards
          </button>
          <label className="form-label">Brightness:</label>

          <input
            type="range"
            className="h-6 p-0 mb-4 bg-blue-100 appearance-none w-96 focus:outline-none focus:ring-0 focus:shadow-none"
            id="customRange1"
            value={brightness}
            onChange={(e) => handleBrightnessChange(e)}
            min="0"
            max="10"
          ></input>
          <label className="form-label">Time:</label>

          <input
            type="range"
            className="h-6 p-0 mb-4 bg-blue-100 appearance-none w-96 focus:outline-none focus:ring-0 focus:shadow-none"
            id="customRange1"
            value={time}
            onChange={(e) => handleTimeChange(e)}
            min="1"
            max="11"
          ></input>
          <label className="form-label">Distance:</label>

          <input
            type="range"
            className="h-6 p-0 bg-blue-100 appearance-none w-96 focus:outline-none focus:ring-0 focus:shadow-none"
            id="customRange1"
            value={distance}
            onChange={(e) => handleDistanceChange(e)}
            min="20"
            max="100"
          ></input>
        </div>
      </main>
    </div>
  );
}
