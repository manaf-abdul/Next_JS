import {useRouter} from 'next/router'

function Doc(){
    const router=useRouter()
    const {params=[]}=router.query
    console.log(params)
    return(<>
    <h1>Document Model</h1>

    <h1>{params[0]}</h1>

    <h1>{params[1]}</h1>
    </>
    )
}

export default Doc