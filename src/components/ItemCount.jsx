import React from 'react'
import { useState } from 'react'

export const ItemCount = ({minBuyOrder = 1, stockValue = undefined , onAddProducts }) => {

  const [counter, setCounter] = useState(minBuyOrder);

  const onSubtract = () =>{

    if (counter > minBuyOrder)
        setCounter(previousCounter => previousCounter - 1);
  }
  
  const onAdd = ()=>{

    if (!stockValue || stockValue < 1)
        return;

    if (stockValue && counter < stockValue)
        setCounter(previousCounter => previousCounter + 1);
    
  }

  const onChangeProducts = (e) => {     
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {        
        setCounter(e.target.value);
    }
  }

  
  return (
    <>
    <div className='item-count-container'>

        <button className='counter-button subtract-button' onClick={onSubtract}>-</button>
        <input className='input-counter' type='text' value={counter} onChange={onChangeProducts}></input>
        <button className='counter-button add-button'  onClick={onAdd}>+</button>
        <button className='add-product' onClick={onAddProducts(counter)}>Agregar al carrito</button>
  
    </div>
    </>
  )
}