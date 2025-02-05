import { useState , useEffect } from 'react';

import RestaurentCard from './RestCard';

import {TopRestList} from '../utils/mockData';
import {restaurents} from '../utils/mockData' ;

// body component
const Body = () => {

  const [ restList , setRestList ] = useState(restaurents) ;
 
  useEffect(()=>{
    console.log('use Effect iam here') ;
  },[])

  return (
    <div className="body">
      <div className="search">Search</div>

      <h2>Top restaurant chains in Kannur</h2>
      <div className="top-rest-container">
        {TopRestList.map((rest) => (
          <RestaurentCard key={rest.info.id} restData={rest} />
        ))}
      </div>

      <h2>Restaurants with online food delivery in Kannur</h2>
      <div className="filter-container">
        <div className="filter-top-rated">
          <button
            className="filter-btn"
            onClick={() => {

              restFiltered = restaurents.filter(
                (rest) => rest.info.avgRating >= 4.5
              );
              setRestList(restFiltered) ;

            }}
          >
            Top Rated
          </button>
        </div>
      </div>
      <div className="food-container">
        {restList.map((rest) => (
          <RestaurentCard key={rest.info.id} restData={rest} />
        ))}
      </div>
    </div>
  );
};

export default Body ;
