
import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { minusQuantity, plusQuantity, deleteItem, resetCart } from '@/redux/shoperSlice'
import style from '../styles/Cart.module.css';
import CartItemCard from '@/Components/CartItemCard';
import EmptyCart from '@/Components/EmptyCart';
import Link from 'next/link';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
function MyCart() {
    const cartData = useSelector((state: any) => state.shoper.productData);
    const userInfo = useSelector((state: any) => state.shoper.userInfo);
    const dispatch = useDispatch();
    const total_qnty_in_cart = cartData.reduce((a: any, b: any) => a + b.quantity, 0)
    const subtotal_of_cart_item = cartData.reduce((a: any, b: any) => a + b.quantity * b.price, 0)
    const { data: session } = useSession();
    const stripePromise = loadStripe(process.env.stripe_publishable_key);
const {push} = useRouter();
    const handelCheckout = async () => {
        const stripe = await stripePromise;

        // create a checkout session 
        const checkoutSession = await axios.post("/api/create-checkout-session", {
            items: cartData,
            email: session?.user?.email,
        });
 
        const result: any = await stripe?.redirectToCheckout({
            sessionId: checkoutSession.data.id,
        });
        if (result?.error) {
            alert(result?.error.message);
        }
        else {
        dispatch(resetCart());
        } 
    }
    // Checkout 2 without stripe payment
       const handelCheckout2 = async()=>{

      let response=  await axios.post('/api/email',{
            items: cartData,
            user: session?.user,
          });
          if(response.status==200){
              console.log(response);
            setTimeout(async()=>{
              await  push('/success');
                dispatch(resetCart(cartData)); 
            },1000)
          }
    }
    return (
        <>

            <div className='container'>
                <div className="row">
                    <div className="col-12">
                        <p className={style.cart_page_heading}>
                            My Cart (<span> {total_qnty_in_cart} Item </span>)
                        </p>
                    </div>
                </div>
                {(cartData.length == 0) ? (
                    <EmptyCart></EmptyCart>
                ) : (<div className='row'>
                    <div className="col-lg-7">
                        {cartData.map((item: any) => (
                            <CartItemCard item={item}></CartItemCard>
                        ))}
                        <div className={style.reset_cart_btn}>
                            <button onClick={()=>dispatch(resetCart(cartData))}>Reset Cart</button>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className={style.cart_checkout_section}>
                            <div className="row">
                                <div className="col-6">
                                    <p className={style.total_item_in_checkout}>
                                        Total Item:
                                    </p>
                                </div>
                                <div className="col-6 ">
                                    <p className={style.total_item_in_checkout}>
                                        {total_qnty_in_cart}
                                    </p>
                                </div>
                                <div className="col-6">
                                    <p className={style.subtotal_of_cart_item}>
                                        Total Amount:
                                    </p>
                                </div>
                                <div className="col-6 ">
                                    <p className={style.subtotal_of_cart_item}>
                                        ₹ {subtotal_of_cart_item}
                                    </p>
                                </div>
                                <div className="col-12">
                                    <div className={`${style.checkout_btn}`}>
                                        {
                                            userInfo ?
                                                <button onClick={handelCheckout}>
                                                    Checkout
                                                </button>
                                                :
                                                <button style={{ "cursor": "not-allowed" }}>
                                                    Checkout
                                                </button>
                                        }

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                )
                }

            </div>
        </>
    )
}

export default MyCart
