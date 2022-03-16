import React, { Component } from 'react';
import { Link  } from 'react-router-dom';
import auth from '../services/authService';
import Table from './common/table';
import Like from './common/like';
import { FaRegPlayCircle} from 'react-icons/fa';
import {VscCompareChanges} from 'react-icons/vsc';


class MoviesTable extends Component {
    columns = [
        { path: 'title', lable: 'Title', content: movie => <Link to={`/watch/${movie._id}`} style={{color:"#01BF71", fontWeight:"500"}}>{movie.title} <FaRegPlayCircle/></Link>},
        { path: 'genre.name', lable: 'Genre' },
        { path: 'duration', lable: 'Duration' },
        { path: 'language', lable: 'Language' },
        { key: 'like', content: movie => <Like liked={movie.liked} onClick={() => this.props.onLike(movie)}/> },
        
    ]; 
    updateColumn = {
        key: 'watch',
        content: movie => (<Link to={`/movies/${movie._id}`}>
            <VscCompareChanges/>
            </Link>)
    };

    deleteColumn = {
                key: 'delete', 
                content: movie => (
                    <button 
                        onClick={() => this.props.onDelete(movie)} 
                        className="btn btn-danger btn-sm">
                            Delete
                    </button>)
            };

    constructor(){
        super();
        const user = auth.getCurrentUser();
        if(user&& user.isAdmin)
            this.columns.push(this.updateColumn);
        if(user && user.isAdmin)
            this.columns.push(this.deleteColumn);
    }

    render() { 
    const { movies, onSort, sortColumn } = this.props;

    return ( 
        <Table 
            columns={this.columns}
            data ={movies}
            onSort={onSort}
            sortColumn={sortColumn} />
     );
    }
}
 

export default MoviesTable;