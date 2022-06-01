import { doc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import ProductDataService from "../services/product.services";
import { useCart } from "react-use-cart";
import Proditem from "./Proditem";
// import Cart from "./Cart";
// import './DisplayProducts.css';

const Productitems = ({ getProductId }, props) => {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const data = await ProductDataService.getAllProducts();
        console.log(data.docs);
        setProduct(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    return (
        <>
            <div className="container my-4">
                <div className='row'>
                    {products.map((doc) => {
                        return <div className='col-md-3' key={doc.id}>
                            <Proditem title={doc.title ? doc.title : ""} price={doc.price ? doc.price : ""} image={doc.image ? doc.image : ""} status={doc.status ? doc.status : ""} />
                        </div>
                    })}
                </div>
            </div>
        </>
    );
};

export default Productitems;