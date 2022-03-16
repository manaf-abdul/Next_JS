import Link from 'next/link'

function ProductPage({productId=100}){
    return(
        <>
        <Link href='/product/1'>
        <a>Product 0</a>
        </Link>
        <h1>Product 1</h1>
        <h1>Product 2</h1>
        <Link href={`/product/${productId}`}>
        <a>Product 3 {productId}</a>
        </Link>
        <h1>Product 3</h1>
        </>                                                                                                                                                                      
    )
}
export default ProductPage