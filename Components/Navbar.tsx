import React, { useEffect } from 'react'
import style from '../styles/Home.module.css'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {BiDownArrow} from 'react-icons/bi';
import { FaLock } from 'react-icons/fa'
import Myaccount from './Myaccount';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import {useSession,signIn,signOut} from 'next-auth/react';
import { addUser, removeUser } from '@/redux/shoperSlice';
function Navbar() {
    const {data:session} = useSession(); 
    const cartData = useSelector((state: any) => state.shoper.productData);
    const total_qnty_in_cart = cartData.reduce((a: any, b: any) => a + b.quantity, 0);

    const dispatch = useDispatch();
    useEffect(()=>{
        if(session){
          dispatch(addUser({
            name:session.user?.name,
            email:session.user?.email,
            image:session.user?.image
          }))
        }
        else {
            dispatch(removeUser());
        }
    },[session,dispatch]);
const userInfo = useSelector((state:any)=>state.shoper.userInfo);
    return (
        <>
            <div className={style.custom_navbar}>
                <div className="container d-flex justify-content-between align-items-center">
                    <Link href={'/'}>
        <svg aria-label="Vercel Inc." fill="var(--geist-foreground)" height="20" role="img" viewBox="0 0 283 64"><path d="M37 0l37 64H0L37 0zM159.6 34c0-10.3-7.6-17.5-18.5-17.5s-18.5 7.2-18.5 17.5c0 10.1 8.2 17.5 19.5 17.5 6.2 0 11.8-2.3 15.4-6.5l-6.8-3.9c-2.1 2.1-5.2 3.4-8.6 3.4-5 0-9.3-2.7-10.8-6.8l-.3-.7h28.3c.2-1 .3-2 .3-3zm-28.7-3l.2-.6c1.3-4.3 5.1-6.9 9.9-6.9 4.9 0 8.6 2.6 9.9 6.9l.2.6h-20.2zM267.3 34c0-10.3-7.6-17.5-18.5-17.5s-18.5 7.2-18.5 17.5c0 10.1 8.2 17.5 19.5 17.5 6.2 0 11.8-2.3 15.4-6.5l-6.8-3.9c-2.1 2.1-5.2 3.4-8.6 3.4-5 0-9.3-2.7-10.8-6.8l-.3-.7H267c.2-1 .3-2 .3-3zm-28.7-3l.2-.6c1.3-4.3 5.1-6.9 9.9-6.9 4.9 0 8.6 2.6 9.9 6.9l.2.6h-20.2zM219.3 28.3l6.8-3.9c-3.2-5-8.9-7.8-15.8-7.8-10.9 0-18.5 7.2-18.5 17.5s7.6 17.5 18.5 17.5c6.9 0 12.6-2.8 15.8-7.8l-6.8-3.9c-1.8 3-5 4.7-9 4.7-6.3 0-10.5-4.2-10.5-10.5s4.2-10.5 10.5-10.5c3.9 0 7.2 1.7 9 4.7zM282.3 5.6h-8v45h8v-45zM128.5 5.6h-9.2L101.7 36 84.1 5.6h-9.3L101.7 52l26.8-46.4zM185.1 25.8c.9 0 1.8.1 2.7.3v-8.5c-6.8.2-13.2 4-13.2 8.7v-8.7h-8v33h8V36.3c0-6.2 4.3-10.5 10.5-10.5z"></path></svg>
                    </Link>

                    <div className={style.categories}>
                        <ul className={style.categories_list}>
                            <li className='nav-item'>
                                <Link className='nav-link' href={"/"}>
                                    Products
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' href={`/cat1`} >
                                    Product 1
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' href='/cat2' >
                                    Product 2
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' href={`/cat3`} >
                                    Product 3
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={style.login_cart_btn}>
                        <span className={style.item_in_cart}>{total_qnty_in_cart}</span>
                        <ul className={style.categories_list}>
                            <li className='nav-item'>
                                <Link className='nav-link' href={"/mycart"} style={{ "fontSize": "25px" }}>
                                    <AiOutlineShoppingCart></AiOutlineShoppingCart>
                                </Link>
                            </li>
                            <li className='nav-item'>
                               {
                                userInfo?
                                (
                                    <Link className={style.myaccount_btn} onClick={()=>signOut()} href={'/'} >My Account</Link>
                                )
                                :
                                (
                                    <button className={style.login_btn} onClick={()=>signIn()}>SignIn </button>
                                )
                               }
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={style.categories_for_mob}>
                <ul className={style.categories_list}>
                    <li className='nav-item'>
                        <Link className='nav-link' href={"/"}>
                            Products
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' href={`/cat1`} >
                            Product 1
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' href='/cat2' >
                            Product 2
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' href={`/cat3`} >
                            Product 3
                        </Link>
                    </li>
                </ul>
            </div>
 
        </>
    )
}

export default Navbar
