import React, { useState } from 'react';
import CartProduct from './CartProduct';

const ShoppingCart = ({ cart }) => {
    
    const [order, saveOrder] = useState({
        customer: '',
        total: '',
        items: []
      });

    return (
        <section className="text-gray-700 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {cart.map(item => (
                        <CartProduct key={item._id} cart={cart} product={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ShoppingCart;