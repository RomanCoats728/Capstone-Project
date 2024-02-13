import React from "react";
import ReactDOM from "react";
import "./index.css";
import App from "./components/App";
import { AuthProvider } from "./api";
import { WebSocket } from "vite";



const server = require('http').createServer(app);


ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

