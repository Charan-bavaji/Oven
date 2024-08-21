import React from "react"
import "./Header2.css"
const Headers2 = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Home</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/products">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/account">Account</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Login/sigin</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/cart" > Cart</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Headers2;