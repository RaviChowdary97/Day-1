import { useState } from "react";
import "./App.css";
import { AddColor } from "./Components/AddColor";

import { movie } from "./utilis/constant";
import AddMovie from "./Components/AddMovie";
import MovieList from "./Components/MovieList";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import NotFound from "./Components/NotFound";
import { Navigate } from "react-router-dom";

function App() {
  const [movieList, setMovieList] = useState(movie);
  // console.log(movie[2])

  return (
    <div className="bg-dark text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieList movieList={movieList} />} />
        <Route path="/addcolor" element={<AddColor />} />
        <Route
          path="/addmovie"
          element={
            <AddMovie movieList={movieList} setMovieList={setMovieList} />
          }
        />

        {/*       
      Changed old url > new url
      > old url > /newmovie
      > new url > /addmovie 
      
      Navigate > react-router-dom
      */}
        <Route path="/newmovie" element={<Navigate replace to="/addmovie" />} />

        {/* task 4:  */}
        {/* <Route path='/404' element={<NotFound/>}/> */}
        {/* "*" */}

        {/* Navigation > 404 */}
        {/* 
        old path ='*'
        new path ='/404'
        */}
        {/* <Route path='*' element={<Navigate replace to='/404'/>}/> */}
        {/* 
        <Route
          path="/movies/:id"
          element={<MovieDetails movieList={movieList} />}
        /> */}
      </Routes>
    </div>
  );
}

export default App;
