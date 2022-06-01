import React from 'react';
import { CartProvider } from 'react-use-cart';
import Cart from './cart/Cart';
import Carthome from './cart/Carthome';

export default function Yourcart() {
    return (
        <div>
            <CartProvider>
                <Carthome />
                <Cart />
            </CartProvider>
        </div>
    )
}
