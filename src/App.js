import { useState } from "react";
import "./App.css";
import { Routes, Route , Link} from "react-router-dom";
import { AddColor } from "./AddColor";

import AddForm from "./AddForm";
import moviesList from "./movieList";
import Movie from "./Movie";
import TicTacToe from "./TicTacToe";
import MovieDetails from "./MovieDetails";

function App() {
  const [Addmovies, setAddMovie] = useState(moviesList);

  return (
    <>
    <div className="nav-bar">
      <ul className="nav-list">
        <li>
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li>
          <Link className="nav-link" to="/movies">All Movies</Link>
        </li>
        <li>
          <Link className="nav-link" to="/add-movies">Add Movies</Link>
        </li>
        <li>
          <Link className="nav-link" to="/colorgame">color-game</Link>
        </li>
        <li>
          <Link className="nav-link" to="/tictactoe">Tic Tac Toe</Link>
        </li>
      </ul>
    </div>
    
     <Routes>
      <Route exact path="/" element={<Msg />} />
      <Route path="/add-movies" element={<AddForm Addmovies={Addmovies}  setAddMovie={setAddMovie}/>} />
      <Route path="/movies" element={<Movie Addmovies={Addmovies} setAddMovie={setAddMovie}/>} />
      <Route path="/movies/:id" element={<MovieDetails />} />
      <Route path="/colorgame" element={<AddColor />} />
      <Route path="/tictactoe" element={<TicTacToe />} />
      <Route path="**">
        404 not found
      </Route>
     </Routes>

      {/* <div>
        <AddColor />
      </div> */}
    </>
  );
}

function Msg() {
  return <h1>Welcome to Dashboard 😁🎉</h1>
}

export default App;
