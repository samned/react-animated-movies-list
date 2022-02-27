import React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Filter from './Filter';
import Movie from './Movie';

const MoviesList = ({ movies, generesList }) => {
  const [filtered, setFiltered] = useState([]);
  const [genre, setGenre] = useState(0);

  useEffect(() => {
    if (genre === 0) {
      setFiltered(movies);
      return;
    }
    const filteredMovies = movies.filter((movie) =>
      movie.genre_ids.includes(genre)
    );
    setFiltered(filteredMovies);
  }, [genre, movies]);

  return (
    <div className="content">
      <Filter
        setGenre={setGenre}
        generesList={generesList}
        activeGenre={genre}
      />
      <h3>
        Total Movies {filtered.length} and selected genre{' '}
        {generesList.filter((cgenre) => cgenre === genre)}
      </h3>
      <motion.div layout className="movieList">
        <AnimatePresence>
          {filtered.map((movie) => (
            <Movie movie={movie} key={movie.id} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default MoviesList;
