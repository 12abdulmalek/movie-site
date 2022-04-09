import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const SingleMovie = () => {
    const {id} = useParams();
    const [movie,setMovie] = useState([]);
    const [singleMovie,setSingleMovie] = useState([]);
  useEffect(()=>{
    fetch(`https://imdb-api.com/en/API/Title/k_j8kdoljp/${id}`)
    .then(res=>res.json())
    .then(data=>{
      setSingleMovie(data.similars);
      setMovie(data);
    })
  },[])
 
    return (
        <div>
            <div>
                <div className='single-movie-card'>
                    <div className='movie-img'>
                        <img src={movie.image} alt='' />
                    </div>
                    <div className='movie-body'>
                        <h4>titile : {movie.title}</h4>
                        <h4>description :{movie.plot} </h4>
                        <h4>year : {movie.year}</h4>
                        <h4>view:{movie.imDbRatingVotes}</h4>
                        <h4>time : {movie.runtimeStr}</h4>
                        <h4>anguages : {movie.languages}</h4>
                        <h4>genre : {movie.genres}</h4>
                        <h4>rating : {movie.mDbRating}</h4>
                    </div>
                </div>
              <div className='movies-card'>
              {
            singleMovie.map((item,index)=> <Link to={`/service/${item.id}`}>
            <div className='movie-card'>
               <div className='movie-img'>
                   <img src={item.image} alt=''/>
               </div>
                  <div className='movie-body'>
                   <h4>{item.title}</h4>
                  </div>
            </div>
            </Link>)
        }
              </div>
            </div>
        </div>
    );
};

export default SingleMovie;