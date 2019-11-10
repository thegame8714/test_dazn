import React, { useState, useEffect } from 'react'
import MovieList from './presentational/MovieList'
import { IMovie } from './interfaces/'
import styled from 'styled-components'
import './App.css'

const Main = styled.main`
  background-color: black;
  display: flex;
  color: grey;
  flex-direction: column;
  height: 100%;
  margin: 0;
  width: 100%;
  padding: 10px;
  font-family: 'Helvetica', 'Arial', sans-serif;
`

const Header = styled.header`
  text-transform: uppercase;
  padding: 10px;
`

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  &:after {
    content: '';
    flex-basis: calc(20% - 30px);
  }
`

const Label = styled.label`
  color: white;
  margin-right: 10px;
`

const SearchField = styled.input`
  color: white;
  font-size: 16px;
  background-color: black;
  border: 0;
  border-bottom: 1px solid grey;
  width: 20%;

  &:focus {
    outline-color: white;
  }
`

const App: React.FC<{}> = () => {
  const [movieList, setMovieList] = useState<IMovie[]>([])
  const MOVIE_DB_API_KEY = 'c8a4120a7f2b3927e5e6a9bb8c97eb05'
  const getMovieList = async (movieQuery: string = '') => {
    var apiPartialLink = `/discover/movie?api_key=${MOVIE_DB_API_KEY}`
    if (movieQuery) {
      apiPartialLink = `/search/movie/?api_key=${MOVIE_DB_API_KEY}&query=${movieQuery}`
    }
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3${apiPartialLink}`
      )
      const movies = (await response.json()).results as IMovie[]
      setMovieList(movies)
    } catch (err) {
      setMovieList([])
    }
  }

  useEffect(() => {
    getMovieList()
  }, [])

  const getMovieQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 2) {
      getMovieList(e.target.value)
    } else {
      getMovieList()
    }
  }

  return (
    <Main>
      <Header>
        <Label htmlFor="searchMovie">Search Movie:</Label>
        <SearchField
          id="searchMovie"
          data-testid="searchMovie"
          type="text"
          onChange={getMovieQuery}
        />
      </Header>
      <Section>
        <MovieList list={movieList} />
      </Section>
    </Main>
  )
}

export default App
