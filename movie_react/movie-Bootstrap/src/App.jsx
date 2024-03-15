import { useState } from "react";
import "./App.css";
import { AddColor } from "./Components/MovieComponents/AddColor";
import { movie } from "./utilis_movie/constant";
import AddMovie from "./Components/MovieComponents/AddMovie";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { Navigate } from "react-router-dom";
import MovieDetails from "./Components/MovieComponents/movieDetails";
import UseContextMainParent01 from "./Components/useContext_WithoutProvider/UseContextMainParent01";
import MainParent01 from "./Components/PropDrilling/MainParent01";
import cartContext from "./utilis_movie/cartContext";
import MovieList from "./Components/MovieComponents/MovieList";

function App() {
  const [movieList, setMovieList] = useState(movie);
  const [cartUCtxt, setcartUCtxt] = useState(0);

  return (
    <cartContext.Provider value={[cartUCtxt, setcartUCtxt]}>
      <div>
        <br />

        <Navbar />

        <Routes>
          <Route path="/" element={<MovieList movieList={movieList} />} />
          {/* <Route path="/" element={<MiuiTest movieList={movieList} />} /> */}
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
          <Route
            path="/newmovie"
            element={<Navigate replace to="/addmovie" />}
          />

          {/* task 4:  */}
          {/* <Route path='/404' element={<NotFound/>}/> */}
          {/* "*" */}

          {/* Navigation > 404 */}
          {/* 
        old path ='*'
        new path ='/404'
        */}
          {/* <Route path='*' element={<Navigate replace to='/404'/>}/> */}

          <Route
            path="/movies/:id"
            element={<MovieDetails movieList={movieList} />}
          />
          <Route path="/propsdrilling" element={<MainParent01 />} />
          <Route path="/usecontext" element={<UseContextMainParent01 />} />
        </Routes>
      </div>
    </cartContext.Provider>
  );
}

export default App;
