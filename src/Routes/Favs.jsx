/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import Card from '../Components/Card';
import { ContextGlobal } from '../Components/utils/global.context';
import FavStyle from '../styles/Favs.module.css';

const Favs = () => {
  const { state } = useContext(ContextGlobal);
  const { theme } = state;

  const favorites = JSON.parse(localStorage.getItem('favs')) || [];

  return (
    <div className={`${FavStyle.container} ${theme === 'dark' ? FavStyle.darkTheme : ''}`}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favorites.map((fav, index) => (
          <Card
            key={index}
            name={fav.name}
            username={fav.username}
            id={fav.id}
            onClick={() => { }}
          />
        ))}
      </div>
    </div>
  );
};

export default Favs;