import { doc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import ProductDataService from "../services/product.services";
import { useCart } from "react-use-cart";
import Cart from "./Cart";
// import './DisplayProducts.css';

const Productitems = ({ getProductId }, props) => {
    const { addItem } = useCart();
    const [products, setProduct] = useState([]);
    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const data = await ProductDataService.getAllProducts();
        console.log(data.docs);
        setProduct(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const deleteHandler = async (id) => {
        await ProductDataService.deleteProduct(id);
        getProducts();
    };
    return (
        <>
            <div className="card">
                <div className="card-body">
                    {products.map((doc, index) => {
                        return (
                            <div key={doc.id}>
                                {/* <div className="card" style={{ width: "18rem" }}>

                  <h5 className="card-title">{doc.title}</h5>
                  <img src="https://images-eu.ssl-images-amazon.com/images/I/31GUbeFG3FL._AC_SX184_.jpg" className="card-img-top" alt="..." />
                  <p className="card-text">₹{doc.price}</p>
                  <p className="card-text">Status: {doc.status}</p>
                  <button>Add to basket</button>
                </div> */}

                                {/* <div className='container'>
                  <div className='row'>
                    <div className='col-md-4'> */}
                                <div className="product">
                                    <div className="product_info">
                                        <p>{doc.title}</p>
                                        <p className="product_price">
                                            <small>₹</small>
                                            <strong>{doc.price}</strong>
                                        </p>
                                        <p className="card-text">Status: {doc.status}</p>
                                        {/* <div className="product_rating">
                      {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                      ))}
                    </div> */}
                                    </div>
                                    <img src={doc.image} alt="" />
                                    {/* <button onClick={() => addItem(doc.item)}>Add to basket</button> */}
                                    <button href="/" className="btn btn-success" onClick={()=>addItem(doc)}>Add to cart</button>

                                </div>
                                {/* </div>
                  </div>
                </div> */}

                            </div>
                        );
                    })}
                </div>
            </div>
            <Cart />
        </>
    );
};

export default Productitems;