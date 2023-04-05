import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Router from "./components/Router";
import { ContextProvider } from "./state/Context";
import { useEffect, useState } from "react";
import getData from './service/photosService'


function App() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const allPhotos = async () => {
    
    try {
 
      const photosData = await getData("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")

      setPhotos(photosData);
      setError(null);

    } catch (err) {

      setError(err.message);
      setPhotos(null);

    } finally {

      setIsLoading(false);

    }
  };

  useEffect(() => {

    allPhotos();

  }, []);

  return (
    <>
      <BrowserRouter>
        <ContextProvider value={{photos, error, isLoading}}>
          <Header />
          <Router />
        </ContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
