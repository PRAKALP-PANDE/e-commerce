import React from 'react'
import { useCart } from 'react-use-cart';

const Cartitem = (props) => {
    const {addItem} = useCart();
    return (
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div className="card p-0 overflow-hidden h-199 shadow">
                <img src={props.img} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <h5 className="card-text">{props.price}</h5>
                    <p className="card-text">{props.desc}</p>
                    <button className="btn btn-success" onClick={()=>addItem(props.item)}>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Cartitem;