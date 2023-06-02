import { Link } from 'react-router-dom';
import css from './MoviesList.module.css' 
 
const TrendingMovieItem = ({ movieList, locationPage }) => {

    return movieList?.map(el => {
        return <li className={css.Container_Movie_Item} key={el.id}><Link className={css.Movie_Item} to={`/movies/${el.id}`} state={locationPage}>{el.title ?? el.original_name}</Link></li>
    });
  
};

export default TrendingMovieItem