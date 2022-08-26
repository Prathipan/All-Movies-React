import React from "react";
import { MovieCard } from "./MovieCard";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";

function Movie({ Addmovies, setAddMovie }) {
   const navigate = useNavigate();
  return (
    <div className="movie-list">
      {Addmovies.map(({ poster, name, rating, summary }, i) => {
        return (
          <MovieCard
            key={i}
            id={i}
            poster={poster}
            name={name}
            rating={rating}
            summary={summary}
            deleteButton={
              <IconButton
                onClick={() => {
                  const copyAddMovie = [...Addmovies];
                  copyAddMovie.splice(i,1);
                  setAddMovie(copyAddMovie);
                }}
                color="error"
                aria-label="delete"
                size="large"
              >
                <DeleteIcon  fontSize="inherit" />
              </IconButton>
            }
            editButton={
              <IconButton
              onClick={() =>{
                navigate(`/movies/edit/${i}`);
              }}
                color="primary"
                aria-label="delete"
                size="large"
              >
                <EditIcon  fontSize="inherit" />
              </IconButton>
            }
          />
        );
      })}
    </div>
  );
}

export default Movie;
