/* import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', 
});

export const getAvengers = () => API.get('/avengers') */


//PRUEBA DE FRONTEND
/* export const getAvengers = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: [
          { id: 1, name: 'Iron Man' },
          { id: 2, name: 'Thor' },
          { id: 3, name: 'Hulk' },
        ],
      });
    }, 500); 
  });
};
 */


import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000/api' 
});


export const getAvengers = async () => {
  const res = await API.get('/avengers');
  
  const data = res.data.map(avenger => ({
    ...avenger,
    habilidades: avenger.habilidades.map(h => h.habilidad) 
  }));
  return { data };
};
