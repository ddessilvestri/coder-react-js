import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ItemCount } from './ItemCount'

export const Item = ({
  id
  ,title
  ,price
  ,stock
  ,minBuyOrder
  ,image
  ,product
  ,onHandleAddCartProduct
  ,cartProductsList
}) => {
  
  const navigate = useNavigate();
  const [controlsEnabled, setControlsEnabled] = useState(true);
  
  const onAddProducts = (counter) =>{
    const newProduct = [{...product, amount: counter}];

    if (cartProductsList && cartProductsList[id] && cartProductsList[id][0] && cartProductsList[id][0].amount){
      if (cartProductsList[id][0].amount >= stock){
        setControlsEnabled(false)
      } else{
        setControlsEnabled(true);
        onHandleAddCartProduct(newProduct); 
      }
    }else{
      
      setControlsEnabled(true);
      onHandleAddCartProduct(newProduct); 
    }


  }

  const onHandleSeeDetails = () => navigate(`/item/${id}`);
    
  
  return (
    <>
        <div className='item-container'>
            <div className='item-title'>
              <h3>{title}</h3> 
            </div>
            <div className='item-price'>              
              <h4>{`$  ${price}`}</h4>
            </div>
            <div className='item-image'>
              <img src= {image} alt='producto' className='product-image' />   
            </div>
            <div className='item-selectors'>             
              <ItemCount minBuyOrder={minBuyOrder} stockValue={stock} onAddProducts={onAddProducts} controlsEnabled={controlsEnabled}/>
            </div>
            <div className='item-title'>
              <button className='details-btn' onClick={onHandleSeeDetails}>Ver detalles</button>
            </div>
        </div>
    </>
  )
}
