import { useState } from "react";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActions, CardContent } from "@mui/material";
import { LikeDislike } from "./LikeDislike";
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from "react-router-dom";


export function MovieCard({ name, poster, rating, summary,id, deleteButton, editButton}) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const styles = {
    color: rating > 8.5 ? "green" : "red"
  };

  return (
    <Card className="movie-container">
      {/* <div className="movie-container"> */}
      <CardMedia
        component="img"
        className="movie-poster"
        src={poster}
        alt={name}
      />
      <CardContent>
        <div className="movie-specs">
          <h3 className="movie-name">
            {name}
            <Button onClick={() => setShow(!show)}>
              {show ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </Button> 
            <Button>
              <InfoIcon onClick={() => navigate(`/movies/${id}`)}/>
            </Button>
          </h3>
          <span className="movie-rating" style={styles}>
            ⭐{rating}
          </span>
        </div>
      </CardContent>
      {/* <Button variant="contained" onClick={() => setShow(!show)}>
              Toggle Description
            </Button> */}
      {show ? <p className="movie-summary">{summary}</p> : ""}
      <div className="custom-buttons">
        <CardActions>
          <LikeDislike /> 
        </CardActions>
        <div>
        {editButton}
        {deleteButton}
        </div>
      </div>
      {/* </div> */}
    </Card>
  );
}
