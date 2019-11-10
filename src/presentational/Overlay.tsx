import React from 'react'
import { IMovie } from '../interfaces/index'
import { MovieOverlay, MovieDetails, Overview } from '../styledComponents'

interface IOverlayProps {
  movie: IMovie
  className: string
}

const Overlay: React.FC<IOverlayProps> = ({ movie, className }) => {
  return (
    <MovieOverlay className={className}>
      <MovieDetails>
        <Overview>
          <h4>Overview:</h4>
          {movie.overview}
        </Overview>
        <div>
          <h5>Popularity:</h5>
          <span>{movie.popularity}</span>
        </div>
        <div>
          <h5>Release Date:</h5>
          <span>{movie.release_date}</span>
        </div>
      </MovieDetails>
    </MovieOverlay>
  )
}

export default Overlay
