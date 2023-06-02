import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { lazy } from "react"
import Layout from "./Layout/Layout";

const Home = lazy(() => import('../pages/Home/Home'))
const Cast = lazy(() => import("../pages/Cast/Cast"))
const Reviews = lazy(() => import('../pages/Reviews/Reviews'))
const Movies = lazy(() => import('../pages/Movies/Movies'))
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'))

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />} >
            <Route path="cast" element={<Cast />} ></Route>
            <Route path="reviews" element={<Reviews />} >
          </Route>
        </Route>
        <Route path="*" element={<Home />} />
        </Route>
      </Routes> 
     
    
    <ToastContainer autoClose={3000} />
    </>
  );
};

export default App