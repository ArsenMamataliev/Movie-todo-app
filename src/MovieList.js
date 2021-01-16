import React,{ useContext }from 'react';
import {MovieContext} from './MovieContext';
import Movie from './Movie';

const MovieList = () =>{
    const {movies} = useContext(MovieContext);
    return(
        movies.length > 0 ? 
        <div>
            <table className="table table-bordered table-dark text-center">
            <thead>
                <tr>
                <th style={{width: "10%"}}>Id</th>
                <th style={{width: "70%"}}>Name</th>
                <th style={{width: "15%"}}>Price</th>
                <th style={{width: "5%"}}>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    movies.map( movie =>(
                    <Movie name = {movie.name} price = {movie.price} id = {movie.id} key = {movie.id}/>
                    ))
                }
              
            </tbody>
        </table>
           
        </div> : <p> No movies </p>
    )
}
export default MovieList;