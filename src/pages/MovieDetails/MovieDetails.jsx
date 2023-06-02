import { useLocation, useParams } from "react-router-dom";
import {ApiServerRequest} from '../../API/Api'
import { useEffect, useRef, useState } from 'react';
import { Outlet, Link } from "react-router-dom"
import { Suspense } from "react";
import css from './MovieDetails.module.css'

const MovieDetails = () => {

    const { movieId } = useParams();

    const [movie, setMovie] = useState(null);
    const [moviePoster, setMoviePoster] = useState('')

    const location = useLocation()
    const PrevPage = useRef(location.state?.from ?? "/")

    const API_KEY = '78fa60d71c65cdb8379688d13cf3e503';
    const URL_MOVIE = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;


    
    useEffect(() => {
        ApiServerRequest(URL_MOVIE).then((dataMovie) => {
            setMoviePoster(`https://image.tmdb.org/t/p/w500${dataMovie.data.poster_path}`)
        return setMovie(dataMovie.data)
    });
    },[URL_MOVIE])
    

    if (moviePoster === 'https://image.tmdb.org/t/p/w500null') {
        setMoviePoster('https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg')
    }
    
    return (    
        <Suspense fallback={<div>Loading...</div>}>      
          <div className={css.Button_Back_Container}><Link className={css.Button_Back} to={PrevPage.current}>Back</Link></div>
          
            {movie && <div className={css.Container_Movie_Content}>
                <img className={css.Movie_Poster} src={moviePoster} alt={movie.original_title} />
                <div className={css.Information_Movie_Container}>
                    <h1 className={css.Title_Movie}>{movie.original_title} ({movie.release_date.slice(0, 4)})</h1>
                    <p className={css.Text_Movie}>User Score: {Math.round(movie.popularity)}%</p>
                    <h2 className={css.Text_Movie_Title}>Overviwe</h2>
                    <p className={css.Text_Movie}>{movie.overview}</p>
                    <h2 className={css.Text_Movie_Title}>Genres</h2>
                    <p className={css.Text_Movie}>{movie.genres?.map(el => el.name).join(' ')}</p>
                </div>
            </div>}
            
            {movie && <p>Additional information</p> &&
            <ul className={css.List_Link_Details_Movie}>
                <li className={css.Container_Link_Details}><Link className={css.Link_Details} to={`/movies/${movieId}/cast`}>Cast</Link></li>
                <li className={css.Container_Link_Details}><Link className={css.Link_Details} to={`/movies/${movieId}/reviews`}>Reviews</Link></li>
            </ul>}
         <Outlet />
    </Suspense>
  );
};

export default MovieDetails