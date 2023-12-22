import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './style/index.css'
import { BrowserRouter, createBrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
  