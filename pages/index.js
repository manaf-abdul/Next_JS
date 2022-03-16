import Link from 'next/link'
import {useRouter} from 'next/router'

function Home(){
    const router=useRouter()

    const handleClick=()=>{
        console.log('placing Order')
        router.push('/product')
    }

    return (<>
    <h1>HomePage</h1>
    <Link href='/product'>
        <a>Product</a>
    </Link>
    <Link href='/blog'>
        <a>Blog</a>
    </Link><Link href='/product/sweater' replace>
        <a>Sweater</a>
    </Link>
    <button onClick={handleClick}>Place Order</button>
    </>
    )
}

export default Home