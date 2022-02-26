import { useEffect, useState } from 'react';
import React from 'react';
import MoviesList from './components/MoviesList';
import './style.css';

export default function App() {
  const API_KEY = '7e3136abffd28983d45caabfbd987726';
  const [popular, setPopular] = useState([]);
  const [genresList, setGenresList] = useState([]);

  useEffect(() => {
    fetchPopular();
    fetcGenres();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(`
    https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`);
    const movies = await data.json();
    setPopular(movies.results);
  };

  const fetcGenres = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
    );
    const genres = await data.json();
    setGenresList(genres.genres);
  };

  return (
    <div>
      <MoviesList movies={popular} generesList={genresList} />
    </div>
  );
}
