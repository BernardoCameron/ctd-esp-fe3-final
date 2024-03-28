/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ContextGlobal } from "../Components/utils/global.context";

const Detail = () => {
  const { state } = useContext(ContextGlobal);
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    const fetchDentist = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        setDentist(data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    if (id) {
      fetchDentist();
    }
  }, [id]);

  if (!dentist) {
    return <div>Loading...</div>;
  }

  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <td>{dentist.name}</td>
        </tr>
        <tr>
          <th>Username</th>
          <td>{dentist.username}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>{dentist.email}</td>
        </tr>
        <tr>
          <th>Phone</th>
          <td>{dentist.phone}</td>
        </tr>
        <tr>
          <th>Website</th>
          <td>{dentist.website}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Detail;
// const Detail = () => {


//   // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

//   return (
//     <>
//       <h1>Detail Dentist id </h1>
//       {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
//       {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
//     </>
//   )
// }

// export default Detail