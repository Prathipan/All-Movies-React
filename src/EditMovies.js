import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate, useParams } from "react-router-dom";

function EditForm({ Addmovies, setAddMovie }) {
  const { id } = useParams();
  const movie = Addmovies[id];
//   console.log(movie);
  const navigate = useNavigate();
  const [name, setName] = useState(movie.name);
  const [rating, setRating] = useState(movie.rating);
  const [poster, setPoster] = useState(movie.poster);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);

  const handleSubmit = () => {
    const updatedMovie = {
      name: name,
      rating: rating,
      poster: poster,
      summary: summary,
      trailer: trailer,
    };
    const copyMovie = [...Addmovies];
    copyMovie[id] = updatedMovie;
     console.log("Edited movie : " ,copyMovie[id]);
    setAddMovie(copyMovie);
    navigate("/movies");
  };
  return (
    <>
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
        <Button variant="contained" onClick={handleSubmit}>
          Update
        </Button>
      </div>
    </>
  );
}

export default EditForm;
