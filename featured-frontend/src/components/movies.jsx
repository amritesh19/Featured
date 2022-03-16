import React, { Component } from 'react';
import { toast } from 'react-toastify';
import Pagination from './common/pagination';
import ListGroup from './common/listGroup';
import SearchBox from './common/searchBox';
import { getMovies, deleteMovie } from '../services/movieService';
import { getGenres } from '../services/genreService';
import { paginate } from '../utils/paginate';
import MoviesTable from './moviesTable';
import _ from 'lodash';

class Movies extends Component {
    state = { 
        movies: [],
        genres: [],
        currentPage: 1,
        pageSize: 5,
        searchQuery: "",
        selectedGenre: null,
        sortColumn: { path: 'title', order: 'asc'}
    };

    async componentDidMount(){
        const { data } = await getGenres();
        const genres = [{ _id: '', name: 'All Genres'}, ...data];
        
        const { data: movies } = await getMovies();
        
        this.setState({ movies, genres });
    }

    handleDelete = async (movie)=>{
        const originalMovies = this.state.movies;
        const movies = originalMovies.filter(m => m._id!==movie._id);
        this.setState({ movies });

        try{
        await deleteMovie(movie._id);
        }
        catch (ex){
            if(ex.response && ex.response.status === 404)
                toast.error('This movie is already been deleted.');
            
            this.setState({ movies: originalMovies });
        }
    };

     handleLike = (movie) =>{
         const movies = [...this.state.movies];
         const index = movies.indexOf(movie);
         movies[index] = { ...movies[index]};
         movies[index].liked = !movies[index].liked;
         this.setState({ movies });
     }

     handlePageChange = (event, value) =>{
         this.setState({ currentPage: value });
     }

     handleGenreSelect = genre =>{
         this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
     }

     handleSearch = query =>{
        this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1});
     };

     handleSort = sortColumn => {
         this.setState({ sortColumn });
     }

     getPagedData = () =>{
         const { pageSize,
                currentPage, 
                selectedGenre,
                sortColumn,
                searchQuery, 
                movies: allMovies } = this.state;
        
        let filtered = allMovies;
        if(searchQuery)
            filtered = allMovies.filter(m =>
                m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
                );
        else if(selectedGenre && selectedGenre._id)
            filtered = allMovies.filter(m => m.genre._id === selectedGenre._id);
        
        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

        const movies = paginate(sorted, currentPage, pageSize);

        return { totalCount: filtered.length, data: movies};
     }

    render() { 
        const { pageSize, currentPage, sortColumn, searchQuery } = this.state;
        const { user } = this.props;
        
        const {totalCount, data} = this.getPagedData();
        
        return (
        <React.Fragment>
        <div className="row" style={{marginTop:'20px', marginBottom:'40px'}}>
            <div className="col-3">
                <ListGroup 
                    items={this.state.genres} 
                    selectedItem={this.state.selectedGenre}
                    onItemSelect={this.handleGenreSelect}/>
            </div>

            <div className="col" style={{width:'90%'}}>
                 {user&&(
                <Link to="/movies/new" 
                    className="btn btn-primary"
                    style={{ marginBottom: 20 }}>
                    New Movies
                </Link>)} 
                <p>Showing {totalCount} movies in the database</p>
                <SearchBox value={searchQuery} onChange={this.handleSearch} />
                <MoviesTable 
                    movies={data} 
                    sortColumn={sortColumn}
                    onLike={this.handleLike} 
                    onDelete={this.handleDelete}
                    onSort={this.handleSort}/>
                <Pagination 
                    itemsCount={totalCount} 
                    pageSize={pageSize} 
                    currentPage={currentPage} 
                    onPageChange={this.handlePageChange}/>    
            </div>
        </div>
        </React.Fragment>
        );
    }
}
 
export default Movies;