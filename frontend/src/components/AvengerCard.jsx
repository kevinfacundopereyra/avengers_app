import React from 'react';

const AvengerCard = ({ avenger }) => {
  return (
    <div className="avenger-card">
      <h2>{avenger.alias}</h2>
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
  );
};

export default AvengerCard;
