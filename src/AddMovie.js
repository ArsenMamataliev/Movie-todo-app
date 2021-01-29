import React, {useContext, useState} from 'react';
import {MovieContext} from './MovieContext';
import { FcPlus } from "react-icons/fc";

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
            <div className="d-flex bd-highlight">
              <div className="p-2 flex-grow-1 bd-highlight">
                <input type = 'text'  className = "form-control"
                placeholder = 'Name of movie' value = {name} onChange = {updateName} maxLength = "70"  required/>
              </div>
              <div className="p-2 bd-highlight">
                <input type = 'number' className = "form-control"
                placeholder = 'Price' value = {price} onChange = {updatePrice}  min = "0" max = "10000" required/>
              </div>
              <div className="p-2 bd-highlight">
                <button type = "submit" className="btn btn-light"><FcPlus/></button>
              </div>
            </div>
        </form>
    )
}

export default AddMovie;