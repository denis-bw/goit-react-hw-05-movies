
import { useEffect, useState } from 'react';
import {ApiServerRequest} from '../../API/Api'
import TrendingMovieItem from '..//../components/TrendingMovieItem/TrendingMovieItem'
const Home = () => {

  const [trendingMovieList, settrendingMovieList] = useState(null)

  useEffect(() => {
    ApiServerRequest(URL_TRENDING_MOVIES).then((dataMovies) => {
      return settrendingMovieList(dataMovies.data.results)
    }).catch(error => {
            throw new Error(error);
        });
  },[])

  const API_KEY = '78fa60d71c65cdb8379688d13cf3e503';
  const URL_TRENDING_MOVIES = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=en-US`;

  // console.log(trendingMovieList)

  return (
    <>
      
      <div>Trending today</div>
      <ul>
        <TrendingMovieItem trendingMovieList={trendingMovieList} />
      </ul>
      
      
    </>
  );
};

export default Home