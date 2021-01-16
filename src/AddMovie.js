import React, {useContext, useState} from 'react';
import {MovieContext} from './MovieContext';

const styles = {
    name: {
        border: 'none',
        borderBottom: '2px solid black',
        marginRight: '20px',
        marginBottom: '30px',
        width: '300px'
     }, 
     price: {
        border: 'none',
        borderBottom: '2px solid black',
        marginRight: '20px',
        marginBottom: '30px',
        width: '180px'
    },
};

const AddMovie = () => {
    const {movies, setMovies, totalPrice, setTotalPrice} = useContext(MovieContext);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const updateName = e => {
        setName(e.target.value); 
    };

    const updatePrice = e => {
        setPrice(e.target.value)
    };


    const addMovieFn = e => {
        e.preventDefault();
        setMovies(preVal => [...preVal, {name: name, price: price, id: movies.length + 1 }]);
        setTotalPrice(totalPrice + +price );
        setName('');
        setPrice('');
    }; 

    return(
        <form onSubmit = {addMovieFn}>
        <input type = 'text'  placeholder = 'Name of movie' value = {name} onChange = {updateName} style = {styles.name} maxlength = "30" required/>
        <input type = 'number'  placeholder = 'Price' value = {price} onChange = {updatePrice} style = {styles.price} min = "0" required/>
        <button type = "submit" className="btn btn-success">Add</button>
        </form>
    )
}

export default AddMovie;