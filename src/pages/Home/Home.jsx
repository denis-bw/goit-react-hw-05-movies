import css from './Home.module.css'
import { useEffect, useState } from 'react';
import {ApiServerRequest} from '../../API/Api'
import MoviesList from '../../components/MovieList/MoviesList'
import { Suspense } from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {

  const [trendingMovieList, settrendingMovieList] = useState(null)
  const location = useLocation()
  const API_KEY = '78fa60d71c65cdb8379688d13cf3e503';
  const URL_TRENDING_MOVIES = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=en-US`;
 
  useEffect(() => {
    ApiServerRequest(URL_TRENDING_MOVIES).then((dataMovies) => {
      return settrendingMovieList(dataMovies.data.results)
    }).catch(error => {
            throw new Error(error);
        });
  },[URL_TRENDING_MOVIES])

  

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={css.Container_List}>
        <p className={css.Tranding_Text}>Trending today</p>
        <ul className={css.List_Tranding}>
          {trendingMovieList && <MoviesList movieList={trendingMovieList} locationPage={location}/>}
        </ul>
      </div>
    </Suspense>
  );
};

export default Home