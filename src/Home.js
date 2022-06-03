import React from 'react'
import './Home.css'
// import Product from './Product'

export default function Home() {
    const mystyle = {
        width: "100 %",
        zIndex: "-1",
        marginBottom: "-150px",
    };
    return (
        <div className="home">
            <div className="home_container">
                <img className="img-fluid home_image" style={mystyle}
                    src="https://m.media-amazon.com/images/I/91RfzXVWFlL._SX3000_.jpg" alt="" />
                {/* <div className="home_row">
                    <Product
                        id="ABSPP001"
                        title="Boat 141"
                        price={29.99}
                        rating={5}
                        image="https://images-eu.ssl-images-amazon.com/images/I/31GUbeFG3FL._AC_SX184_.jpg"
                    />
                    <Product
                        id="ABSPP002"
                        title="Boat 141"
                        price={29.99}
                        rating={5}
                        image="https://images-eu.ssl-images-amazon.com/images/I/31GUbeFG3FL._AC_SX184_.jpg"
                    />
                </div>
                <div className="home_row">
                    <Product
                        id="ABSPP003"
                        title="Boat 141"
                        price={29.99}
                        rating={5}
                        image="https://images-eu.ssl-images-amazon.com/images/I/31GUbeFG3FL._AC_SX184_.jpg"
                    />
                    <Product
                        id="ABSPP004"
                        title="Boat 141"
                        price={29.99}
                        rating={5}
                        image="https://images-eu.ssl-images-amazon.com/images/I/31GUbeFG3FL._AC_SX184_.jpg"
                    />
                    <Product
                        id="ABSPP005"
                        title="Boat 141"
                        price={29.99}
                        rating={5}
                        image="https://images-eu.ssl-images-amazon.com/images/I/31GUbeFG3FL._AC_SX184_.jpg"
                    />
                </div>
                <div className="home_row">
                    <Product
                        id="ABSPP006"
                        title="Boat 141"
                        price={29.99}
                        rating={5}
                        image="https://images-eu.ssl-images-amazon.com/images/I/31GUbeFG3FL._AC_SX184_.jpg"
                    />
                </div> */}
            </div>
        </div>
    )
}
