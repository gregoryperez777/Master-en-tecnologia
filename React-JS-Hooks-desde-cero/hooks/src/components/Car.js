import React, { useState } from 'react';

const Car = () => {

    const [started, setStarted] = useState(false);
    const [countKm, setCountKm] = useState(0); 

    const checkStatedCar = () => started
        ? <span style={{color: 'green'}}>Encendido</span> 
        : <span style={{color: 'red'}}>Apagado</span>;

    const increasetKm = num => {
       if (started) {
           setCountKm(countKm + num);
       } else {
           alert('El coche esta apagado');
       }
    }

    return (
        <div>
            <h2>El Carro esta {checkStatedCar()}</h2>
    <h2>Kilometros recorridos {countKm} Km</h2>
            <button onClick={() => setStarted(!started)}>Encender / apagar</button>
            <button onClick={() => increasetKm(5)}>Incrementar Kilometros</button>
        </div>
    );
}

export default Car;