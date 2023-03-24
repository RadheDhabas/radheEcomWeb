import React, { ReactElement } from 'react' 
import Navbar from './Navbar'
interface Props {
    children:ReactElement;
}

const Layout = ({children}:Props)=> {
  return (
 <>
 <Navbar></Navbar>
 <main>{children}</main> 
 </>
  )
}
export default Layout

 
