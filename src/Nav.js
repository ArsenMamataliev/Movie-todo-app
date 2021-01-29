import React, {useContext} from 'react';
import {MovieContext} from './MovieContext';
import { FcOk, FcCheckmark, FcFilmReel} from "react-icons/fc";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const Nav = () => {
    const {movies, totalPrice, completedMovies} = useContext(MovieContext);
    return(
        <div className="d-flex bd-highlight mb-3 navbar">
            <div className="mr-auto p-2 bd-highlight">
                <p><FcFilmReel/> <strong>Movie todo app</strong></p>
            </div>
            <div className="p-2 bd-highlight">
                <p><FcOk/><strong>  {completedMovies.length}</strong></p>
            </div>
            <div className="p-2 bd-highlight">
                <p><FcCheckmark/><strong>  {movies.length}</strong></p>
            </div>
            <div className="p-2 bd-highlight">
                 <p><RiMoneyDollarCircleLine/><strong>  {totalPrice}</strong></p>
            </div>
        </div>
    )
}

export default Nav;