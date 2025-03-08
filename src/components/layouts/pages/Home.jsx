import image from "../../../assets/image/Group-1.png";
export default function Home({ data }) {
  if (!data || !data.location || !data.current) {
    return (
      <div className="container py-20 px-5 mx-auto flex flex-col justify-center items-center gap-7">
        <span className="text-3xl text-white font-bold text-center">No News Weather</span>
        <img className="w-20" src={image} alt="weather" />
      </div>
    );
  }
  return (
    <section className="py-20">
      <div className="container px-5 mx-auto flex flex-col justify-center items-center gap-4 bg-gradient-to-t from-[#FFFFFF]/20 to-[#BFBFBF]/20 p-7 backdrop:blur-md w-64 md:w-80 rounded-xl text-white">
        <p className="text-xl md:text-2xl text-center font-bold">
          <span className="text-purple-600 font-bold">Location:</span> {data.location.name}, {data.location.country}
        </p>
        <p className="text-xl md:text-2xl font-bold text-center">
          <span className="text-purple-600 font-bold ">Region:</span> {data.location.region}
        </p>
        <p className="text-xl md:text-2xl font-bold text-center">
          <span className="text-purple-600 font-bold ">Temperature:</span> {data.current.temp_c}°C
        </p>
        <p className="text-xl md:text-2xl font-bold text-center">
          <span className="text-purple-600 font-bold ">Condition: </span> {data.current.condition.text}
        </p>
        <img className="w-24" src={data.current.condition.icon} alt="Weather" />
      </div>
    </section>
  );
}