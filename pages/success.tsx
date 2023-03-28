import SuccessPage from '@/Components/SuccessPage'
import { resetCart } from '@/redux/shoperSlice'; 
import { useSession } from 'next-auth/react';  
import { useRouter } from 'next/router';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

function Success() {
  const cartData = useSelector((state: any) => state.shoper.productData); 
  const {push} = useRouter();
  setTimeout(()=>{ 
      push('/'); 
  },2500)
 
  return (
    <div>
      <SuccessPage></SuccessPage>
    </div>
  )
}

export default Success

