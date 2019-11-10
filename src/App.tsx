import React, { useState, useEffect, ChangeEvent } from 'react'
import MovieList from './presentational/MovieList'
import { IMovie } from './interfaces/'
import {
  Main,
  Header,
  Section,
  Loading,
  Label,
  SearchField,
  Button
} from './styledComponents/'

const App: React.FC<{}> = () => {
  const [movieList, setMovieList] = useState<IMovie[]>([])
  const [searchText, setSearchText] = useState<string>('')
  const [isLoading, setisLoading] = useState<boolean>(false)
  const MOVIE_DB_API_KEY = 'c8a4120a7f2b3927e5e6a9bb8c97eb05'
  const getMovieList = async (movieQuery: string = '') => {
    var apiPartialLink = `/discover/movie?api_key=${MOVIE_DB_API_KEY}`
    if (movieQuery) {
      apiPartialLink = `/search/movie/?api_key=${MOVIE_DB_API_KEY}&query=${movieQuery}`
    }
    setisLoading(true)
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3${apiPartialLink}`
      )
      const movies = (await response.json()).results as IMovie[]
      setMovieList(movies)
    } catch (err) {
      setMovieList([])
    }
    setisLoading(false)
  }

  useEffect(() => {
    getMovieList()
  }, [])

  const getMovieQuery = () => {
    getMovieList(searchText)
  }

  return (
    <Main>
      <Header>
        <Label htmlFor="searchMovie">Search Movie:</Label>
        <SearchField
          id="searchMovie"
          data-testid="searchMovie"
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearchText(e.target.value)
          }
        />
        <Button onClick={getMovieQuery} data-testid="getMovie">
          Go
        </Button>
      </Header>
      <Section>
        {isLoading ? (
          <Loading>Loading movies...</Loading>
        ) : (
          <MovieList list={movieList} />
        )}
      </Section>
    </Main>
  )
}

export default App
