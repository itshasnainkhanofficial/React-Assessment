import { BrowserRouter, Routes, Route } from "react-router-dom";
import Photos from "./Pages/Photos";
import Cart from "./Pages/Cart";
import PageNotFound from "./Pages/PageNotFound";
import Header from './components/Header'
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>

        <Header />

        <Routes>
          <Route path="/" element={<Photos />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="*" element={<PageNotFound />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
