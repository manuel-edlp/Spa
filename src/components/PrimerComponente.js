import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const PrimerComponente = () => {
  const [busqueda, setBusqueda] = useState('');
  const [videojuegos, setVideojuegos] = useState([]);
  const [videojuegoSeleccionado, setVideojuegoSeleccionado] = useState(null);

  useEffect(() => {
    if (busqueda) {
      axios.get(`https://localhost:5001/WebApi/VideoJuego/buscar/${busqueda}`)
        .then(response => {
          setVideojuegos(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      setVideojuegos([]);
    }
  }, [busqueda]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar videojuegos..."
                value={busqueda}
                onChange={e => setBusqueda(e.target.value)}
              />
            </div>
          </form>

          {videojuegos.length > 0 && (
            <ul className="list-group">
              {videojuegos.map(videojuego => (
                <li
                  className="list-group-item"
                  key={videojuego.id}
                  onClick={() => setVideojuegoSeleccionado(videojuego)}
                >
                  {videojuego.nombre}
                </li>
              ))}
            </ul>
          )}
        </div>
        
        {videojuegoSeleccionado && (
          <div className="col-md-6 offset-md-3">
            <div>Modificar Videojuego</div>
            <div className="card-body">
              <h5 className="card-title"></h5>
              <div id="card-content">
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    name="nombre"
                    id="nombre"
                    aria-describedby="helpId"
                    placeholder="Nombre"
                    value={videojuegoSeleccionado.nombre}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
