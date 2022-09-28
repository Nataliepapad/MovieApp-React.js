import React, {useEffect, useState} from 'react';
import { FaStar } from 'react-icons/fa';
import {motion} from 'framer-motion';

const durationTimeItem = 0.5;
const durationTimeImage = 2;
const delayTime = 1;


function MovieCard (props) {
let isShownMovie = new Array(props.movies.length).fill(false);

const [isShown, setIsShownMovie] = useState(isShownMovie);

const movieDetails = i => {
    setIsShownMovie(oldArray => {
        return [
            ...oldArray.slice(0, i),
            !oldArray[i],
            ...oldArray.slice(i+1),
        ]
    })
};
    return (
        <>
            {props.movies.map((movie, i) => 
            <motion.div key={movie.id}
                initial={{opacity: 0, translateX: i % 1 === 0 ? -50 : 50}}
                animate={{opacity: 1, translateX: 0}}
                transition={{duration: durationTimeItem, delay: i * delayTime + durationTimeImage}} >
                <button className='list-item' onClick={()=>{movieDetails(i)}}>
                    <motion.img className='movie-img' 
                        src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path? movie.poster_path : movie.backdrop_path}`} 
                        alt={movie.original_title}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: durationTimeImage, delay: i * delayTime + durationTimeImage + durationTimeItem}} >
                    </motion.img>
                    <span className='movie-average'>{movie.vote_average? movie.vote_average : "-"} <FaStar/></span>
                    <h3 className='movie-title'>{movie.title}</h3>
                    <motion.span className='movie-releasedate'
                          initial={{opacity: 0}}
                          animate={{opacity: 1}}
                          transition={{duration: durationTimeItem + 0.5, delay: props.movies.length * delayTime + durationTimeImage}}>
                            Release Date: {movie.release_date ? movie.release_date.substring(0,10) : "-"}
                    </motion.span> 
                    {isShown[i] && 
                        (<div className='movie-details'>    
                            <h1 className='movie-originalTitle'>Original title: {movie.original_title}</h1>
                            <h3 className='movie-overview'>{movie.overview}</h3>
                            </div>
                    )}              
                </button>
                <movieDetails/>
            </motion.div>)}
        </>
        
    );
}

export default MovieCard;