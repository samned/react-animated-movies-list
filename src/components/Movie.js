import React from 'react';
import { motion } from 'framer-motion';

function Movie({ movie }) {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <div class="card">
        <div class="card-header">
          <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} />
        </div>
        <div class="card-content">
          <h3>{movie.title}</h3>
          <h4>{movie.vote_average} </h4>
          <p>{movie.overview}</p>
        </div>
      </div>
    </motion.div>
    // <motion.div
    //   layout
    //   animate={{ opacity: 1 }}
    //   initial={{ opacity: 0 }}
    //   exit={{ opacity: 0 }}
    // >
    //   <h2>{movie.title}</h2>
    //   <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} />
    // </motion.div>
  );
}

export default Movie;
