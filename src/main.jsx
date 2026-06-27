import React from "react";
import ReactDOM from "react-dom/client";

// Importação dos recursos visuais usados no projeto.
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

// Estilos gerais e componente principal da aplicação.
import "./index.css";
import App from "./App.jsx";

// Ponto inicial onde o React renderiza todo o site.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
