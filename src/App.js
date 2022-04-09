
import './App.css';

import Menubar from './Pages/Share/Menubar';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingleMovie from './Pages/Home/Movies/SingleMovie/SingleMovie';
import Show from './Pages/Show/Show';
import Popular from './Pages/popular/Popular';
import SearchMovie from './Pages/Share/SearchMovie';
import YearMovie from './Pages/YearMovie/YearMovie';
// https://imdb-api.com/en/API/Top250Movies/k_j8kdoljp
function App() {
  
   
  return (
    <div >
     
       <div>
           <BrowserRouter>
           <Menubar></Menubar>
     
             <Routes >
               <Route path="/" element={ <Home></Home>}>
               </Route>
               <Route path="/home" element={ <Home></Home>}>
               </Route>
               <Route path="/search" element={ <SearchMovie></SearchMovie>}>
               </Route>
               <Route path="/popular" element={ <Popular></Popular>}>
               </Route>
               <Route path="/yearmovie/:id" element={ <YearMovie></YearMovie>}>
               </Route>
               <Route path="/show" element={ <Show></Show>}>
               </Route>
              
               <Route path="service/:id" element={ <SingleMovie></SingleMovie>}>
               </Route>
             </Routes>
           </BrowserRouter>

       </div>
    </div>
  );
}

export default App;
