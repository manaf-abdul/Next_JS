import {useRouter} from 'next/router'

function reviewDetaisl(){
    const router=useRouter();
    const {productId,reviewId}=router.query
    return(<>
        <h1>Product Number:{productId}</h1>
        <h1>Review Number:{reviewId}</h1>
        </>
    )
}

export default reviewDetaisl