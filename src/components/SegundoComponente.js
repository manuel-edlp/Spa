import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import {TercerComponente} from './TercerComponente';


export const SegundoComponente = ({upload}) => {
  const [videojuego, setVideojuego] = useState({
    nombre: '',
    desarrollador: '',
    año: '',
    peso: '',
  });

 

  const agregarVideojuego = async () => {
    const respuesta = await axios.post('https://localhost:5001/WebApi/VideoJuego/', videojuego);
    upload(respuesta.data);

    if (respuesta.status === 201) {
      console.log("Se agregó el videojuego correctamente");
      // Actualizar videoJuegos en App mediante la función de devolución de llamada

    } else {
      console.log("Se produjo un error al agregar el videojuego");
    }
  };


  return (
    <div className="agregar">
      <div id="titulo">Agregar Videojuego</div>
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
  );
};


// <button class="btn btn-primary">Suscribirse</button> 

