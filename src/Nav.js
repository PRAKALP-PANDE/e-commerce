import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import logo from "./PSP.png";

export default function Nav() {
    return (
        <div>
            <nav className="navbar navbar-dark navbar-expand-lg " style={{ backgroundColor: "#131921" }}>
                <div className="container-fluid">
                    <Link to="/">
                        <img src={logo} alt="HealtHelp" width="70" height="40" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <div className="d-flex flex-column mb-3 mx-2" style={{ color: "white" }}>
                                    <div>Hello</div>
                                    <div className="fw-bold">Select your address</div>
                                </div>
                            </li>
                            <form className="d-flex p-2" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ width: "50rem" }} />
                                <button className="btn btn-outline-success" type="submit">
                                    <SearchIcon /></button>
                            </form>
                        </ul>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2">
                                <Link to="/admin">
                                    <div className="d-flex flex-column" style={{ color: "white" }}>
                                        <div>Hello Admin</div>
                                        <div className="fw-bold">Sign in</div>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item mx-2">
                                <div className="d-flex flex-column" style={{ color: "white" }}>
                                    <div>Returns</div>
                                    <div className="fw-bold">Order</div>
                                </div>
                            </li>
                            <li className="nav-item mx-2">
                                <div className="d-flex flex-column" style={{ color: "white" }}>
                                    <div>Your</div>
                                    <div className="fw-bold">Prime</div>
                                </div>
                            </li>
                            <li className="nav-item mx-2">
                                <Link to="/yourcart">
                                    <div className="d-flex flex-column" style={{ color: "white" }}>
                                        <ShoppingBasketIcon />
                                        <div className="fw-bold">Cart</div>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
