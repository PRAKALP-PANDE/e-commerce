import React, {useEffect, useState} from 'react';
import { useCart } from 'react-use-cart';
import ProductDataService from "../services/product.services";
import { doc } from "firebase/firestore";


const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    const [products, setProduct] = useState([]);
    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const data = await ProductDataService.getAllProducts();
        console.log(data.docs);
        setProduct(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    if (isEmpty) return <h1 className="text-center">Your cart is empty</h1>
    return (
        <section>
            <div className="py-4 container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h5>Cart ({totalUniqueItems}) total Items: ({totalItems}) </h5>
                        <table className="table table-light table-hover m-0">
                            <tbody>
                                {products.map((doc, index) => {
                                    return (
                                        <tr key={doc.id}>
                                            <td>
                                                <img src={doc.img} style={{ height: '6 rem' }} />
                                            </td>
                                            <td>{doc.title}</td>
                                            <td>{doc.price}</td>
                                            <td>Quantity ({doc.quantity}) </td>
                                            <td>
                                                <button
                                                    className="btn btn-info ms-2"
                                                    onClick={() => updateItemQuantity(doc.id, doc.quantity - 1)}
                                                >-</button>
                                                <button
                                                    className="btn btn-info ms-2"
                                                    onClick={() => updateItemQuantity(doc.id, doc.quantity + 1)}
                                                >+</button>
                                                <button className="btn btn-danger ms-2" onClick={() => removeItem(doc.id)}>Remove Item</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;