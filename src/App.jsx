// global css
import './styles/reset.css'


import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Router from "./components/Router";
import { ContextProvider } from "./state/Context";
import { useEffect, useState } from "react";
import getData from './service/photosService'


function App() {
  const [allPhotos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const getAllPhotos = async () => {
    
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

    getAllPhotos();

  }, []);

  return (
    <>
      <BrowserRouter>
        <ContextProvider value={{allPhotos, error, isLoading}}>
          <Header />
          <Router />
        </ContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
