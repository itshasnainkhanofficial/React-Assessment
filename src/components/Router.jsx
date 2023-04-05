import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Photos from '../Pages/Photos'
import Cart from '../Pages/Cart'
import PageNotFound from '../Pages/PageNotFound'

const Router = () => {
  return (
    <div>
        <Routes>
          
          <Route path="/" element={<Photos />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="*" element={<PageNotFound />} />

        </Routes>
    </div>
  )
}

export default Router