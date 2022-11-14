import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { Home, Detail, Cart, Category } from '../pages'

export const AppRouter = ({onHandleAddCartProduct,cartProductsList,onRemoveProducts}) => {
  return (
    <>

       <Routes>
            <Route exact path="/"  element={<Home onHandleAddCartProduct = {onHandleAddCartProduct} cartProductsList={cartProductsList}/>} />            
            <Route exact path="/category/:id" element={<Category onHandleAddCartProduct = {onHandleAddCartProduct} cartProductsList={cartProductsList}/>} />
            <Route exact path="/item/:id" element={<Detail onHandleAddCartProduct = {onHandleAddCartProduct}/>} />
            <Route exact path="/cart" element={<Cart cartProductsList />} />
            <Route path="*" element={<Navigate to="/" /> } />
        </Routes>
        
    </>
  )
}
