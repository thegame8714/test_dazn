import React from 'react'
import { IMovie } from '../interfaces/'
import styled from 'styled-components'

interface IMovieListProps {
  list: IMovie[]
}

const Article = styled.article`
  max-width: 300px;
  padding: 10px 15px;
`

const Poster = styled.img`
  width: 100%;
`

const MovieList: React.FC<IMovieListProps> = ({ list }) => (
  <>
    {list.map(movie => (
      <Article key={movie.id} data-testid={`movie-${movie.id}`}>
        <div>
          <Poster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <div></div>
          <h3>{movie.original_title}</h3>
        </div>
      </Article>
    ))}
  </>
)

export default MovieList
