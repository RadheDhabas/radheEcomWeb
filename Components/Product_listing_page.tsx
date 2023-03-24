import { Item } from '@/type';
import React from 'react' 
import Productcard from './Productcard';

function Product_listing_page({ productData }: any) { 
   
    return (
        <div>
            <div className="container pt-4">
                <div className="row">
                    {
                        productData.map((item: Item) => (
                           <Productcard item={item}></Productcard>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Product_listing_page
