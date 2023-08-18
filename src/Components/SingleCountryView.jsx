import React from 'react';
//  import WeatherView from './WeatherView';

const SingleCountryView = ({ eachCountry }) => {
  
  return (
    <div>
      <h2>{eachCountry.name.common}</h2>
      <p>
        <span>capital: {eachCountry.capital}</span>
        <br />
        <span>population: {eachCountry.population}</span>
      </p>

      <h3>languages</h3>
      <ul>
        
{Object.values(eachCountry.languages).map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>

      <br />

      <img
        src={eachCountry.flags.png}
        width={'200px'}
        alt={`${eachCountry.name.common} flag`}
      />

      <br />

       {/* <WeatherView eachCountry={eachCountry} />  */}
    </div>
  );
};

export default SingleCountryView;