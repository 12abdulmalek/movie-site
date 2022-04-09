import { Carousel } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import './slide.css'

// https://imdb-api.com/en/API/Top250Movies/k_j8kdoljp
const Slider = () => {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        fetch('')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                 setMovie(data);
            })
    }, [])
    console.log(movie.items);
    return (
        <div>
             <Carousel>
                {/* {
                    movie.items.slice(0,6).map(item =>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={item.image}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>{item.title}</h3>
                               
                            </Carousel.Caption>
                        </Carousel.Item>
      
                    )} */}



            </Carousel>
        </div>
    );
};

export default Slider;