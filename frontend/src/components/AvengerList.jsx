/* import React, { useEffect, useState } from 'react';
import AvengerCard from './AvengerCard';
import { getAvengers } from '../services/api';

const AvengerList = () => {
  const [avengers, setAvengers] = useState([]);

  useEffect(() => {
  getAvengers()
    .then(res => setAvengers(res.data)) // o res.avengers según cómo venga la estructura
    .catch(err => console.error('Error al obtener avengers:', err));
}, []);

    setAvengers(mockAvengers);
  }, []);

  return (
    <div className="avenger-container">
      <h1>Avengers Registrados</h1>
      <div className="card-grid">
        {avengers.map((avenger, index) => (
          <AvengerCard key={index} avenger={avenger} />
        ))}
      </div>
    </div>
  );
};

export default AvengerList;
 */


// PRUEBA PARA FRONTEND

// src/components/AvengerList.jsx
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
    <div className="avenger-container">
      <h1>Avengers Registrados</h1>

      <button className="btn-primary" onClick={() => alert('¡Hiciste clic!')}>
        Agregar Avenger
      </button>

      <div className="card-grid">
        {avengers.map((avenger, index) => (
          <div className="avenger-card" key={avenger.id || index}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={avenger.imagen || 'https://via.placeholder.com/50'}
                alt={avenger.alias}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  marginRight: 10,
                  objectFit: 'cover'
                }}
              />
              <h2>{avenger.alias}</h2>
            </div>
            <p><strong>Nombre real:</strong> {avenger.nombre}</p>
            <p><strong>Actor:</strong> {avenger.actor}</p>
            <p><strong>Habilidades:</strong></p>
            <ul>
              {avenger.habilidades.map((hab, i) => (
                <li key={i}>{hab}</li>
              ))}
            </ul>

            <div className="card-buttons">
              <button className="btn-edit">Editar</button>
              <button className="btn-delete">Eliminar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvengerList;
