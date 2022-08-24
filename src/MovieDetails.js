import React from "react";
import { useParams } from "react-router-dom";
import moviesList from "./movieList";

function MovieDetails() {
    const {id} = useParams();
    console.log(id,moviesList[id]);
  const movie = moviesList[id];
  return (
    <div className="movie-detail-container">
      <div className="movie-detail-specs">
        <iframe
          width="1200"
          height="498"
          src={movie.trailer}
          title="RRR Trailer (Tamil) - NTR | Ram Charan | Ajay Devgn | Alia Bhatt | SS Rajamouli | Mar 25th 2022"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h3 className="movie-name">{movie.name} </h3>
        <span
          className="movie-rating"
          style={{ color: movie.rating > 8.5 ? "green" : "red" }}
        >
          ⭐{movie.rating}
        </span>
      </div>
      <p className="summary -de">{movie.summary}</p>
    </div>
  );
}

export default MovieDetails;
