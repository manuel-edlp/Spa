import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';


export const SegundoComponente = ({upload}) => {
  const [videojuego, setVideojuego] = useState({
    nombre: '',
    desarrollador: '',
    año: '',
    peso: '',
  });
  const [mensaje, setMensaje] = useState('');
 

  const agregarVideojuego = async () => {
    try{
      const respuesta = await axios.post('https://localhost:5001/WebApi/VideoJuego/', videojuego);
      upload(respuesta.data);

      if (respuesta.status === 201) {
        setMensaje('Agregado exitoso.');
        setTimeout(() => {
          setMensaje('');
        }, 3000); // Borra el mensaje después de 3 segundos
      }
    }
    catch {
      setMensaje('Error al agregar.');
      setTimeout(() => {
        setMensaje('');
      }, 3000); // Borra el mensaje después de 3 segundos
    }
  };


  return (
    <div className="container">
      <div className='row'>
        <div className="col-md-6 offset-md-3 agregar">
          <div id="titulo">Agregar Videojuego</div>
          <div className="notificacion">{mensaje}</div>
          <div className="card-body">
            <h5 className="card-title"></h5>
            <div id="card-content">
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="nombre"
                  id="nombre"
                  placeholder="Ingrese nombre"
                  onChange={(e) => setVideojuego({ ...videojuego, nombre: e.target.value })}/>
              </div>
            </div>
          </div>

          <div className="card-body">
            <h5 className="card-title"></h5>
            <div id="card-content">
              <div className="mb-3">
                <label htmlFor="desarrollador" className="form-label">
                  Desarrollador
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="desarrollador"
                  id="desarrollador"
                  placeholder="Ingrese desarrollador"
                  onChange={(e) => setVideojuego({ ...videojuego, desarrollador: e.target.value })}/>
              </div>
            </div>
          </div>

          <div className="card-body">
            <h5 className="card-title"></h5>
            <div id="card-content">
              <div className="mb-3">
                <label htmlFor="año" className="form-label">
                  Año
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="año"
                  id="año"
                  placeholder="Ingrese año"
                  onChange={(e) => setVideojuego({ ...videojuego, año: e.target.value })}/>
              </div>
            </div>
          </div>

          <div className="card-body">
            <h5 className="card-title"></h5>
            <div id="card-content">
              <div className="mb-3">
                <label htmlFor="peso" className="form-label">
                  Peso
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="peso"
                  id="peso"
                  placeholder="Ingrese peso"
                  onChange={(e) => setVideojuego({ ...videojuego, peso: e.target.value })}/>
              </div>
            </div>
          </div>
          
          <button className="btn btn-success" onClick={agregarVideojuego}>
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};


// <button class="btn btn-primary">Suscribirse</button> 

