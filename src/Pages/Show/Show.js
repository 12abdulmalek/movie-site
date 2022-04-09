import React, { useEffect, useState } from 'react';

const Show = () => {
    // https://imdb-api.com/en/API/MostPopularTVs/k_12345678

    const [show,setShow] = useState([]);
    // const [singleMovie,setSingleMovie] = useState([]);
  useEffect(()=>{
    fetch('https://imdb-api.com/en/API/MostPopularTVs/k_j8kdoljp')
    .then(res=>res.json())
    .then(data=>{
     setShow(data.items)
    })
  },[])
    return (
        <div className='movies-card'>
              {
            show.map((item,index)=> 
            <div className='movie-card'>
                <div className='movie-img'>
                   <img src={item.image} alt=''/>
               </div>
                  <div className='movie-body'>
                   <h4>{item.title}</h4>
                   <h4>{item.name}</h4>
                  </div>
            </div>
          )
        }
        </div>
    );
};

export default Show;