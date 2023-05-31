import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { ApiServerRequest } from '../../API/Api'

const Reviews = () => {

const { movieId } = useParams();
    const [reviews, setReviews] = useState(null);
    
    const API_KEY = '78fa60d71c65cdb8379688d13cf3e503';
    const URL_MOVIE_REVIEWS = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`;


    useEffect(() => {
        ApiServerRequest(URL_MOVIE_REVIEWS).then((dataMovie) => {
        return setReviews(dataMovie.data)
    });
    },[])

    
    console.log(reviews)
    return (
        <ul>
            {reviews && reviews.results?.map(review => {
                
                return <li key={review.id}>
                    <h2>{review.author }</h2>
                        <p>{review.content }</p>
                    </li>
                
            })}
            {reviews?.results.length === 0 && <p>We don`t have any reviews for this movie.</p>}
        </ul>
    );
};

export default Reviews