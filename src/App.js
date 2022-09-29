import { useState } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import AddForm from "./AddForm";

import Grid from "@mui/material/Grid";
import Movie from "./Movie";
import MovieDetails from "./MovieDetails";
import EditMovies from "./EditMovies";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

function App() {
  // const [Addmovies, setAddMovie] = useState(moviesList);
  const [mode, setMode] = useState("dark");
  const navigate = useNavigate();

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={5} style={{ borderRadius: "0px", minHeight: "100vh" }}>
        <AppBar position="static">
          <Toolbar>
            <Button
              onClick={() => {
                navigate("/");
              }}
              color="inherit"
            >
              Home
            </Button>
            <Button
              onClick={() => {
                navigate("/movies");
              }}
              color="inherit"
            >
              All Movies
            </Button>
            <Button
              onClick={() => {
                navigate("/add-movies");
              }}
              color="inherit"
            >
              Add Movies
            </Button>
            <Button
              style={{ marginLeft: "auto" }}
              startIcon={
                mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
              }
              onClick={() => {
                setMode(mode === "light" ? "dark" : "light");
              }}
              color="inherit"
            >
              {mode === "light" ? "dark" : "light"} mode
            </Button>
          </Toolbar>
        </AppBar>

        <Routes>
          <Route exact path="/" element={<Msg />} />
          <Route path="/add-movies" element={<AddForm />} />
          <Route path="/movies" element={<Movie />} />
          <Route path="movies/edit/:id" element={<EditMovies />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="**">404 not found</Route>
        </Routes>

        {/* <div>
        <AddColor />
      </div> */}
      </Paper>
    </ThemeProvider>
  );
}

function Msg() {
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <div className="container">
          <h1>Welcome to Movies App 😁🎉</h1>
          <div className="card">
            <h2>All Movies Section</h2>
            <ul>
              <li>
                We can have list of movies with the description with IMDB rating
                .
              </li>
              <li> i button shows the trailer and description of the movie.</li>
              <li>We can like and dislike the movies here.</li>
              <li>
                If we found some typos , we can correct by clicking the pen icon
              </li>
              <li>If we don't want that movie we can delete that</li>
            </ul>
          </div>
          <div className="card">
            <h2>Add Movies Section</h2>
            <ul>
              <li>If we want to add movies to the list we can add them</li>
              <li>
                We need to enter all details over there , If not it will show
                error
              </li>
              <li>Rating must be 0-10</li>
            </ul>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default App;
