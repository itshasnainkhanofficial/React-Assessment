import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ContextProvider } from "./state/Context";


const Photos = []

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <React.StrictMode>
    <ContextProvider value={Photos}>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
