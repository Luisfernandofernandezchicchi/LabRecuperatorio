import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://dragonball-api.com/api/characters/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Hubo un error:', error);
      });
  }, []);

  return (
    <div>
      <h1>MI APLICACION</h1>
      <div>
        <p>{data.name}</p>
        <p>{data.ki}</p>
        <p>{data.maxKi}</p>
        <p>{data.race}</p>
        <p>{data.gender}</p>
        <p>{data.description}</p>
        <img src={data.imagen} />
        <p>{data.affiliation}</p>
      </div>
    </div>
  );
};
export default App;