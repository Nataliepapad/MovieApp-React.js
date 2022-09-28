import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import MovieCard from './MovieCard';
import SearchBox from './Search';

function Home() {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState('');

  const fetchMovieList = async (searchMovie) =>
  {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=b61646f0d11252f001fbb086a2e6abf5&query=${searchMovie}`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.results){
      setMovies(responseJson.results);
    }
  }

  useEffect(() => {
    async function fetchData() {
      fetchMovieList(searchMovie)
    }
    fetchData();
  }, [searchMovie]);

  return (
    <>
      <div className='movie-Search'>
          <SearchBox searchMovie={searchMovie} setSearchMovie={setSearchMovie}/>          
      </div>
      <div className='movie-List'>
        <MovieCard movies = {movies} />
      </div>
    </>
  );
}

export default Home;
