import React,{ useEffect, useState } from 'react'
import axios from 'axios'

export const SegundoComponente = () => {

  const [videojuego, setVideojuego] = useState({
    nombre: '',
    desarrollador: '',
    año: '',
    peso: '',
  });

  const agregarVideojuego = async () => {
    const respuesta = await axios.post('https://localhost:5001/WebApi/VideoJuego/', videojuego);

    if (respuesta.status === 200) {
      console.log("Se agregó el videojuego correctamente");
    } else {
      console.log("Se produjo un error al agregar el videojuego"); 
    }
  };

// la funcion onChange recibe un evento que contiene la info que se modificó en el input y el nuevo valor.
// con ...videojuego se crea una copia de videojuego y se actualiza el campo modificado
// ese copia de videojuego se pasa como parametro a la funcion setVideojuego que actualiza automaticamente el estado videojugo del componente
  return ( 
    <div>
      <div>Agregar Videojuego</div>
      <div class="card-body">
        <h5 class="card-title"></h5>
        <div id="card-content">
            <div class="mb-3">
              <label for="" class="form-label">Nombre</label>
              <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="Ingrese nombre" 
                 onChange={(e) => setVideojuego({ ...videojuego, nombre: e.target.value })}/>
                 
            </div>     
        </div>
      </div>

      <div class="card-body">
        <h5 class="card-title"></h5>
        <div id="card-content">
            <div class="mb-3">
              <label for="" class="form-label">Desarrollador</label>
              <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="Ingrese desarrollador"
               onChange={(e) => setVideojuego({ ...videojuego, desarrollador: e.target.value })}/>
            </div>     
        </div>
      </div>

      <div class="card-body">
        <h5 class="card-title"></h5>
        <div id="card-content">
            <div class="mb-3">
              <label for="" class="form-label">Año</label>
              <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="Ingrese año"
               onChange={(e) => setVideojuego({ ...videojuego, año: e.target.value })}/>
            </div>     
        </div>
      </div>
      
      <div class="card-body">
        <h5 class="card-title"></h5>
        <div id="card-content">
            <div class="mb-3">
              <label for="" class="form-label">Peso</label>
              <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="Ingrese peso"
               onChange={(e) => setVideojuego({ ...videojuego, peso: e.target.value })}/> 
            </div>     
        </div>
      </div>   

      <button class="btn btn-primary" onClick={agregarVideojuego}>Agregar</button> 

    </div>

    
  )
}
// <button class="btn btn-primary">Suscribirse</button> 