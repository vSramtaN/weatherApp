import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import City from "./City";



function App() {

  const key ="9e07909bfd50f8e3a1b804eccbb0a61d" 
  const [city, setCity] = useState()
  const [search, setSearch] = useState('')
  
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.log("Error verdi")
      }
      
    }
    getApi();
  },[search])
    console.log(search)

  return (
    <div className="App ">
    <label value={search} onChange={(e) => setSearch(e.target.value)} className="relative flex items-center justify-center w-[40vh] ">
  <span className="sr-only">Search</span>
  <span  className="absolute inset-y-0 left-0 flex items-center justify-center w-full pl-2 cursor-pointer">
   
  </span>
  <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Aradağın İl,İlçe yi yaz." type="text" name="search"/>
</label>
 <City city={city} search={search}/>
    </div>

  )
}





export default App;
