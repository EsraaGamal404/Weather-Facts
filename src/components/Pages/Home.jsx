import { WiDaySunny } from "react-icons/wi";

export default function Home({ data }) {

  if (!data) {
    return (
      <div className="container py-40 px-5 mx-auto flex flex-col justify-center items-center gap-7">
        <WiDaySunny size={60} className="text-yellow-400 animate-bounce" />
        <span className="text-3xl text-white font-bold text-center">
          No Weather Yet
        </span>
      </div>
    );
  }

  return (
    <section className="py-20 flex justify-center items-center">
      <div className="bg-purple-600/30 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-72 md:w-96 flex flex-col items-center gap-5 transition-all hover:scale-105 duration-500">
        
        <p className="text-lg md:text-2xl font-bold text-center text-white">
          <span className="text-yellow-300">Temperature:</span> {data.temp}°C
        </p>

        <p className="text-lg md:text-2xl font-semibold text-center text-white">
          <span className="text-yellow-300">Wind:</span> {data.wind} km/h
        </p>

        <p className="text-lg md:text-2xl font-semibold text-center text-white">
          <span className="text-yellow-300">Weather Code:</span> {data.code}
        </p>

      </div>
    </section>
  );
}