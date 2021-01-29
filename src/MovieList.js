import React,{ useState, useContext }from 'react';
import {MovieContext} from './MovieContext';
import Movie from './Movie';

const MovieList = () =>{
    const [showCompletedMovies, setShowCompletedMovies] = useState(false);
    const {movies, completedMovies} = useContext(MovieContext);
    return(
        <div>
            {   
                movies.length > 0? 
                movies.map( movie =>(
                    <Movie name = {movie.name} price = {movie.price}
                    id = {movie.id} key = {movie.id} completed = {movie.completed}
                    />
                ))
                : completedMovies.length > 0? '':<p className="d-flex justify-content-center my-10">No movies</p>
            }
            {
                completedMovies.length > 0? 
                <>
                <div className="d-flex justify-content-center my-10">
                    <button className="btn btn-success"
                    onClick = {()=> setShowCompletedMovies(!showCompletedMovies)}
                    >{showCompletedMovies? "Hide": "Show "} completed</button>
                </div>
                {
                    showCompletedMovies? 
                        completedMovies.map( movie =>(
                            <Movie name = {movie.name} price = {movie.price}
                            id = {movie.id} key = {movie.id} completed = {movie.completed}
                            />
                        ))
                    : ''
                }
                </>: ''
            }      
        </div>
    )
}
export default MovieList;