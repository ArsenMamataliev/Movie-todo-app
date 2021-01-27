import React, {useContext} from 'react';
import {MovieContext} from './MovieContext';

const statusChecked = {
    textDecorationLine: 'line-through',
    color: 'gray'
};
const statusNotChecked = {
    textDecorationLine: 'none',
};

const Movie = ({name, price, id, completed}) => {
    const { deleteMovie, completedMovieTask} = useContext(MovieContext);
    return (
            <tr>
                <th><input type="checkbox" checked={completed} onChange={() => completedMovieTask(id, price, completed)}></input></th>
                <td style = {completed? statusChecked: statusNotChecked}>{name}</td>
                <td style = {completed? statusChecked: statusNotChecked}>${price}</td>
                <td><button type="button" className="btn btn-danger small btn-sm" onClick = {() => deleteMovie(id, price, completed)} >&times;</button></td>
            </tr> 
       
    );
};

export default Movie;