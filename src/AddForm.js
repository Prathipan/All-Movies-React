import React from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from 'react-router-dom';
import { API } from './global';
import { useFormik } from 'formik'
import * as yup from 'yup'

function AddForm() {
    const navigate = useNavigate();
  //   const [name, setName] = useState();
  // const [rating, setRating] = useState();
  // const [poster, setPoster] = useState();
  // const [summary, setSummary] = useState();
  // const [trailer, setTrailer] = useState();

  const movieValidationSchema = yup.object({
    name : yup.string().required("*Name field is mandatory").min(3),
    rating: yup.number().required("*Rating is mandatory").min(1).max(10),
    poster: yup.string().required("*Poster field is mandatory").min(5),
    summary: yup.string().required("*Summary  is mandatory").min(5),
    trailer : yup.string().required("*Trailer field is mandatory").min(5)
  })


  const formik = useFormik({
    initialValues : {
      name : "",
      rating : "",
      poster : "",
      summary : "",
      trailer : ""
    },
    validationSchema : movieValidationSchema ,
    onSubmit : (newMovie) => {
      // console.log("onSubmit : " , newMovie);
      fetch(`${API}`,{
              method : "POST",
              body : JSON.stringify(newMovie),
              headers : {
                "Content-Type": "application/json"
              }
            }).then(() => navigate("/movies"));
    }
  })

    // const addMovie = () => {
    //     const newMovie = {
    //       name: name,
    //       rating: rating,
    //       poster: poster,
    //       summary: summary,
    //       trailer: trailer
    //     };
    //     fetch(`${API}`,{
    //       method : "POST",
    //       body : JSON.stringify(newMovie),
    //       headers : {
    //         "Content-Type": "application/json"
    //       }
    //     }).then(() => navigate("/movies"));
    //     //  console.log(movie);
    //     // setAddMovie([...Addmovies, movie]);
    //   };
  return (
    <>
    <form onSubmit={formik.handleSubmit} className="formGroup">
        <TextField
          label="Enter the name"
          variant="outlined"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error = {formik.touched.name && formik.errors.name }
          helperText={formik.touched.name && formik.errors.name ? formik.errors.name : ""}
        />
        {/* {formik.touched.name && formik.errors.name ? formik.errors.name : ""} */}
        <TextField
          label="Enter the rating"
          variant="outlined"
          id="rating"
          name="rating"
          value={formik.values.rating}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error = {formik.touched.rating && formik.errors.rating }
          helperText={formik.touched.rating && formik.errors.rating ? formik.errors.rating : ""}
        />
        {/* {formik.touched.rating && formik.errors.rating ? formik.errors.rating : ""} */}
        <TextField
          label="Enter the poster link"
          variant="outlined"
          id="poster"
          name="poster"
          value={formik.values.poster}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error = {formik.touched.poster && formik.errors.poster}
          helperText={formik.touched.poster && formik.errors.name ? formik.errors.poster : ""}
        />
        {/* {formik.touched.poster && formik.errors.poster ? formik.errors.poster : ""} */}
        <TextField
          label="Enter the summary"
          variant="outlined"
          id="summary"
          name="summary"
          value={formik.values.summary}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error = {formik.touched.summary && formik.errors.summary}
          helperText={formik.touched.summary && formik.errors.summary ? formik.errors.summary : ""}
        />
        {/* {formik.touched.summary && formik.errors.summary ? formik.errors.summary : ""} */}
        <TextField
          label="Enter the trailer"
          variant="outlined"
          id="trailer"
          name="trailer"
          value={formik.values.trailer}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error = {formik.touched.trailer && formik.errors.trailer}
          helperText={formik.touched.trailer && formik.errors.trailer ? formik.errors.trailer : ""}
        />
        {/* {formik.touched.trailer && formik.errors.trailer ? formik.errors.trailer : ""} */}
        <Button variant="contained" type="submit">
          Add Movie
        </Button>
        {/*<input className="inputBox" type="text" placeholder="Enter the name" onChange={(e)=> setName(e.target.value)}/>
        <input className="inputBox" type="text" placeholder="Enter the rating" onChange={(e)=> setRating(e.target.value)}/>
        <input className="inputBox" type="text" placeholder="Enter the poster link" onChange={(e)=> setPoster(e.target.value)}/>
        <input className="inputBox" type="text" placeholder="Enter the summary" onChange={(e)=> setSummary(e.target.value)}/>
        <div>
          <button className="btn" onClick={handleSubmit}>
            Add Movie
          </button>
        </div>*/}
      </form>
       </>
  )
}

export default AddForm