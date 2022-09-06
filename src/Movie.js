import React, { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

function Movie() {
  const [Addmovies, setAddMovie] = useState([]);
  const navigate = useNavigate();

  const getMovies = () => {
    fetch("https://61efbd81732d93001778e565.mockapi.io/movies" ,{method: "GET",}) // promise
  .then((data) => data.json()) // Response object
  .then((mvs) => setAddMovie(mvs));
  }

  useEffect(() => getMovies(), []);

  const deleteMovie = (id) => {
    fetch(`https://61efbd81732d93001778e565.mockapi.io/movies/${id}` ,{method: "DELETE",})
    .then(() => getMovies());

  }

  return (
    <div className="movie-list">
      {Addmovies.map(({ poster, name, rating, summary,id }, i) => {
        return (
          <MovieCard
            key={i}
            id={id}
            poster={poster}
            name={name}
            rating={rating}
            summary={summary}
            deleteButton={
              <IconButton
                onClick={ () => deleteMovie(id)}
                color="error"
                aria-label="delete"
                size="large"
              >
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            }
            editButton={
              <IconButton
                onClick={() => {
                  navigate(`/movies/edit/${i}`);
                }}
                color="primary"
                aria-label="delete"
                size="large"
              >
                <EditIcon fontSize="inherit" />
              </IconButton>
            }
          />
        );
      })}
    </div>
  );
}

export default Movie;

/* () => {
  const copyAddMovie = [...Addmovies];
  copyAddMovie.splice(i, 1);
  setAddMovie(copyAddMovie);
} */