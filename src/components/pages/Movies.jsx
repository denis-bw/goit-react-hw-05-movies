import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { ApiServerRequest } from '../../API/Api'
import { Link } from 'react-router-dom';
import {  Suspense } from "react";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Movies = () => {
  const [movie, setMovies] = useState(null)
  const [searchParams, setSearchParams] = useSearchParams();
  const queryValue = searchParams.get("query");
  const API_KEY = '78fa60d71c65cdb8379688d13cf3e503';
  const URL_MOVIE = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${queryValue}&language=en-US`;
   
  const location = useLocation()

  useEffect(() => {
      if (queryValue === null) {
        return;
      }

    ApiServerRequest(URL_MOVIE).then((dataMovie) => {
      if (dataMovie.data.results.length === 0) {
            return toast.error("Nothing found ", {
          position: toast.POSITION.TOP_CENTER
        });
      }

      return setMovies(dataMovie.data)
    })

  },[queryValue,URL_MOVIE])


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.elements.query.value === '') return toast.error("Enter something !", {
      position: toast.POSITION.TOP_CENTER
    });
    setSearchParams({ query: form.elements.query.value.toLowerCase() });
    form.reset();
  }


   return (
     <Suspense fallback={<div>Loading...</div>}>
       <form onSubmit={handleSubmit}>
        <label >
          <input
            type="text" 
            name='query'/>
          
          <button type="submyt">Serch</button>
        </label>
       </form>
       
       <ul>
          {movie && movie.results.map(el => {
            return <li key={el.id}><Link to={`${el.id}`} state={location}  >{el.title}</Link></li>
            })}
      </ul>
    </Suspense>
    
  );
};

export default Movies