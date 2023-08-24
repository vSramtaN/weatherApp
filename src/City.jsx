import React from 'react'


function City({ city,search }) {
    console.log(city)
  return (
   city ? <div value={search}>
    <div className='border border-solid w-[40vh] rounded mt-1'>
    <h1>Sıcaklık: {city.main.temp} <strong>Derece</strong> </h1>
    <h1>Şehir: {city.name}</h1>
    <h2>Ülke: {city.sys.country}</h2>
    <h2>Hava: {city.weather[0].main}</h2>
    
    </div>
</div> : null
  )
}

export default City