import React,{ useState } from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function AddForm({Addmovies , setAddMovie}) {
    const [name, setName] = useState();
  const [rating, setRating] = useState();
  const [poster, setPoster] = useState();
  const [summary, setSummary] = useState();

    const handleSubmit = () => {
        const movie = {
          name: name,
          rating: rating,
          poster: poster,
          summary: summary,
        };
        //  console.log(movie);
        setAddMovie([...Addmovies, movie]);
      };
  return (
    <>
    <div className="formGroup">
        <TextField
          label="Enter the name"
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Enter the rating"
          variant="outlined"
          onChange={(e) => setRating(e.target.value)}
        />
        <TextField
          label="Enter the poster link"
          variant="outlined"
          onChange={(e) => setPoster(e.target.value)}
        />
        <TextField
          label="Enter the summary"
          variant="outlined"
          onChange={(e) => setSummary(e.target.value)}
        />
        <Button variant="contained" onClick={handleSubmit}>
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
      </div>
       </>
  )
}

export default AddForm