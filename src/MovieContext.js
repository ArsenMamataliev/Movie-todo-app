import React, {createContext, useState} from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [movies, setMovies] = useState([]);

    const deleteMovie = (id, price) => {
        const filtered = movies.filter(item => item.id !== id);
        setMovies(filtered);
        setTotalPrice(totalPrice - price);
    }
    
    return (
        <MovieContext.Provider value = {{movies, setMovies, totalPrice, setTotalPrice, deleteMovie}}>
            {props.children}
        </MovieContext.Provider>
    );
}

