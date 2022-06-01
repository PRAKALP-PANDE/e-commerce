import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import logo from "./PSP.png";
// import logo from "./PSP-logos_transparent.png";

export default function Header() {
    return (
        <div className='header'>
            <Link to="/">
                <img
                    className="header_logo"
                    src={logo} alt=""
                // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSDUmE6AHMslD6D_zZZo2HlJ81uU4ZkFB7rA&usqp=CAU" alt=""
                />
            </Link>

            <div className="header_search">
                <input className="header_searchinput" type="text" />
                <SearchIcon className="header_searchIcon" />
                {/* logo */}
            </div>
            <div className="header_nav">
                <Link to="/admin">
                    <div className="header_option">
                        <span className='header_optionLineOne'>hello Admin</span>
                        <span className='header_optionLineTwo'>Sign in</span>
                    </div>
                </Link>
                <div className="header_option">
                    <span className='header_optionLineOne'>Returns</span>
                    <span className='header_optionLineTwo'>Orders</span>
                </div>
                <div className="header_option">
                    <span className='header_optionLineOne'>Your</span>
                    <span className='header_optionLineTwo'>Prime</span>
                </div>

                <Link to="/yourcart">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header_optionLineTwo header_basketCount">0</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}
