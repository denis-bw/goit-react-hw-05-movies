import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { ApiServerRequest } from '../../API/Api'
import { Loader } from "components/Loader/Loader";
import { Error } from "components/Error/Error";
import css from './Reviews.module.css'
import { Suspense } from "react";

const Reviews = () => {

const { movieId } = useParams();
const [reviews, setReviews] = useState(null);
const [isLoading, setIsLoading] = useState(false)
const [error, setError] = useState(false)

const API_KEY = '78fa60d71c65cdb8379688d13cf3e503';
const URL_MOVIE_REVIEWS = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`;


    useEffect(() => {
        setIsLoading(true)

        ApiServerRequest(URL_MOVIE_REVIEWS).then((dataMovie) => {
            return setReviews(dataMovie.data)
        }).catch(error => {
            setError(true)
            throw new Error(error);
        }).finally(setIsLoading(false));
    },[URL_MOVIE_REVIEWS])

    
    return (
        <Suspense fallback={<Loader />}>
            {isLoading && <Loader />}
            {error && <Error />}

            <ul className={css.Reviews_Container}>
                {reviews && reviews.results?.map(review => {
                
                return <li key={review.id}>
                    <h2 className={css.Title_Reviews}>{review.author }</h2>
                        <p className={css.Text_Reviews}>{review.content }</p>
                    </li>
                })}
                
                {reviews?.results.length === 0 && <p className={css.Text_Reviews}>We don`t have any reviews for this movie.</p>}
                </ul>
        </Suspense>
    );
};

export default Reviews