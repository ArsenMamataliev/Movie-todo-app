import React, {useContext} from 'react';
import {MovieContext} from './MovieContext';

const styles = {
    movieBox: {
        Width: '100%',
        display: 'flex',
        flexDirection: 'row',
        padding: '10px 20px',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'black',
        color: 'white',
        marginBottom: '15px',
        height: '60px'
    },

    p:{
        margin: '0 0 0 20px ',
        padding: '0'
    },
}

const Nav = () => {
    const {movies, totalPrice} = useContext(MovieContext);
    return(
        <div style = {styles.movieBox}>
        <p style = {styles.p}>List of movies: <strong>{movies.length}</strong></p>
        <p style = {styles.p}>Total price: <strong>{totalPrice}$</strong></p>
        </div>
    )
}

export default Nav;