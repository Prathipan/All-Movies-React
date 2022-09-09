import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "./global";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useFormik } from 'formik'
import * as yup from 'yup'

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
  // const [name, setName] = useState(movie.name);
  // const [rating, setRating] = useState(movie.rating);
  // const [poster, setPoster] = useState(movie.poster);
  // const [summary, setSummary] = useState(movie.summary);
  // const [trailer, setTrailer] = useState(movie.trailer);

  const movieValidationSchema = yup.object({
    name : yup.string().required("*Name field is mandatory").min(3),
    rating: yup.number().required("*Rating is mandatory").min(1).max(10),
    poster: yup.string().required("*Poster field is mandatory").min(5),
    summary: yup.string().required("*Summary  is mandatory").min(5),
    trailer : yup.string().required("*Trailer field is mandatory").min(5)
  })

  const formik = useFormik({
    initialValues : {
      name : movie.name,
      rating : movie.rating,
      poster : movie.poster,
      summary : movie.summary,
      trailer : movie.trailer
    },
    validationSchema : movieValidationSchema ,
    onSubmit : (updatedMovie) => {
      // console.log("onSubmit : " , newMovie);
      fetch(`${API}/${movie.id}`, {
            method: "PUT",
            body: JSON.stringify(updatedMovie),
            headers: {
              "content-type": "application/json",
            },
          }).then(navigate("/movies"));
    }
  })


  // const handleUpdate = () => {
  //   const updatedMovie = {
  //     name: name,
  //     rating: rating,
  //     poster: poster,
  //     summary: summary,
  //     trailer: trailer,
  //   };
  //   fetch(`${API}/${movie.id}`, {
  //     method: "PUT",
  //     body: JSON.stringify(updatedMovie),
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //   }).then(navigate("/movies"));
    // const copyMovie = [...Addmovies];
    // copyMovie[id] = updatedMovie;
    //  console.log("Edited movie : " ,copyMovie[id]);
    // setAddMovie(copyMovie);
  // };

  return (
    <form className="formGroup" onSubmit={formik.handleSubmit}>
      <TextField
        value={formik.values.name}
        label="Enter the name"
        variant="outlined"
        id="name"
        name="name"
        onChange={formik.handleChange}
        onBlur = {formik.handleBlur}
        error = {formik.touched.name && formik.errors.name }
        helperText={formik.touched.name && formik.errors.name ? formik.errors.name : ""}
      />
      <TextField
        value={formik.values.rating}
        label="Enter the rating"
        variant="outlined"
        id="rating"
        name="rating"
        onChange={formik.handleChange}
        onBlur = {formik.handleBlur}
        error = {formik.touched.rating && formik.errors.rating }
        helperText={formik.touched.rating && formik.errors.rating ? formik.errors.rating : ""}
      />
      <TextField
        value={formik.values.poster}
        label="Enter the poster link"
        variant="outlined"
        id="poster"
        name="poster"
        onChange={formik.handleChange}
        onBlur = {formik.handleBlur}
        error = {formik.touched.poster && formik.errors.poster }
        helperText={formik.touched.poster && formik.errors.poster ? formik.errors.poster : ""}
      />
      <TextField
        value={formik.values.summary}
        label="Enter the summary"
        variant="outlined"
        id="summary"
        name="summary"
        onChange={formik.handleChange}
        onBlur = {formik.handleBlur}
        error = {formik.touched.summary && formik.errors.summary }
        helperText={formik.touched.summary && formik.errors.summary ? formik.errors.summary : ""}
      />
      <TextField
        value={formik.values.trailer}
        label="Enter the trailer"
        variant="outlined"
        id="trailer"
        name="trailer"
        onChange={formik.handleChange}
        onBlur = {formik.handleBlur}
        error = {formik.touched.trailer && formik.errors.trailer }
          helperText={formik.touched.trailer && formik.errors.trailer ? formik.errors.trailer : ""}
      />
      <Button variant="contained" type="submit">
        Update
      </Button>
    </form>
  );
};

export default EditForm;
