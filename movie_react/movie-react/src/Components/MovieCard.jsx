import { useState } from "react";
import { Counter } from "./Counter";

export const MovieCard = ({ name, poster, rating, summary }) => {
  //inline css in react => object form
  //style ={{}}

  //conditional style
  // const ratingStyle = {
  //   backgroundColor: "black",
  //   color: rating > 8 ? "yellow" : "red",
  // };
  const [show, setShow] = useState(true);

  // const toggleSummary = {
  //   display: show ? "block" : "none",
  // };
  return (
    <>
      <div className="movieContainer">
        <img src={poster} alt="" className="moviePoster" />

        <div className="movieSpecs">
          <h4
            className="movieName"
            style={{ color: "green", backgroundColor: "yellow" }}
          >
            {name}
          </h4>
          <button onClick={() => setShow(!show)}>{show ? "🔽" : "🔽"}</button>

          <h4 className="movieRating">{rating}</h4>
        </div>
        {/* conditional rendering */}
        {show && <p className="movieSummary">{summary}</p>}
        {/* {show ? <p className="movieSummary">{summary}</p> : null} */}
        {/* <p className="movieSuumary" style={toggleSummary}>
          {summary}
        </p> */}

        {/* Like  Dilike button */}
        <Counter />
      </div>
    </>
  );
};

// Conditoinal Rendering:
// {true:display
//  false:dont display
// }
