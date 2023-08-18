// import React, { useEffect, useState } from "react";
// import axios from "axios";

// import SingleCountryItem from "./Components/SingleCountryItem";
// import SingleCountryView from "./Components/SingleCountryView";
// import WeatherView from "./Components/WeatherView";

// const App = () => {
//   const [countries, setCountries] = useState([]);
//   const [searchValue, setSearchValue] = useState("");
//   const [countriesGenerated, setCountriesGenerated] = useState([]);
//   const [countryInfo, setCountryInfo] = useState([]);
//   const [countryViewState, setCountryViewState] = useState(false);
//   const [clickedCountry, setClickedCountry] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://studies.cs.helsinki.fi/restcountries/api/all")
//       .then((response) => {
//         setCountries(response.data);
//       })
//       .catch((error) => {
//         console.log("An error don happen:", error);
//       });
//   }, []);

//   // console.log(searchValue, "search")

//   useEffect(() => {
//     axios
//       .get(
//         `https://studies.cs.helsinki.fi/restcountries/api/name/${searchValue}`
//       )
//       .then((response) => {
//         setCountriesGenerated(response.data);
//       })
//       .catch((error) => {
//         console.log("An error don happen:", error);
//       });
//   }, [searchValue]);

//   console.log(countries, "countries");
//   console.log(countriesGenerated, "countriesGenerated");

//   const handleSearch = (event) => {
//     setSearchValue(event.target.value);
//     // setCountryViewState(false);
//   };

//   const trimString = (inputString) => {
//     if (typeof inputString !== "string") {
//       return "";
//     }
//     return inputString.trim().toLowerCase().replace(/\s+/g, "");
//   };

//   const searchedCountries = countries.filter((eachCountry) => {
//     const trimmedInput = trimString(searchValue);
//     const trimmedCountryName = trimString(eachCountry.name.common);
//     return trimmedCountryName.includes(trimmedInput);
//   });

//   const handleClick = (event) => {
//     setCountryViewState(!countryViewState);
//     const clickedCountryName = event.target.getAttribute("data-name");
//     const clickedCountry = searchedCountries.filter(
//       (eachCountry) => eachCountry.name.common === clickedCountryName
//     );
//     setClickedCountry(clickedCountry);
//   };

//   const searchedCountriesComponents = searchedCountries.map((eachCountry) => (
//     countryViewState ? (
// <SingleCountryView
//         key={eachCountry.alpha3Code}
//         eachCountry={eachCountry.name.common}/>

//     ):(
    
//     <SingleCountryItem
//       countryViewState={countryViewState}
//       key={eachCountry.alpha3Code}
//       eachCountry={eachCountry}
//       clickedCountry={clickedCountry}
//       handleClick={handleClick}
//     />
//   )));

//   const renderCountryViewComponents = (countriesArray) => {
//     const countryViewComponents = countriesArray.map((eachCountry) => (
//       <SingleCountryView
//         key={eachCountry.alpha3Code}
//         eachCountry={eachCountry.name.common}
//       />
//     ));

//     return countryViewComponents;
//   };

//   const searchedCountriesViews = renderCountryViewComponents(searchedCountries);
//   const clickedCountryView = renderCountryViewComponents(clickedCountry);

//   const tooManyMatches = searchedCountries.length > 20;
//   const onlyOneMatch = searchedCountries.length === 1;
//   const singleCountryClicked = clickedCountry.length === 1 && countryViewState;
//   const displayMatches =
//     !tooManyMatches && !onlyOneMatch && !singleCountryClicked;

//   return (
//     <div>
//       <input type="search" value={searchValue} onChange={handleSearch} />

//       <br />

//       {tooManyMatches && <span>Too many matches, specify another filter</span>}
//       {onlyOneMatch && searchedCountriesViews}
//       {singleCountryClicked && clickedCountryView}
//       {displayMatches && searchedCountriesComponents}
//       {singleCountryClicked && clickedCountry.length === 1 && (
//         <WeatherView eachCountry={clickedCountry[0]} />
//       )}

//       {/* {countries.map((country) => {
//         console.log(country, "test");
//         return (
//           <>
//             {searchValue === "" ? (
//               <>
//                 <ul>
//                   <li>{country.name.common}</li>
//                 </ul>
//               </>
//             ) : (
//               <>
//                 {" "}
//                 <div>place a search</div>
//               </>
//             )}
//           </>
//         );
//       })} */}
 

//  {/* {searchValue === "" ? renderCountryViewComponents(countries) : <p>type a filter</p>} */}

//     </div>
//   );
// };

// export default App;







// // {searchValue === "" ? (
// //   countries.map((country) => (
// //     <ul key={country.alpha3Code}>
// //       <li>{country.name.common}</li>
// //     </ul>
// //   ))
// // ) : (
// //   <p>type a filter</p>
// // )}



// // {searchValue === "" ? (
// //   countries
// //     .filter((country) =>
// //       country?.name?.common.toLowerCase().includes(searchValue.toLowerCase())
// //     )
// //     .map((country) => (
// //       <ul key={country.alpha3Code}>
// //         <li>{country.name.common}</li>

// //       </ul>
// //     ))
// // ) : (
// //   <p>type a filter</p>
// // )}
  




// // {searchValue === "" ? (
// //   <>
// //     {countries.map((country) => {
// //       const filteredCountries = !searchValue
// //         ? country?.name?.common
// //         : country?.name?.common.filter(({ name }) => {
// //             return name.toLowerCase().includes(searchValue.toLowerCase());
// //           });
// //       console.log(country, filteredCountries, "test");
// //       return (
// //         <ul>
// //           <li>{country?.name?.common}</li>
// //         </ul>
// //       );
// //     })}
// //   </>
// // ) : (
// //   <>type a filter</>
// // )}




// // {searchValue === "" ? (
// //   <>
// //     {countries
// //       .filter((country) =>
// //        country?.name?.common.toLowerCase().includes(searchValue.toLowerCase())
// //      )
// //        .map((country) => (
// //         <ul key={country.alpha3Code}>
// //           <li>{country.name.common}</li>
// //         </ul>
// //        ))}
// //    </>
// // ) : (
// //   <>type a filter</>
// //  )}



//Country Search Field Application REAl

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// // import SingleCountryItem from "./Components/SingleCountryItem";
// import SingleCountryView from "./Components/SingleCountryView";
// import SingleCountryItem from "./Components/SingleCountryItem";
// import WeatherView from "./Components/WeatherView";

// const App = () => {
//   const [countries, setCountries] = useState([]);
//   const [searchValue, setSearchValue] = useState("");
//   const [countriesGenerated, setCountriesGenerated] = useState([]);
//   // const [countryInfo, setCountryInfo] = useState([]);
//   const [countryViewState, setCountryViewState] = useState(false);
//   const [clickedCountry, setClickedCountry] = useState(undefined);

//   useEffect(() => {
//     axios
//       .get("https://studies.cs.helsinki.fi/restcountries/api/all")
//       .then((response) => {
//         setCountries(response.data);
//       })
//       .catch((error) => {
//         console.log("An error don happen:", error);
//       });
//   }, []);

//   // console.log(searchValue, "search")

//   useEffect(() => {
//     axios
//       .get(
//         `https://studies.cs.helsinki.fi/restcountries/api/name/${searchValue}`
//       )
//       .then((response) => {
//         setCountriesGenerated(response.data);
//       })
//       .catch((error) => {
//         console.log("An error don happen:", error);
//       });
//   }, [searchValue]);

//   console.log(countries, "countries");
//   console.log(countriesGenerated, "countriesGenerated");


  
//   const handleSearch = (event) => {
//     setSearchValue(event.target.value);
//     setCountryViewState(false);
//     setClickedCountry([]);
//   };

//   const matchingCountries = countries.filter((country) => {
//     const trimmedInput = searchValue.trim().toLowerCase();
//     const trimmedCountryName = country.name.common.trim().toLowerCase();
//     return trimmedCountryName.includes(trimmedInput);
//   });

//   const handleCountryClick = (country) => {
//     setCountryViewState(true);
//     setClickedCountry(country);
//   };

//   return (
//     <div>
//       <input type="search" value={searchValue} onChange={handleSearch} />

//       <br />

//       {searchValue === "" ? (
//         countries.map((country) => (
//           <SingleCountryItem
//            key={country.alpha3Code}
//             eachCountry= {country}
//             handleClick={() => handleCountryClick(country)}
//             />
//               // {
//               // setCountryViewState(true);
//               // setClickedCountry([country]);

//             // }}
         
          
//         ))
//       ) : matchingCountries.length > 10? (
//         <p>Too many matches, specify another filter</p>
//       ) : matchingCountries.length > 1 ? (
//         matchingCountries.map((country) => (
//          <SingleCountryItem
//          key={country.alpha3Code}
//          eachCountry={country}
//          handleClick={() => handleCountryClick(country)} 
//          />
//         //  {
//         //   setCountryViewState(true);
//         //   setClickedCountry([country])
//         //  }}
        
//         ))
//       ) : (
//         // countryViewState && clickedCountry.length === 1 && (
//           matchingCountries[0] && (
//           <>
//             <SingleCountryView eachCountry={matchingCountries[0]} />
//             <WeatherView eachCountry={matchingCountries[0]} />
//           </>
          
//           )
//         // )
//       )}
//     </div>
//   );
// };

// export default App;
      




 
    