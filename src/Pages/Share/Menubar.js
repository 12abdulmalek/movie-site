import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UseHooks from '../../hooks/UseHooks';
// import { Link } from 'react-router-dom';

import './Menubar.css';
const Menubar = () => {
    const {setSearchMovie,searchMovie} = UseHooks();
    const [value,setValue] = useState('');
    console.log(searchMovie);
    
    const movieSearch = (e) => {
      
        setSearchMovie(e.target.value);
    }
  
    return (
        <div className='menubar'>
            <div>
                <ul className='movie-bar'>
                    <li><Link to="/home">MOVIE HUB</Link> </li>
                    <li><Link to="/popular">popular</Link> </li>
                    <li className='year-active'>GENRE
                        <ul className='movie-year'>
                            <li><Link to={`/yearmovie/${value}`}>  <button   onClick={()=>setValue('romance')}>romance</button></Link> </li>
                            <li>action</li>
                            <li>thriller</li>
                        </ul>
                    </li>
                    <li><Link to="/show">tv show</Link> </li>

                    {/* search movie using year */}
                    <li className='year-active'>YEAR
                        <ul className='movie-year'>
                        <li> <Link to={`/yearmovie/${value}`}>  <button   onClick={()=>setValue(2022)}>2022</button></Link></li>

                        <li> <Link to={`/yearmovie/${value}`}>  <button   onClick={()=>setValue(2021)}>2021</button></Link></li>
                        <li> <Link to={`/yearmovie/${value}`}>  <button   onClick={()=>setValue(2020)}>2020</button></Link> </li>
                           
                        </ul>
                    </li>
                    <li> <input onChange={movieSearch} placeholder='search  movie' /> 
                   </li>
                </ul>
            </div>
        </div>
    );
};

export default Menubar;