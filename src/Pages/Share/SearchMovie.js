import React, { useEffect, useState } from 'react';
import UseHooks from '../../hooks/UseHooks';

const SearchMovie = () => {
    const [SearchMovie,setSearchMovie] = useState([]);
    // const [singleMovie,setSingleMovie] = useState([]);
    const {searchMovie} = UseHooks();
    console.log(searchMovie);
  useEffect(()=>{
    fetch(`https://imdb-api.com/en/API/SearchName/k_j8kdoljp/${searchMovie}`)
    // https://imdb-api.com/en/API
    .then(res=>res.json())
    .then(data=>{
    //  setSearchMovie(data.items)
     console.log(data);
    })
  },[])
    return (
        <div>
      fsdsddfsa
        </div>
    );
};

export default SearchMovie;