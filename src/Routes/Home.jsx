import Card from '../Components/Card'
import { useContext, useEffect } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'
import HomeStyle from '../styles/Home.module.css'

const Home = () => {
  const { state, dispatch } = useContext(ContextGlobal);
  const { theme, data } = state;

  const handleClick = (id) => {
    dispatch({ type: 'SELECT_DENTIST', payload: id });
  };

  useEffect(() => {
    const fetchDentists = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        dispatch({ type: 'SET_API_DATA', payload: data });
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchDentists();
  }, [dispatch]);

  return (
    <main className={`${HomeStyle.container} ${theme === 'dark' ? HomeStyle.darkTheme : ''}`}>
      <h1>Home</h1>
      <div className='card-grid'>
        {data.map(dentist => (
          <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} onClick={handleClick} />
        ))}
      </div>
    </main>
  );
};

export default Home;


// import Card from '../Components/Card'
// import { useContext, useEffect } from 'react'
// import { ContextGlobal } from '../Components/utils/global.context'

// const Home = () => {
//   const { state, dispatch } = useContext(ContextGlobal);
//   const { theme, data } = state;

//   useEffect(() => {
//     const fetchDentists = async () => {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         dispatch({ type: 'SET_API_DATA', payload: data });
//       } catch (error) {
//         console.log('Error fetching data:', error);
//       }
//     };

//     fetchDentists();
//   }, [dispatch]);

//   return (
//     <main className={theme}>
//       <h1>Home</h1>
//       <div className='card-grid'>
//         {data.map(dentist => (
//           <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} />
//         ))}
//       </div>
//     </main>
//   );
// };

// export default Home;
