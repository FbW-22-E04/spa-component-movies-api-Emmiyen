import React, { useState, useEffect } from "react";

function MovieCard(props) {
  const [movieData, setMovieData] = useState({});
  const getMovieData = async () => {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=your-api-key&i=${props.id}`
    );
    const data = await response.json();   
    setMovieData(data);
  };
  useEffect(() => {
    getMovieData();
  }, []);
  
  return (
    <div className="card">
      <h2>{movieData.Title}</h2>
      <h2>{movieData.Year}</h2>
      <h2>Rating: {movieData.imdbRating}/10</h2>
      <p>{movieData.Plot}</p>
      <img alt={movieData.Title} src={movieData.Poster} />
    </div>
  );
}

export default MovieCard;
