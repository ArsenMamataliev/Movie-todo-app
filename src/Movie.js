import React, {useContext} from 'react';
import {MovieContext} from './MovieContext';
import { FcOk, FcEmptyTrash, FcCheckmark} from "react-icons/fc";

const statusChecked = {
    paddingTop: '7px',
    textDecorationLine: 'line-through',
    color: 'gray'
};
const statusNotChecked = {
    paddingTop: '7px',
    textDecorationLine: 'none',
    color: 'black',
    vertitalAlgign: 'center'
};

const Movie = ({name, price, id, completed}) => {
    const { deleteMovie, completedMovieTask} = useContext(MovieContext);
    return (
        <div className="movie-list">
        <div> 
            <button className="btn btn-light" onClick={() => completedMovieTask(id, price, completed)}> {completed? <FcOk/>: <FcCheckmark/>}</button>
        </div>
        <div style = {completed? statusChecked: statusNotChecked}>{name}</div>
        <div style = {completed? statusChecked: statusNotChecked}>${price}</div>
        <div><button className="btn btn-light" onClick = {() => deleteMovie(id, price, completed)} ><FcEmptyTrash/></button></div>
    </div>
                

       
    );
};

export default Movie;