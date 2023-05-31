import { useLocation, useParams } from "react-router-dom";
import {ApiServerRequest} from '../../API/Api'
import { useEffect, useState } from 'react';
import { Outlet, Link } from "react-router-dom"

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [moviePoster, setMoviePoster] = useState('')

    const API_KEY = '78fa60d71c65cdb8379688d13cf3e503';
    const URL_MOVIE = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;


    const location = useLocation()
    useEffect(() => {
        ApiServerRequest(URL_MOVIE).then((dataMovie) => {
        setMoviePoster(`https://image.tmdb.org/t/p/w500${dataMovie.data.poster_path}`)
        return setMovie(dataMovie.data)
    });
    },[URL_MOVIE])
    
    
    
    if (moviePoster === 'https://image.tmdb.org/t/p/w500null') {
        setMoviePoster('https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg')
    }

    console.log(location.state)
    return (
      <>      
          <Link to={location.state ?? '/'}>Back</Link>
          
          {movie && <div>
                        <img src={moviePoster} alt={movie.original_title} />
                        <h1>{movie.original_title} ({movie.release_date.slice(0, 4)})</h1>
                        <p>User Score: {Math.round(movie.popularity)}%</p>
                        <h2>overviwe</h2>
                        <p>{movie.overview}</p>
                        <h2>Genres</h2>
                        <p>{movie.genres?.map(el => el.name).join(' ')}</p>
            </div>}
            
            <p>Additional information</p>
            <ul>
                <li><Link to={`/movies/${movieId}/cast`}>Cast</Link></li>
                <li><Link to={`/movies/${movieId}/reviews`}>Reviews</Link></li>
            </ul>
            <Outlet />  
         
    </>
  );
};

export default MovieDetails