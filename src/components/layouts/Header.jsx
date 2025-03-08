import { Link } from "react-router";
 function Header({ setlocation, getWeatherData }){
  return(
    <section className="flex justify-between items-center p-4">
    <div className="container  p-5">
     <Link to="/" className="logo font-medium text-white text-2xl">Weather Facts</Link>
    </div>
        <div className="container flex items-center gap-2">
        <input onChange={(e) => setlocation(e.target.value)} type="text" placeholder="Search here" autoFocus required className="w-96 rounded text-xl text-white bg-purple-400 p-2" />
       <button className="bg-purple-400 font-bold p-2" onClick={getWeatherData}>Search</button>
      </div>
      </section>
  )
}
export default Header;