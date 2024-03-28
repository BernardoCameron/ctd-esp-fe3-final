/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-case-declarations */

import { Link } from 'react-router-dom';
import CardStyle from '../styles/Card.module.css';
import { useContext } from 'react';
import { ContextGlobal } from './utils/global.context';

const Card = ({ name, username, id, onClick }) => {
  const { state, dispatch } = useContext(ContextGlobal);
  const { theme } = state;

  const handleOnClick = () => {
    onClick(id);
    dispatch({ type: 'SELECT_DENTIST', payload: id });
  };

  const addFav = (e) => {
    e.preventDefault();
    const favCard = { name, username, id };
    const existingFavs = JSON.parse(localStorage.getItem('favs')) || [];
    const newFavs = [...existingFavs, favCard];
    localStorage.setItem('favs', JSON.stringify(newFavs));
    console.log('Favoritos:', newFavs);
  };

  return (
    <div>
      <Link to={`/detail/${id}`} className={`${CardStyle.cardDentist} ${theme === 'dark' ? CardStyle.darkTheme : ''}`} onClick={handleOnClick}>
        <img className={CardStyle.imgDentist} src="../../public/images/doctor.jpg" alt={name} />
        <h2>{name}</h2>
        <p>{username}</p>
        <button onClick={addFav} className={`${CardStyle.favButton} ${theme === 'dark' ? CardStyle.darkTheme : ''}`}>Add fav ⭐</button>
      </Link>
    </div>

  );
};

export default Card;



// import { Link } from 'react-router-dom';
// import CardStyle from '../styles/Card.module.css';
// import { useContext } from 'react';
// import { ContextGlobal } from './utils/global.context';

// const Card = ({ name, username, id, onClick }) => {
//   const { state } = useContext(ContextGlobal);
//   const { theme } = state;

//   const handleOnClick = () => {
//     onClick(id);
//     dispatch({ type: 'SELECT_DENTIST', payload: id });
//   };

//   const addFav = () => {
//     dispatch({ type: 'ADD_FAV', payload: { name, username, id } });
//   };

//   return (
//     <Link to={`/detail/${id}`} className={`${CardStyle.cardDentist} ${theme === 'dark' ? CardStyle.darkTheme : ''}`} onClick={handleOnClick}>
//       <img className={CardStyle.imgDentist} src="../../public/images/doctor.jpg" alt={name} />
//       <h2>{name}</h2>
//       <p>{username}</p>
//       <button onClick={addFav} className={`${CardStyle.favButton} ${theme === 'dark' ? CardStyle.darkTheme : ''}`}>Add fav ⭐</button>
//     </Link>
//   );
// };

// export default Card;


