import React from 'react'
import AddProduct from './AddProduct';
import ProductsList from './ProductsList';
import { useState } from "react";


export default function Admin() {

    const [productId, setProductId] = useState("");

    const getProductIdHandler = (id) => {
        console.log("The ID of document to be edited: ", id);
        setProductId(id);
    };
    return (
        <>
            <div className="container-fluid d-flex justify-content-start">
                <AddProduct id={productId} setBookId={setProductId} />
            </div>
            <div className="container">
                <hr className="text-warning border-2 opacity-50" />
            </div>
            <div className="container-fluid" style={{ width: "400px" }}>
                <ProductsList getProductId={getProductIdHandler} />
            </div>
        </>
    )
}
