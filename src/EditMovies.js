import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "./global";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function EditForm() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`${API}/${id}`, { method: "GET" }) // promise
      .then((data) => data.json()) // Response object
      .then((mv) => setMovie(mv));
  }, []);
  // console.log(movie)

  // const movie = Addmovies[id];
  //   console.log(movie);

  return (
    <>
      {movie ? (
        <EditFunction movie={movie} />
      ) : (
        <Box sx={{ display: "flex" , justifyContent : "center" }}>
          <CircularProgress />
        </Box>
      )}
    </>
  );
}

const EditFunction = ({ movie }) => {
  const navigate = useNavigate();
  const [name, setName] = useState(movie.name);
  const [rating, setRating] = useState(movie.rating);
  const [poster, setPoster] = useState(movie.poster);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);

  const handleUpdate = () => {
    const updatedMovie = {
      name: name,
      rating: rating,
      poster: poster,
      summary: summary,
      trailer: trailer,
    };
    fetch(`${API}/${movie.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedMovie),
      headers: {
        "content-type": "application/json",
      },
    }).then(navigate("/movies"));
    // const copyMovie = [...Addmovies];
    // copyMovie[id] = updatedMovie;
    //  console.log("Edited movie : " ,copyMovie[id]);
    // setAddMovie(copyMovie);
  };

  return (
    <div className="formGroup">
      <TextField
        value={name}
        label="Enter the name"
        variant="outlined"
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        value={rating}
        label="Enter the rating"
        variant="outlined"
        onChange={(e) => setRating(e.target.value)}
      />
      <TextField
        value={poster}
        label="Enter the poster link"
        variant="outlined"
        onChange={(e) => setPoster(e.target.value)}
      />
      <TextField
        value={summary}
        label="Enter the summary"
        variant="outlined"
        onChange={(e) => setSummary(e.target.value)}
      />
      <TextField
        value={trailer}
        label="Enter the trailer"
        variant="outlined"
        onChange={(e) => setTrailer(e.target.value)}
      />
      <Button variant="contained" onClick={handleUpdate}>
        Update
      </Button>
    </div>
  );
};

export default EditForm;
