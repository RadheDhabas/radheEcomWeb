import Product_listing_page from '@/Components/Product_listing_page';
import { Item } from '@/type';
import { useRouter } from 'next/router' 
interface Props {
    productData: Item
}
function Category({ productData }: any) {
    const router = useRouter();   
       let productCat= productData.filter((i: Item) => {
            return (i.category == router.query.category)
        }
        )
        if(router.pathname==''){
            productCat = productData;
        }
  
    return (
        <> 
            <Product_listing_page productData={productCat}></Product_listing_page>
        </>
    )
}
export const getServerSideProps = async () => {
    const productData = await (await fetch('https://radhe-ecom-web.vercel.app/api/productdata')).json();
    return {
        props: { productData },
    }
}
export default Category
