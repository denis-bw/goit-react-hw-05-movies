import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
  
const TrendingMovieItem = ({ trendingMovieList }) => {
     const location = useLocation()
    return trendingMovieList?.map(el => {
        return <li key={el.id}><Link to={`/movies/${el.id}`} state={location}>{el.title ?? el.original_name}</Link></li>
    });
  
};

export default TrendingMovieItem