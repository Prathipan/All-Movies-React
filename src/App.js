import { useState } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { AddColor } from "./AddColor";

import AddForm from "./AddForm";
import moviesList from "./movieList";
import Movie from "./Movie";
import TicTacToe from "./TicTacToe";
import MovieDetails from "./MovieDetails";
import EditMovies from "./EditMovies";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function App() {
  const [Addmovies, setAddMovie] = useState(moviesList);
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
              onClick={() => {
                navigate("/colorgame");
              }}
              color="inherit"
            >
              color-game
            </Button>
            <Button
              onClick={() => {
                navigate("/tictactoe");
              }}
              color="inherit"
            >
              Tic Tac Toe
            </Button>
            <Button
              style={{marginLeft : "auto"}}
              startIcon = {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
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
          <Route
            path="/add-movies"
            element={
              <AddForm  />
            }
          />
          <Route
            path="/movies"
            element={<Movie  />}
          />
          <Route
            path="movies/edit/:id"
            element={
              <EditMovies  />
            }
          />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/colorgame" element={<AddColor />} />
          <Route path="/tictactoe" element={<TicTacToe />} />
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
  return <h1>Welcome to Dashboard 😁🎉</h1>;
}

export default App;
