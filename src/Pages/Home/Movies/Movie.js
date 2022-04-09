import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// https://imdb-api.com/en/API/Top250Movies/k_j8kdoljp
import './Movie.css'
const Movie = () => {
    const [movie,setMovie] = useState([]);
  useEffect(()=>{
    fetch('https://imdb-api.com/en/API/Top250Movies/k_j8kdoljp')
    // fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>{
      setMovie(data.items);
    })
  },[])
  
    return (
        <div>
             
   
    <div className='movies-card'>
         {
            movie.map((item,index)=> <Link to={`/service/${item.id}`}>
            <div className='movie-card'>
                <div className='movie-img'>
                   <img src={item.image} alt=''/>
               </div>
                  <div className='movie-body'>
                   <h4>{item.title}</h4>
                   <h4>{item.name}</h4>
                  </div>
            </div>
            </Link>)
        }
     
    </div>
        </div>
    );
};

export default Movie;