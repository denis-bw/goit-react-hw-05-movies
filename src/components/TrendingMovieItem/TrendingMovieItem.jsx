import { Link } from 'react-router-dom';

const TrendingMovieItem = ({trendingMovieList}) => {
     
    return trendingMovieList?.map(el => {
        
        return <li key={el.id}><Link to={`/movies/${el.id}`}>{el.title ?? el.original_name}</Link></li>
    });
  
};

export default TrendingMovieItem