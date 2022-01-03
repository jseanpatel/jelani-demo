import Head from "next/head";
import { useState, useEffect } from "react";

import Card from "../src/components/Card";

export default function Home() {
  const x = [1, 2, 3];
  const [flipped, setFlipped] = useState(false);
  const [brightness, setBrightness] = useState(0.8);

  useEffect(() => {
    console.log(flipped);
  }, [flipped]);

  const handleBrightnessChange = (e) => {
    console.log("setting level", e.target.value);
    setBrightness(e.target.value);
  };

  const test = "brightness-[0.7]";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-row items-center justify-center flex-1 w-full px-20 text-center">
        
        <div className="grid grid-cols-4 gap-2 bg-red-500 ">
          <Card flipped={flipped} brightness={brightness} />
          <Card flipped={flipped} brightness={brightness} />
          <Card flipped={flipped} brightness={brightness} />
          <Card flipped={flipped} brightness={brightness} />
          <Card flipped={flipped} brightness={brightness} />
          <Card flipped={flipped} brightness={brightness} />
          <Card flipped={flipped} brightness={brightness} />
          <Card flipped={flipped} brightness={brightness} />
          <Card flipped={flipped} brightness={brightness} />
          <Card flipped={flipped} brightness={brightness} />
          <Card flipped={flipped} brightness={brightness} />
          <Card flipped={flipped} brightness={brightness} />
          <Card flipped={flipped} brightness={brightness} />
          <Card flipped={flipped} brightness={brightness} />
          <Card flipped={flipped} brightness={brightness} />
          <Card flipped={flipped} brightness={brightness} />
        </div>

        <div className="flex flex-col pt-1 ml-16">
         
          <button
            className="h-16 mb-8 text-white bg-black rounded-lg w-96 hover:opacity-75"
            onClick={() => setFlipped(!flipped)}
          >
            Flip cards
          </button>
          <label className="form-label">Brightness:</label>

          <input
            type="range"
            className="w-full h-6 p-0 mb-4 bg-blue-100 appearance-none focus:outline-none focus:ring-0 focus:shadow-none"
            id="customRange1"
            value={brightness}
            onChange={(e) => handleBrightnessChange(e)}
            min="0"
            max="10"
          ></input>
          <label className="form-label">Distance:</label>

          <input
            type="range"
            className="w-full h-6 p-0 mb-4 bg-blue-100 appearance-none focus:outline-none focus:ring-0 focus:shadow-none"
            id="customRange1"
            value={brightness}
            onChange={(e) => handleBrightnessChange(e)}
            min="0"
            max="10"
          ></input>
          <label className="form-label">Time:</label>

          <input
            type="range"
            className="w-full h-6 p-0 bg-blue-100 appearance-none focus:outline-none focus:ring-0 focus:shadow-none"
            id="customRange1"
            value={brightness}
            onChange={(e) => handleBrightnessChange(e)}
            min="0"
            max="10"
          ></input>
        </div>
      </main>
    </div>
  );
}
