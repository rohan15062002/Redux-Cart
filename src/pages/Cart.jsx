import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {remove} from '../Redux/Cartslice'

const Cart = () => {
  
  const dispatch=useDispatch();
  const cartitems = useSelector((state)=>state.cart)

  const handleRemove=(id)=>{
      dispatch(remove(id));
  }
  return (
    <div>
      <h3>Cart Page</h3>
    <div className='ProductsWrapper'>
      {
        cartitems.map((item)=>(
          <div className='cartCard' key={item.id}>
          <img src={item.image} alt='img' />
          <h4>{item.title}</h4>
          <h5>{item.price}</h5>
          <button className='btn' onClick={()=>handleRemove(item.id)}>Remove</button>
          </div>
        ))
      }
    </div>
    </div>
  )
}

export default Cart