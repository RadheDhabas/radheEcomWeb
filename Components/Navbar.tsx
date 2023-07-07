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
                <div className="container d-flex justify-content-between">
                    <Link href={'/'}>
                        <img src="https://t3.ftcdn.net/jpg/02/47/48/00/240_F_247480017_ST4hotATsrcErAja0VzdUsrrVBMIcE4u.jpg" className={style.navbar_brand} alt="" />
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
