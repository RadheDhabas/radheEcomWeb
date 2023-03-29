import React from 'react' 
import Image from 'next/image'
import style from '../styles/Success.module.css'
import {useSession} from 'next-auth/react';
function SuccessPage() {
     const {data:session} = useSession(); 
    
  return (
    <div className={style.successpage_body}>
      <Image src={'/success.gif'} height={200} width={200} alt="Picture of the author"></Image>
      <div className={style.success_text}>
        Order Placed Successfully
      </div>
    </div>
  )
}

export default SuccessPage
