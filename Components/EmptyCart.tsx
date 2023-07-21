import Link from 'next/link'
import React from 'react'
import style from '../styles/Cart.module.css';
function EmptyCart() {
  return (
    <div className={style.empty_cart}>
      <p>{process.env.mail}</p>
     <p className={style.empty_cart_heading}>
     Your shopping cart is Empty!
     </p>
     <p className={style.empty_cart_subheading}>
     Time to start shopping!
     </p>
     <div className='text-center mt-4 pt-4'>
     <Link href={'/'}>
        Start Shoping
     </Link>
     </div>
    </div>
  )
}

export default EmptyCart
