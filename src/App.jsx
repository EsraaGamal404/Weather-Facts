import { useState } from "react"
import Header from "./components/layouts/Header"
import Home from "./components/layouts/pages/Home";


function App() {
  const[location,setlocation] = useState("");
  const[data,setData] = useState({});
  async function getWeatherData(){
    try{
      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=88a9fc86342d4d63a98185704230712&q=${location}&days=7&aqi=yes&alerts=yes`)

      if(response.status === 200){
        const data =await response.json();
        setData(data);
      }
    } catch (error){
      console.log(error,"error from Api call")
    } finally{
      console.log("success");
    }
  }
  return (
    <>
       <Header setlocation={setlocation} getWeatherData={getWeatherData} />
       <Home data={data} />
    
     </>
  )
}
export default App
