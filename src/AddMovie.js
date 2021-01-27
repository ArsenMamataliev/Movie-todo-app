import React, {useContext, useState} from 'react';
import {MovieContext} from './MovieContext';

const AddMovie = () => {
    const {setMovies, totalPrice, setTotalPrice} = useContext(MovieContext);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    
    const randomNumberGenerator = () => {
        const randomNumber = Math.floor((Math.random() * 1000));
        return randomNumber;
    };

    const updateName = e => {
        setName(e.target.value); 
    };

    const updatePrice = e => {
        setPrice(e.target.value)
    };


    const addMovieFn = e => {
        e.preventDefault();
        setMovies(preVal => [...preVal, {name: name, price: price, id: randomNumberGenerator(), completed: false }]);
        setTotalPrice(totalPrice + +price );
        setName('');
        setPrice('');
    }; 

    return(
        <form onSubmit = {addMovieFn}>
            <div className="form-row">
                <div className="col-md-12 mb-1">
                <input type = 'text'  className = "form-control" placeholder = 'Name of movie' value = {name} onChange = {updateName} maxLength = "40" required/>
                </div>
            </div>
            <div className="form-row">
                <div className="col-md-3 mb-2">
                    <input type = 'number' className = "form-control" placeholder = 'Price' value = {price} onChange = {updatePrice}  min = "1" required/>
                </div>
                <div class="col-md-3 mb-2">
                    <button type = "submit" className="btn btn-dark">+</button>
                </div>
            </div>
        </form>
    )
}

export default AddMovie;