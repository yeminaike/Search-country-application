import React from 'react';


const SingleCountryItem = ({ eachCountry, handleClick }) => {
  return (
    <div>
      <span>{eachCountry.name.common} </span>
      {/* <button data-name={eachCountry.name.common} onClick={handleClick}>
        show
         </button> */}
         <button onClick={() => handleClick(eachCountry.name.common)}>Show</button>

        
    </div>
  );
};

export default SingleCountryItem;