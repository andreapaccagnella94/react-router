import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import productsPage from "../data/ProductsData"

export default function SingleProductPage() {

    const { id } = useParams()
    const singleProductPage = `${productsPage}/${id}`
    const [product, setProduct] = useState(null)

    function fetchData(page) {
        axios
            .get(page)
            .then(res => {
                // log per vedere
                // console.log(res.data);
                const product = res.data
                setProduct(product)
            })
            .catch(err => {
                console.error(err.message)
            })
    }

    useEffect(() => {
        // fetchData(endpoin)
        setTimeout(() => {

            fetchData(singleProductPage)
        }, 2000)
    }, [singleProductPage])

    return (

        <>
            <div>

                {product != null ?
                    (
                        <div> ok {id}</div>

                    ) :
                    (
                        <div> loading....</div>
                    )}
            </div>
        </>
    )
}