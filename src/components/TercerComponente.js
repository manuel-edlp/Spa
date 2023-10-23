import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const TercerComponente = ({apiData}) => {

    const [videoJuegos,setVideoJuegos] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:5001/WebApi/VideoJuego/')
        .then((response)=> { setVideoJuegos(response.data);})
        .catch((error)=>{console.error(error);})
    },[apiData]);  

    return (
        <div className="lista">
          <h2 id="lista-titulo">Lista de Videojuegos</h2>
          {
            <table class="table table-hover table-dark">
              <thead>
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Año</th>
                  <th scope="col">Desarrollador</th>
                  <th scope="col">Peso</th>
                </tr>
              </thead>
              <tbody>
              {videoJuegos.map((videojuego) => (  
                <tr key={videojuego.id}>
                  <td>{videojuego.nombre}</td>
                  <td>{videojuego.año}</td>
                  <td>{videojuego.desarrollador}</td>
                  <td>{videojuego.peso}</td>
                </tr>
                ))}
              </tbody>
            </table>
          }
        </div>
      );
}
