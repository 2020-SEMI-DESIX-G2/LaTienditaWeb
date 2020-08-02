/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const CartProduct = ({ item, product }) => {
    return (
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={product.image} />
            </a>
            <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Producto:</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">{product.name}</h2>
                <h4 className="text-gray-500 text-xs tracking-widest title-font mb-1">Precio:</h4>
                <p className="mt-1">${product.price}</p>
            </div>
        </div>
    );
}

export default CartProduct;