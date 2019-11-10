import styled from 'styled-components'

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
  height: 100%;
`

const Loading = styled.div`
  font-size: 24px;
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

const Button = styled.button`
  background-color: black;
  color: white;
  border: 1px solid grey;
  border-radius: 5%;
  font-size: 16px;
  margin-left: 10px;
`

const MovieOverlay = styled.div`
  & {
    display: inline;
    position: absolute;
    color: black;
    height: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    transition: 0.5s ease;
    right: 0;
    ackground: rgb(255, 255, 255);
    background: linear-gradient(
      0deg,
      transparent 0%,
      rgba(255, 255, 255, 1) 80%
    );
  }
`

const MovieDetails = styled.div`
  margin-bottom: 60%;
  padding: 10px;
  font-size: 12px;

  & h5 {
    display: inline;
    margin: 5px 0;
  }
`

const Overview = styled.div`
  margin-bottom: 10px;
  & h4 {
    margin: 5px 0;
  }
`

const Article = styled.article`
  max-width: 300px;
  padding: 10px 15px;
  overflow: hidden;

  .inner {
    position: relative;
    &:hover {
      .overlay {
        height: 100%;
      }
    }
  }
`

const Poster = styled.img`
  width: 100%;
`

export {
  Main,
  Header,
  Section,
  Loading,
  Label,
  SearchField,
  Button,
  MovieOverlay,
  MovieDetails,
  Overview,
  Article,
  Poster
}
