import { useState } from "react";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActions, CardContent } from "@mui/material";
import { LikeDislike } from "./LikeDislike";

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export function MovieCard({ name, poster, rating, summary, key }) {
  const [show, setShow] = useState(true);
  const styles = {
    color: rating > 8.5 ? "green" : "red",
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
      <div className="custom-del-buttons">
        <CardActions>
          <LikeDislike />
        </CardActions>
        <IconButton  aria-label="delete" size="large">
          <DeleteIcon sx={{color:"red"}} fontSize="inherit" />
        </IconButton>
      </div>
      {/* </div> */}
    </Card>
  );
}
