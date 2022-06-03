import React from 'react'
import { doc } from "firebase/firestore";


export default function Proditem(props) {
    const mystyle = {
        width: "18rem",
        height: "18rem",
      };
    let { title, price, status, image, rating } = props;
    return (
        <div className='my-3'>
            <div className="card">
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0'
                }} >
                </div>
                <img src={!image ? "https://bitsofco.de/content/images/2018/12/broken-1.png" :image} className="card-img-top" style={mystyle} alt="404 Error" />
                <div className="card-body">
                    <p className="card-title">{title}</p>
                    <p className="card-text"><small>₹</small><strong>{price}</strong></p>
                    <p className="card-text">Status: {status}</p>
                </div>
                {/* <button onClick={() => addItem(doc.item)}>Add to basket</button> */}
                <button className="btn btn-success">Add to cart</button>
            </div>
        </div>
    )
}
