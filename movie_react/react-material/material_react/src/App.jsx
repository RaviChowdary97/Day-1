import { useState } from "react";
import "./App.css";
import { AddColor } from "./Components/AddColor";

import { movie } from "./utilis/constant";
import AddMovie from "./Components/AddMovie";
import MovieList from "./Components/MovieList";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { NotFound } from "./Components/NotFound";
import { MovieDetails } from "./Components/movieDetails";

function App() {
  const [movieList, setMovieList] = useState(movie);
  return (
    <div className="App">
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
        <Route path="/404" element={<NotFound />} />

        {/* old url to new url */}
        <Route path="/newmovie" element={<Navigate replace to="/addmovie" />} />
        {/* <Route path="*" element={<Navigate replace to="/404" />} /> */}
        <Route
          path="/movies/:id"
          element={<MovieDetails movieList={movieList} />}
        />
      </Routes>
    </div>
  );
}

export default App;

//App.jsx:78 Warning: Each child in a list should have a unique "key" prop.

// Check the render method of `App`. See https://reactjs.org/link/warning-keys for more information.
// at MovieCard (http://localhost:5173/src/Components/MovieCard.jsx?t=1709793802060:20:29)
// at App
