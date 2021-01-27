import React, {createContext, useState} from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [movies, setMovies] = useState([]);
    const [completedMovies, setCompletedMovies]= useState([]);

    const decreaseTotalPrice = price => setTotalPrice(totalPrice - Number(price));
    
    const increaseTotalPrice = price => setTotalPrice(totalPrice + Number(price));

    const deleteMovie = (id, price, completed) => {
        if(completed){
           let filterCompletedMovies = completedMovies.filter(item => item.id !== id);
           setCompletedMovies(filterCompletedMovies);
        }else{
            let filtered = movies.filter(item => item.id !== id);
            setMovies(filtered);
            decreaseTotalPrice(price);
        }
    }

    const completedMovieTask = (id, price, completed) => {
        if(completed){
            let filteredMov = completedMovies.filter(item => item.id === id);
            let notCompleted = completedMovies.filter(item => item.id !== id);
            let completedMov = Object.assign({}, ...filteredMov, {completed: false});
            setMovies(preVal =>[...preVal , completedMov]);
            setCompletedMovies(notCompleted);
            increaseTotalPrice(price);
        }else {
            let notCompleted = movies.filter(item => item.id !== id);
            let filteredMov = movies.filter(item => item.id === id);
            let completedMov = Object.assign({}, ...filteredMov, {completed: true});
            setMovies(notCompleted);
            setCompletedMovies(preVal =>[...preVal , completedMov]);
            decreaseTotalPrice(price);
        }
        
    }        
    return (
        <MovieContext.Provider value = {{movies, setMovies, totalPrice, setTotalPrice,
             completedMovies, completedMovieTask, deleteMovie
            }}>
            {props.children}
        </MovieContext.Provider>
    );
}

