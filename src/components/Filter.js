import React from 'react';

const Filter = ({ setGenre, generesList, activeGenre }) => {
  return (
    <div className="genres">
      <button className="button" onClick={() => setGenre(0)}>
        All
      </button>
      {generesList.map((genre) => (
        <button
          className={activeGenre === genre.id ? 'active-button' : 'button'}
          onClick={() => setGenre(genre.id)}
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
};

export default Filter;
