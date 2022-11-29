import React, { useState , useContext, useEffect } from 'react'

import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { ItemCount } from './ItemCount'

export const Item = ({
  id
  ,name
  ,price
  ,stock
  ,minBuyOrder
  ,image
  ,product
}) => {
  
  const { addItem , products } =  useContext(CartContext);

  const navigate = useNavigate();

  const [availableStock, setAvailableStock] = useState(stock)
  const onHandleSeeDetails = () => navigate(`/item/${id}`);

  const onAddProducts = (counter) =>{
    addItem(product , counter);  
  }

  useEffect(() => {
    const productInCart = products.find(item => item.id === id);
    if ( !!productInCart ){

      setAvailableStock(productInCart.stock - productInCart.quantity);
    }
  }, [products])
  
  return (
    <>

        <div className='card' >
            <div className="card-content">
              <p className='card-name'>{name}</p>
              <p className='card-price'>{`$  ${price}`}</p>
            </div>
            <div className="card-image-container">
                <img className="card-image" src={image} alt={name} />
            </div>
            
            <div className="card-content">              
                <p className='card-available-products'>{`Stock Disponible: ${availableStock}`}</p>
                <div className='card-selectors'>
                  <ItemCount minBuyOrder={minBuyOrder} stockValue={availableStock} onAddProducts={onAddProducts} />
                </div>
                <p className=''>  
                  <button className='details-btn' onClick={onHandleSeeDetails}>Ver +</button>
                </p>
            </div>
        </div>

    </>
  )
}
