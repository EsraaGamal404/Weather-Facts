import { useState } from "react";

const weatherFacts = [
  "The highest temperature ever recorded on Earth was 56.7°C in Death Valley.",
  "Rain contains vitamin B12.",
  "Lightning strikes about 8 million times a day worldwide.",
  "Snowflakes can have up to 200 ice crystals.",
  "A cubic mile of ordinary fog contains less than a gallon of water."
];

export default function Facts() {
  const [fact, setFact] = useState(weatherFacts[0]);

  const getRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * weatherFacts.length);
    setFact(weatherFacts[randomIndex]);
  };

  return (
    <div className="container mx-auto py-20 px-5 flex flex-col items-center gap-5 text-white">
      <h1 className="text-3xl font-bold mb-5">Weather Facts</h1>
      <p className="text-xl md:text-2xl text-center">{fact}</p>
      <button
        className="mt-5 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        onClick={getRandomFact}
      >
        Show Another Fact
      </button>
    </div>
  );
}