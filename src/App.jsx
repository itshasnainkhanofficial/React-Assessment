// global css
import "./styles/reset.css";

import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Router from "./components/Router";
import { ContextProvider } from "./state/Context";
import { useEffect, useState } from "react";
import getData from "./service/photosService";

function App() {
  const [allPhotos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  // useEffect(() => { // to show the console of add to cart item
  //   console.log(cartItems, "all cart items");
  // }, [cartItems]);

  const toggleFavorite = (SelectedImgId) => {
    // toggle fovorite
    const updatedPhotos = allPhotos.map((photo) => {
      if (photo.id === SelectedImgId) {
        const updatedPhoto = {
          ...photo,
          isFavorite: !photo.isFavorite,
        };

        return updatedPhoto;
      } else {
        return photo;
      }
    });

    setPhotos(updatedPhotos);
  };

  // getting all posts from API
  const getAllPhotos = async () => {
    try {
      const photosData = await getData(
        "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
      );

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
        <ContextProvider
          value={{
            allPhotos,
            error,
            isLoading,
            toggleFavorite,
            cartItems,
            addToCart,
            setCartItems,
          }}
        >
          <Header />
          <Router />
        </ContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
