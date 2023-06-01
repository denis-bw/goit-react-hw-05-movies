import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
 import css from './TrendingMovieItem.module.css' 
const TrendingMovieItem = ({ trendingMovieList }) => {
     const location = useLocation()
    return trendingMovieList?.map(el => {
        return <li className={css.Container_Tranding_Item} key={el.id}><Link className={css.Tranding_Item} to={`/movies/${el.id}`} state={location}>{el.title ?? el.original_name}</Link></li>
    });
  
};

export default TrendingMovieItem