import { NavLink } from "react-router-dom";
import css from './Header.module.css'

 const Header = () => {

  return (
      <nav className={css.Navigation}>
       <div className={css.Nav_Link_Cantainer}> <NavLink className={css.Nav_Link} to="/">Home</NavLink></div>
       <div className={css.Nav_Link_Cantainer}><NavLink className={css.Nav_Link} to="/movies">Movies</NavLink></div>
      </nav>
 
  );
};

export default Header