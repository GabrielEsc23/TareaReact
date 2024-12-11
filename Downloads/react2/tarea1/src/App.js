import React from 'react';
import './App.css';


function App() {
  return (
    

    
    <div className="app">
      {/* Datos personales */}
      <h2>Datos Personales</h2>
      <p>Nombre: Gabriel Escobar</p>
      <p>Dirección: Av. Ladrón de Guevara E11-253, Quito 170143</p>
      <p>Teléfono: 0912345678</p>
      <p>Correo Electrónico:edison.escobar01@epn.edu.ec</p>

      {/* Lista de estudios */}
      <h2>Estudios Realizados</h2>
      <ol>
        <li>Bachillerato General Unificado</li>
        <li>Tecnologia Superior en Desarrollo de Software</li>
        
      </ol>

      {/* Lista de herramientas */}
      <h2>Herramientas Utilizadas</h2>
      <ul>
        <li>Python</li>
        <li>C++</li>
        <li>HTML y CSS</li>
        <li>SQL</li>
      </ul>

      {/* Galería de deportes */}
      <h2>Galería de Deportes Favoritos</h2>
      <div className="imagenes">
        <div>
          <p>Fútbol</p>
          <img src="/futbol.jpg" alt="Fútbol" />
          
        </div>
        <div>
          <p>Baloncesto</p>
          <img src="/baloncesto.jpg" alt="Baloncesto" />
          
        </div>
        <div>
           <p>Natación</p>
          <img src="/natacion.jpg" alt="Natación" />
          
        </div>
      </div>
    </div>
    
  );
}

export default App;
