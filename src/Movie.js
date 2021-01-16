import React, {useContext} from 'react';
import {MovieContext} from './MovieContext';

const Movie = ({name, price, id}) => {
    const {deleteMovie} = useContext(MovieContext);
    return (
        <tr>
            <th>{id}</th>
            <td>{name}</td>
            <td>${price}</td>
            <td><button type="button" className="btn btn-danger small btn-sm" onClick = {e => deleteMovie(id, price)} >&times;</button></td>
        </tr>
    );
}

export default Movie;