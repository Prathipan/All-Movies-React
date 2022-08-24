import React from 'react'
import {MovieCard} from './MovieCard'

function Movie({Addmovies}) {
  return (
    <div className="movie-list">
        {Addmovies.map(({ poster, name, rating, summary }, i) => {
          return (
            <MovieCard
              key={i}
              poster={poster}
              name={name}
              rating={rating}
              summary={summary}
            />
          );
        })}
      </div>
  )
}

export default Movie