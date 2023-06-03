import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css' 
import PropTypes from 'prop-types';
 
const TrendingMovieItem = ({ movieList }) => {

    const location = useLocation()
    
    return movieList?.map(el => {
        return <li className={css.Container_Movie_Item} key={el.id}><Link className={css.Movie_Item} to={`/movies/${el.id}`} state={{form: location}}>{el.title ?? el.original_name}</Link></li>
    });
  
};

TrendingMovieItem.propTypes = {
    movieList: PropTypes.arrayOf(PropTypes.object),
}

export default TrendingMovieItem