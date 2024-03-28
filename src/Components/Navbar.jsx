import { Link } from "react-router-dom";
import NavStyle from '../styles/Navbar.module.css';
import { routes } from "./utils/routes";
import { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);
  const { theme } = state;

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    dispatch({ type: "SET_THEME", payload: newTheme });
  };

  return (
    <nav className={`${NavStyle.nav} ${theme === "dark" ? NavStyle.darkTheme : ""}`}>
      <div className={NavStyle.section1}>
        <ul>
          <li><Link to={routes.home}>Home</Link></li>
          <li><Link to={routes.contact}>Contact</Link></li>
          <li><Link to={routes.detail}>Detail</Link></li>
          <li><Link to={routes.favs}>Favs</Link></li>
        </ul>
      </div>

      <div className={NavStyle.section2}>
        <button className={NavStyle.themeButton} onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;


// import { Link } from "react-router-dom"
// import NavStyle from '../styles/Navbar.module.css'
// import { routes } from "./utils/routes"
// import { useContext } from "react";
// import { ContextGlobal } from "./utils/global.context";


// const Navbar = () => {
//   const { state, dispatch } = useContext(ContextGlobal);
//   const { theme } = state;

//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     dispatch({ type: "SET_THEME", payload: newTheme });
//   };

//   return (
//     <nav className={NavStyle.nav}>
//       <div className={NavStyle.section1}>
//         <ul>
//           <Link to={routes.home}><li>Home</li></Link>
//           <Link to={routes.contact}><li>Contact</li></Link>
//           <Link to={routes.detail}><li>Detail</li></Link>
//           <Link to={routes.favs}><li>Favs</li></Link>
//         </ul>
//       </div>

//       <div className={NavStyle.section2}>
//         <button className={NavStyle.themeButton} onClick={toggleTheme}>
//           {theme === "light" ? "🌙" : "☀️"}
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;