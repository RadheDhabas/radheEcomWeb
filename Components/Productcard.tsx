 import React from 'react' 
import { AiOutlinePlus } from 'react-icons/ai';
import style from '../styles/Products.module.css'
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/shoperSlice';
import toast, {Toaster} from 'react-hot-toast';
function Productcard({item}:any) { 
    const dispatch = useDispatch();

  return ( 
    <div className="col-6 col-md-4 col-lg-3 mb-3">
    <div className={style.product_card} key={item._id}>
        <div className={style.product_listin_img}>
            <img src={item.image} className='img-fluid' alt="" />
        </div>
        <p className={style.product_name}>
            {item.title}
        </p>
        <div className={style.price_addtocart}>
            <span>₹  {item.price} </span>
            <button className={style.addtocartbtn} onClick={()=>
            dispatch( addToCart({
                _id:item._id,
                title:item.title,
                price:item.price,
                image:item.image,
                category:item.category,
                quantity:1
            })
            ) && toast.success('Added to Cart!') }> 
                <AiOutlinePlus></AiOutlinePlus> Cart
            </button>
        </div>
    </div>
    <Toaster
  position="bottom-center"
  reverseOrder={false}
/>
</div>
  )
}

export default Productcard
