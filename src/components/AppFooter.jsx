import { Link, NavLink } from "react-router-dom"

export default function AppFooter() {

    return (
        <>
            <footer className="bg-dark py-5 text-white">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
                        <div className="col">
                            <h3>Fake Shop</h3>
                            <p>This is a sample site for an online store.</p>
                        </div>
                        <div className="col">
                            <h3>Menu</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/products">Products</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                            <h3>Cockies</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="">Home</a>
                                </li>
                                <li>
                                    <a href="">Home</a>
                                </li>
                                <li>
                                    <a href="">Home</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}