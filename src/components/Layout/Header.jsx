import { WiDaySunny, WiRain, WiSnow, WiCloudy, WiFog } from "react-icons/wi";

export default function Header({ setcity, fetchWeather, weather }) {
  const getBgColor = () => {
    if (!weather) return "bg-purple-600";
    switch (weather.code) {
      case 0:
        return "bg-yellow-400/60"; 
      case 1:
      case 2:
      case 3:
        return "bg-gray-400/60"; 
      case 45:
      case 48:
        return "bg-gray-500/50";
      case 51:
      case 53:
      case 55:
      case 61:
      case 63:
      case 65:
      case 80:
      case 81:
      case 82:
        return "bg-blue-400/60"; 
      case 71:
      case 73:
      case 75:
      case 77:
      case 85:
      case 86:
        return "bg-white/50 text-black"; 
      case 95:
      case 96:
      case 99:
        return "bg-gray-700/60"; 
      default:
        return "bg-purple-600/50";
    }
  };

  const renderIcon = () => {
    if (!weather) return null;
    switch (weather.code) {
      case 0:
        return <WiDaySunny size={30} />;
      case 1:
      case 2:
      case 3:
        return <WiCloudy size={30} />;
      case 45:
      case 48:
        return <WiFog size={30} />;
      case 51:
      case 53:
      case 55:
      case 61:
      case 63:
      case 65:
      case 80:
      case 81:
      case 82:
        return <WiRain size={30} />;
      case 71:
      case 73:
      case 75:
      case 77:
      case 85:
      case 86:
        return <WiSnow size={30} />;
      case 95:
      case 96:
      case 99:
        return <WiRain size={30} />; 
      default:
        return null;
    }
  };

  return (
    <section
      className={`flex flex-col md:flex-row justify-between items-center p-4 ${getBgColor()} transition-colors duration-500`}
    >
      <div className="container p-2 flex items-center gap-2">
        <h1 className="logo font-bold text-white text-2xl flex items-center gap-2">
          Weather Facts {renderIcon()}
        </h1>
      </div>

      <div className="container flex items-center gap-2 mt-2 md:mt-0">
        <input
          onChange={(e) => setcity(e.target.value)}
          type="text"
          placeholder="Search here"
          autoFocus
          required
          className="w-72 md:w-96 rounded text-xl text-white bg-purple-400 p-2 outline-none placeholder-white"
          onKeyDown={(e) => e.key === "Enter" && fetchWeather()}
        />
        <button
          className="bg-purple-500 hover:bg-purple-700 font-bold p-2 rounded text-white"
          onClick={fetchWeather}
        >
          Search
        </button>
      </div>
    </section>
  );
}