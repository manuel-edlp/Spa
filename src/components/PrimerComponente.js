import React, { useState } from 'react';
import axios from 'axios';

export const PrimerComponente = () => {
    
    //let nombre = "manuel";
    let edad = 21;
    let lenguajes = ["C","C#","JavaScript","Java","Python"];
  
    const [nombre,setNombre] = useState("Manuel");
    const actualizar = (nuevo) => {setNombre(nuevo)};

    
  
    return (
    <div>
        
        <input onChange={e => actualizar(e.target.value)}placeholder='Cambia el nombre'></input>
        <button onClick={e => actualizar("Merequetengue")}>Tocame</button>
        <p>Nombre: {nombre}, {edad} años</p>
        <ul>
            {
                lenguajes.map((lenguaje,indice) => 
                {
                    return (
                        <li key={indice}>
                            {lenguaje}
                        </li>
                    )
                })
            
            }

        </ul>
    </div>
  )
}
