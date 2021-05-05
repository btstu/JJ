import React from 'react'
import getproductsCB from '../api/api'
import ProductCard from '../components/Product/ProductCard'



const PageA = () => {
    let table = []
    const ActiveFunction = async () => {


        const result = await getproductsCB();
        const CB = JSON.parse(result)

        table = CB.Table[0].description


        return [table]
    }
    React.useEffect(() => {
        ActiveFunction()

    }, [])

    // 
    console.log([table])



    return (
        <div>



            <div className="flex"> <ProductCard /> </div>

        </div>
    )
}

export default PageA
