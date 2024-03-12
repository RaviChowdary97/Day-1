import { Navigate, useParams } from "react-router-dom";
import MovieList from "./MovieList";
import { movie } from "../utilis/constant";
export const MovieDetails = ({ movieList }) => {
  const { id } = useParams();
  console.log("id id ", id);
  console.log(MovieList[id]);
  //array of objects
  // movie[0].movieList[0];
  const movie = movieList[id];
  return (
    <>
      <div>MovieDetails</div>
      <h1>{movie.name}</h1>

      {/* trailer */}
      <iframe
        width="1345"
        height="480"
        src={movie.trailer}
        title="RRR Trailer (Telugu) - NTR, Ram Charan, Ajay Devgn, Alia Bhatt | SS Rajamouli | 25th March 2022"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <h5>{movie.summary}</h5>
      <button
        className="btn btn-primary mb-3 px-5"
        onClick={() => {
          Navigate(-1);
        }}
      >
        Back to Home
      </button>
    </>
  );
};
