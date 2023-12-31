import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

// falta un hover en la lista de busqueda
// mejorar el mensaje de modificacion con exito (usar notifiacion toast?)

export const PrimerComponente = ({upload}) => {
  const [videojuego, setVideojuego] = useState({
    nombre: '',
    desarrollador: '',
    año: '',
    peso: '',
  });
  const [busqueda, setBusqueda] = useState('');
  const [videojuegos, setVideojuegos] = useState([]);
  const [videojuegoSeleccionado, setVideojuegoSeleccionado] = useState(null);
  const [mostrarResultados, setMostrarResultados] = useState(true);
  const listaResultadosRef = useRef();
  const [nombreOriginal, setNombreOriginal] = useState('');
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    function handleClickOutside(event) {
      if (listaResultadosRef.current && !listaResultadosRef.current.contains(event.target)) {
        setMostrarResultados(false); // Cierra la lista de resultados al hacer clic fuera de ella
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [listaResultadosRef]);

  useEffect(() => {
    if (busqueda) {
      axios.get(`https://localhost:5001/WebApi/VideoJuego/listar/${busqueda}`)
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



  const handleVideojuegoSeleccionado = async (videojuego) => {
    
    const respuesta = await axios.get(`https://localhost:5001/WebApi/VideoJuego/buscar/${videojuego.nombre}`);
    setVideojuegoSeleccionado(respuesta.data);
    setMostrarResultados(false);
    setNombreOriginal(respuesta.data.nombre); // Almacena el nombre original al seleccionar el juego

  };

  const modificarVideojuego = async () => {
    try{
      const respuesta = await axios.put(`https://localhost:5001/WebApi/VideoJuego/${nombreOriginal}`, videojuegoSeleccionado);

      if (respuesta.status === 200) {
        upload(respuesta.data);
        setMensaje('Modificación exitosa.');
        setTimeout(() => {
          setMensaje('');
        }, 3000); // Borra el mensaje después de 3 segundos
      } 
    }
    catch{
      setMensaje('Error al modificar.');
      
    }
  };

  const eliminarVideojuego = async () => {
  try{ 
    const respuesta = await axios.delete(`https://localhost:5001/WebApi/VideoJuego/${nombreOriginal}`, videojuegoSeleccionado)

    if (respuesta.status === 204){
      upload(respuesta.data);
      setMensaje('eliminación exitosa.');
      setTimeout(() => {
        setMensaje('');
      }, 3000); // Borra el mensaje después de 3 segundos
    }
  }catch{
      setMensaje('Error al eliminar.');
      setTimeout(() => {
        setMensaje('');
      }, 3000); // Borra el mensaje después de 3 segundos
    }
  }
  return (
    <div className="container">
      <div className="row">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar videojuegos..."
            value={busqueda}
            onChange={e => {
              setBusqueda(e.target.value);
              setMostrarResultados(true);
              setVideojuegoSeleccionado(null);
            }}
          />
        </div>
  
        {mostrarResultados && videojuegos.length > 0 && (
          <ul className="list-group" ref={listaResultadosRef}>
            {videojuegos.map(videojuego => (
              <li
                className="list-group-item"
                key={videojuego.nombre}
                onClick={() => handleVideojuegoSeleccionado(videojuego)}
              >
                {videojuego.nombre}
              </li>
            ))}
          </ul>
        )}
  
        <div className="col-md-6 offset-md-3 modificar">
          <div id="titulo">Modificar Videojuego</div>
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
                  placeholder="nombre"
                  value={videojuegoSeleccionado ? videojuegoSeleccionado.nombre : ''}
                  onChange={(e) => setVideojuegoSeleccionado({ ...videojuegoSeleccionado, nombre: e.target.value })}
                />
              </div>
  
              <div className="mb-3">
                <label htmlFor="desarrollador" className="form-label">
                  Desarrollador
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="desarrollador"
                  id="desarrollador"
                  placeholder="desarrollador"
                  value={videojuegoSeleccionado ? videojuegoSeleccionado.desarrollador : ''}
                  onChange={(e) => setVideojuegoSeleccionado({ ...videojuegoSeleccionado, desarrollador: e.target.value })}
                />
              </div>
  
              <div className="mb-3">
                <label htmlFor="año" className="form-label">
                  Año
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="año"
                  id="año"
                  placeholder="año"
                  value={videojuegoSeleccionado ? videojuegoSeleccionado.año : ''}
                  onChange={(e) => setVideojuegoSeleccionado({ ...videojuegoSeleccionado, año: e.target.value })}
                />
              </div>
  
              <div className="mb-3">
                <label htmlFor="peso" className="form-label">
                  Peso
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="peso"
                  id="peso"
                  placeholder="peso"
                  value={videojuegoSeleccionado ? videojuegoSeleccionado.peso : ''}
                  onChange={(e) => setVideojuegoSeleccionado({ ...videojuegoSeleccionado, peso: e.target.value })}
                />
              </div>
              <button className="btn btn-danger" onClick={eliminarVideojuego}>Eliminar</button>
              <button className="btn btn-success" onClick={modificarVideojuego}>Modificar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
