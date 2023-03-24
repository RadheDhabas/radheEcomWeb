import React from 'react'
import style from '../styles/Cart.module.css';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { minusQuantity, plusQuantity, deleteItem } from '@/redux/shoperSlice'
function CartItemCard(itemc:any) {
    const dispatch = useDispatch();
    const item = itemc.item;
  return (
    <div className={style.cart_item_card}>
    <div className='row'>
        <div className="col-3">
            <div className={style.cart_item_img}>
                <img src={item.image} className='img-fluid' alt="" />
            </div>
        </div>
        <div className="col-7 d-flex flex-column">
            <div className={style.cart_item_title}>
                {item.title}
            </div>
            <div className={style.inc_dec_cart_item}>
                <div>
                    <button className={style.remove_item_btn} onClick={() => dispatch(deleteItem({ _id: item._id }))}>Remove</button>
                </div>
                <div>
                    <button onClick={() => dispatch(minusQuantity({
                        _id: item._id,
                        title: item.title,
                        price: item.price,
                        image: item.image,
                        category: item.category,
                        quantity: item.quantity
                    }))}>
                        <AiOutlineMinus></AiOutlineMinus>
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(plusQuantity({
                        _id: item._id,
                        title: item.title,
                        price: item.price,
                        image: item.image,
                        category: item.category,
                        quantity: item.quantity
                    }))}>
                        <AiOutlinePlus></AiOutlinePlus>
                    </button>
                </div>

            </div>
        </div>
        <div className="col-2 d-flex flex-column justify-content-center p-0">
           {/* <div className={style.price_of_item}>₹{item.price}</div>  */}
           <div className={style.subtotel_of_item}>₹{item.price*item.quantity}</div>
        </div>
    </div>

</div>
  )
}

export default CartItemCard
