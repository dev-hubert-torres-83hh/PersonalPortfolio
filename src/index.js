import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa ReactDOM para renderizar la aplicación
//import './index.css'; // Importa el archivo CSS global (si lo tienes, para estilos base o Tailwind CSS)
import App from './App'; // Importa el componente principal de tu aplicación

// Crea una raíz de renderizado concurrente para tu aplicación React
// Esto es parte de la API de React 18 para un mejor rendimiento
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza el componente <App /> dentro del elemento con id="root"
// <React.StrictMode> es un componente que ayuda a identificar problemas potenciales en la aplicación
root.render(
  <React.StrictMode>
    <App /> {/* Aquí se renderiza tu componente principal de la aplicación */}
  </React.StrictMode>
);