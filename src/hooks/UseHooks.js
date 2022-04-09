import { useState } from "react";

const UseHooks = () => {
    const [searchMovie,setSearchMovie] = useState('');
    console.log(searchMovie);
    return {
       
        setSearchMovie,
        searchMovie
    }
};

export default UseHooks;