import React from 'react'
import { IMovie } from '../interfaces/'
import { Article, Poster } from '../styledComponents'
import Overlay from './Overlay'

interface IMovieListProps {
  list: IMovie[]
}

const MovieList: React.FC<IMovieListProps> = ({ list }) => (
  <>
    {list.map(movie => (
      <Article key={movie.id} data-testid={`movie-${movie.id}`}>
        <div className="inner">
          <Poster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <Overlay className="overlay" movie={movie} />
        </div>
        <h3>{movie.original_title}</h3>
      </Article>
    ))}
  </>
)

export default MovieList
