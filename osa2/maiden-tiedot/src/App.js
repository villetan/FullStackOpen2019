import React, { useState, useEffect } from 'react'
import axios from 'axios'
import logo from './logo.svg';
import './App.css';
import getWeatherKey from './getWeatherKey'

const Search = ({value, onChange}) => {
  return(
    <div>
      find countries
    <input
             value={value}
             onChange={onChange}
      />
    </div>
  )
}

const DetailButton = ({onClick}) => {
  return(
    <button onClick={onClick}>show</button>
  )
}

const ListCountry = ({country, clickFun}) => {
  return(
    <li>
      {country.name} <DetailButton onClick={() => clickFun(country.name)} />
    </li>
  )
}

const CountryList = ({countries, clickFun, setWeather}) => {
  if(countries.length > 10){
    return(
      <div>Too many mathces, specify another filter</div>
    )
  }else if(countries.length < 10 && countries.length > 1){
    return(
      <ul>
        {countries.map(country =>
          <ListCountry key={country.name} country={country} clickFun={clickFun} />)
        }
      </ul>
    )
  }else if(countries.length == 1){
    const country = countries[0]
    const wkey = getWeatherKey()
    const weatherURL = `http://api.weatherstack.com/current?access_key=${wkey}&query=${country.capital}`
    const xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        const data = JSON.parse(this.responseText)
        setWeather(data.current)
      }
    }
    xhttp.open('GET', weatherURL, true)
    xhttp.send()
    
    return(
      <div>
        <h1>{country.name}</h1>
        <p>capital: {country.capital}</p>
        <p>population: {country.population}</p>
        <h2>languages</h2>
        <ul>
          {country.languages.map(lan => 
            <li key={lan.name}>
              {lan.name}
            </li>
          )}
        </ul>
        <img src={country.flag} />
      </div>
    )
  }
  return(
    <div>no countries found</div>
  )
}

const Weather = ({weather}) => {
  if(weather.temperature){
    return(
      <div>
        Temperature: {weather.temperature}
      </div>
    )
  }
  return(
    <></>
  )
}

function App() {
  const [countries, setCountries] = useState([])
  const [countryName, setCountryName] = useState("")
  const [weather, setWeather] = useState({})
  
  const handleFilter = (event) => {
    setCountryName(event.target.value)
    fetchCountries(event.target.value)
  }

  const handleButtonClick = (country_name) => {
    setCountryName(country_name)
    fetchCountries(country_name)
  }

  const fetchCountries = (partial_name) => {
    if(partial_name == "") {
      setCountries([])
      return(null)
    }
    axios.get(`https://restcountries.eu/rest/v2/name/${partial_name}`)
      .then(response => setCountries(response.data))
  }

  return(
    <>
      <Search onChange={handleFilter} value={countryName} />
      <CountryList countries={countries} clickFun={handleButtonClick} setWeather={setWeather}/>
      <Weather weather={weather} />
    </>
  )
}

export default App;
