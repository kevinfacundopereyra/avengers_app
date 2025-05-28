import React, { useEffect, useState } from 'react';
import { getAvengers } from '../services/api';

const AvengerList = () => {
  const [avengers, setAvengers] = useState([]);

  useEffect(() => {
    getAvengers()
      .then(res => setAvengers(res.data))
      .catch(err => console.error('Error al obtener avengers:', err));
  }, []);

  return (
    <div>
      <h1>Avengers registrados</h1>
      <ul>
        {avengers.map(avenger => (
          <li key={avenger.id}>{avenger.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AvengerList;
