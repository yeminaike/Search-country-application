import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleCountryView from "./Components/SingleCountryView";
import SingleCountryItem from "./Components/SingleCountryItem";
import WeatherView from "./Components/WeatherView";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [countriesGenerated, setCountriesGenerated] = useState([]);
  const [countryViewState, setCountryViewState] = useState(false);
  const [clickedCountry, setClickedCountry] = useState(undefined);

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.log("An error don happen:", error);
      });
  }, []);

  // console.log(searchValue, "search")

  useEffect(() => {
    axios
      .get(
        `https://studies.cs.helsinki.fi/restcountries/api/name/${searchValue}`
      )
      .then((response) => {
        setCountriesGenerated(response.data);
      })
      .catch((error) => {
        console.log("An error don happen:", error);
      });
  }, [searchValue]);

  console.log(countries, "countries");
  console.log(countriesGenerated, "countriesGenerated");


  
  const handleSearch = (event) => {
    setSearchValue(event.target.value);
    setCountryViewState(false);
     setClickedCountry([]);
   
  };

  const matchingCountries = countries.filter((country) => {
    const trimmedInput = searchValue.trim().toLowerCase();
    const trimmedCountryName = country.name.common.trim().toLowerCase();
    return trimmedCountryName.includes(trimmedInput);
  });

  const handleCountryClick = (country) => {
    setCountryViewState(true);
    setClickedCountry(country);
  };

  return (
    <div>
      <input type="search" value={searchValue} onChange={handleSearch} />

      <br />

      {searchValue === "" ? (
        countries.map((country) => (
          <SingleCountryItem
           key={country.alpha3Code}
            eachCountry= {country}
            handleClick={() => handleCountryClick(country)}
            />
              // {
              // setCountryViewState(true);
              // setClickedCountry([country]);

            // }}
         
          
        ))
      ) : matchingCountries.length > 10
      ? <p>Too many matches, specify another filter</p>
      : matchingCountries.map((country) => (
          <SingleCountryItem
            key={country.alpha3Code}
            eachCountry={country}
            handleClick={() => handleCountryClick(country)}
          />
        ))}

    {countryViewState && clickedCountry && (
      <>
        <SingleCountryView eachCountry={clickedCountry} />
        <WeatherView eachCountry={clickedCountry} />
      </>
    )}
    </div>
  );
};

export default App;
      




 
    