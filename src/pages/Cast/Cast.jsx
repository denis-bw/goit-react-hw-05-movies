import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { ApiServerRequest } from '../../API/Api'
import { Loader } from "components/Loader/Loader";
import { Error } from "components/Error/Error";
import { Suspense } from "react";
import css from './Cast.module.css'



const Cast = () => {

    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    const API_KEY = '78fa60d71c65cdb8379688d13cf3e503';
    const URL_MOVIE_CAST = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;


    useEffect(() => {
        setIsLoading(true)

        ApiServerRequest(URL_MOVIE_CAST).then((dataMovie) => {
            return setMovie(dataMovie.data)
        }).catch(error => {
            setError(true)
          throw new Error(error);
        }).finally(setIsLoading(false));
    },[URL_MOVIE_CAST])

   
    
    return (
        <Suspense fallback={<Loader />}>

            {isLoading && <Loader />}
            {error && <Error />}

            <ul className={css.List_Cast}>
                {movie && movie.cast?.map(actor => {

                let imgActor = `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                if(actor.profile_path === null){
                    imgActor = 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
                }
               
                return <li className={css.Cast_Item} key={actor.id}>
                        <img className={css.Cast_Image} src={imgActor} alt={actor.name} />
                        <p className={css.Name_Actor_Text}>{actor.name}</p>
                    </li> 
                })}

            {movie?.cast.length === 0 && <p lassName={css.Name_Actor_Text} >No information about actors</p>}
            </ul>
        </Suspense>
    );
};

export default Cast