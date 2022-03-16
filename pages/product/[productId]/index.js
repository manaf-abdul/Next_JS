import {useRouter} from 'next/router'

function ProductDetail(){
    const router=useRouter();
    const ProductId=router.query.productId
    return<h1>Product Details of {ProductId}</h1>
}

export default ProductDetail