import React,{ useState, useContext }from 'react';
import {MovieContext} from './MovieContext';
import Movie from './Movie';

const MovieList = () =>{
    const [showCompletedMovies, setShowCompletedMovies] = useState(false);
    const {movies, completedMovies} = useContext(MovieContext);
    return(
        <div>
            <table className="table text-center small">
                <thead>
                    <tr>
                    <th style={{width: "10%"}}>Status</th>
                    <th style={{width: "70%"}}>Name</th>
                    <th style={{width: "15%"}}>Price</th>
                    <th style={{width: "5%"}}>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        movies.map( movie =>(
                        <Movie name = {movie.name} price = {movie.price}
                        id = {movie.id} key = {movie.id} completed = {movie.completed}/>
                        ))
                    }
                    {
                        completedMovies.length > 0? 
                        <>
                        <button className="btn btn-primary" 
                            onClick = {()=> setShowCompletedMovies(!showCompletedMovies)}
                        >{showCompletedMovies? "Hide": "Show"}</button>
                
                        {
                            showCompletedMovies? 
                                completedMovies.map( movie =>(
                                    <Movie name = {movie.name} price = {movie.price}
                                id = {movie.id} key = {movie.id} completed = {movie.completed}/>
                                ))
                            : ''
                        }
                        </>: ''
                    }
                </tbody>
            </table>
        </div>
    )
}
export default MovieList;