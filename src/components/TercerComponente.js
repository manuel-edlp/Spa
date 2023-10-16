import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const TercerComponente = () => {

    const [videoJuegos,setVideoJuegos] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:5001/WebApi/VideoJuego/')
        .then((response)=> { setVideoJuegos(response.data);})
        .catch((error)=>{console.error(error);})
    },[]);  

    return (
        <div>
          <h2>Lista de Videojuegos</h2>
          <ul>
            {videoJuegos.map((videojuego) => (
              <li key={videojuego.id}>{videojuego.nombre}</li>
            ))}
          </ul>
        </div>
      );
}
