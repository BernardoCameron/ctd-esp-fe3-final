/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import Card from '../Components/Card';
import { ContextGlobal } from '../Components/utils/global.context';

const Favs = () => {
  const { state } = useContext(ContextGlobal);
  const { theme } = state;

  const favorites = JSON.parse(localStorage.getItem('favs')) || [];

  return (
    <>
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
    </>
  );
};

export default Favs;