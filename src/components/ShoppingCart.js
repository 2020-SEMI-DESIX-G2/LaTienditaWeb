import React, { useState, Fragment, useEffect } from 'react';
import CartProduct from './CartProduct';
import PayPalCheckoutButton from './PayPalCheckoutButton';

const ShoppingCart = ({ cart, userLogged }) => {
    
    const cartProducts = cart;
    const itemsObject = [];
    let totalOrder = 0.00;
    const [order, saveOrder] = useState({
        customer: '',
        total: '0.00',
        items: []
    });

    const getTotal = () => {
        cartProducts.forEach(element => {
            totalOrder = totalOrder + element.price;
        });
        totalOrder = totalOrder.toString();
    }; 

    const assignItemsToOrder = () => {
        cartProducts.forEach(element => {
            let tempItem = {
                sku: element.code,
                name: element.name,
                price: element.price.toString(),
                quantity: 1,
                currency: 'USD'
            }
            itemsObject.push(tempItem);
        });
    }

    useEffect(() => {
        getTotal();
        assignItemsToOrder();
        saveOrder({
            customer: userLogged.usr.email,
            total: totalOrder,
            items: itemsObject
        })
    }, [])

    return (
        <Fragment>


            <section className="text-gray-700 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="unchinabajo lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h2 className="hidden lg:inline-block">Carrito de compra</h2>
                        <p className="mb-8 leading-relaxed">Estos son los productos que has agregado al carrito.</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {cart.map(item => (
                            <CartProduct key={item._id} product={item} />
                        ))}
                    </div>
                    <PayPalCheckoutButton order={order} />
                </div>
            </section>
        </Fragment>
    );
}

export default ShoppingCart;