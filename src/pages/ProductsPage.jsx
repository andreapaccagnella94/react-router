import axios from "axios"
import { useState, useEffect } from "react"
import productsPage from "../data/ProductsData"
import { Link, NavLink } from "react-router-dom"

export default function ProductsPage() {

    const initialPage = productsPage
    // make a state variable where store the products list
    const [products, setProducts] = useState([])
    // NON SERVE LO USESTATE LA PAGINA DEI PRODOTTI è UNA SOLA const [currentPage, setCurrentPage] = useState(initialPage)

    function fetchData(page) {
        axios
            .get(page)
            .then(res => {
                // log per vedere
                // console.log(res.data);
                const products = res.data
                setProducts(products)
            })
            .catch(err => {
                console.error(err.message)
            })
    }

    useEffect(() => {
        fetchData(initialPage)
    }, [])

    return (
        <>
            <main>
                <div className="container text-center my-5">
                    <h1>PRODUCTS</h1>
                </div>
                <section>
                    <div className="container">
                        <div className="row g-4">
                            {products.map(product =>
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
                                    <div className="card h-auto">
                                        <Link to={`/products/${product.id}`}>
                                            <img src={product.image} className="card-img-top h-100"></img>
                                            <div className="card-body">
                                                <h5 className="card-title">{product.title}</h5>
                                                <p className="card-text">{product.description}</p>

                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}