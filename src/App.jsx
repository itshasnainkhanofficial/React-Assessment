import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Router from "./components/Router";
import { ContextProvider } from "./state/Context";
import { useState } from "react";

function App() {
  const [photos, setPhotos] = useState([]);

  return (
    <>
      <BrowserRouter>
        <ContextProvider value={photos}>
          <Header />
          <Router />
        </ContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
