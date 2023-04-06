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
  
 
  const toggleFavorite = (SelectedImgId) => {

    console.log(allPhotos, "when photo was not clicked")

    const updatedPhotos = allPhotos.map(photo => {

      if (photo.id === SelectedImgId) {

        const updatedPhoto = {
          ...photo,
          isFavorite: !photo.isFavorite
        };

        return updatedPhoto;
        
      } else {
        return photo
      }
    })

    
    setPhotos(updatedPhotos)
    console.log(updatedPhotos, "updated photos")
    console.log(`Toggled favorite for photo with id ${SelectedImgId}`)
  }
  

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
        <ContextProvider value={{allPhotos, error, isLoading, toggleFavorite}}>
          <Header />
          <Router />
        </ContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
