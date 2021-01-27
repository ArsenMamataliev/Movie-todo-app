import React, {useContext} from 'react';
import {MovieContext} from './MovieContext';

const Nav = () => {
    const {movies, totalPrice, completedMovies} = useContext(MovieContext);
    return(
        <div className ="navbar">
        <p>Completed: <strong>{completedMovies.length}</strong></p>
        <p>Not completed: <strong>{movies.length}</strong></p>
        <p>Total price: <strong>{totalPrice}$</strong></p>
        </div>
    )
}

export default Nav;