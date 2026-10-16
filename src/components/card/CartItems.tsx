import React from 'react'
import { Product } from '../../utilities/types/productInterface'

interface CartItemsProps {
  item: Product;
}

function CartItems({ item }: Readonly<CartItemsProps>) {
  return (
    <div>
      <img src={item.images[0]} alt={item.title} className='w-24 h-24' />
      <h2>{item.title}</h2>
      <span>{item.price}</span>
    </div>
  )
}

export default CartItems