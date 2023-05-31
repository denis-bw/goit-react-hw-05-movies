import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { ApiServerRequest } from '../../API/Api'


const Cast = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    
    const API_KEY = '78fa60d71c65cdb8379688d13cf3e503';
    const URL_MOVIE_CAST = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;


    useEffect(() => {
        ApiServerRequest(URL_MOVIE_CAST).then((dataMovie) => {
        return setMovie(dataMovie.data)
        });
    },[URL_MOVIE_CAST])

    console.log(movie)
    
    return (
        <ul>
            {movie && movie.cast?.map(actor => {

                let imgActor = `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                if(actor.profile_path === null){
                    imgActor = 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
                }
               
                return <li key={actor.id}>
                        <img src={imgActor} alt={actor.name} />
                        <p>{actor.name}</p>
                    </li>
                
            })}

            {movie?.cast.length === 0 && <p>no information about actors</p>}
        </ul>
    );
};

export default Cast