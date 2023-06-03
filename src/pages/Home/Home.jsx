import css from './Home.module.css'
import { useEffect, useState } from 'react';
import {ApiServerRequest} from '../../API/Api'
import MoviesList from '../../components/MovieList/MoviesList'
import { Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { Error } from 'components/Error/Error';

const Home = () => {

  const [trendingMovieList, settrendingMovieList] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const location = useLocation()
  const API_KEY = '78fa60d71c65cdb8379688d13cf3e503';
  const URL_TRENDING_MOVIES = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=en-US`;
 
  useEffect(() => {
    setIsLoading(true)
    ApiServerRequest(URL_TRENDING_MOVIES).then((dataMovies) => {
      return settrendingMovieList(dataMovies.data.results)
    }).catch(error => {
      setError(true)
      throw new Error(error);
    }).finally(setIsLoading(false))
  },[URL_TRENDING_MOVIES])

  

  return (
    <Suspense fallback={<Loader />}>
      {isLoading && <Loader />}
      {error && <Error />}
      <div className={css.Container_List}>
        <p className={css.Tranding_Text}>Trending today</p>
        <ul className={css.List_Tranding}>
          {trendingMovieList && <MoviesList movieList={trendingMovieList} state={ location }/>}
        </ul>
      </div>
      
    </Suspense>
  );
};

export default Home