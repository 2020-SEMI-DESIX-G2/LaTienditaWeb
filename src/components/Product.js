/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect} from 'react';

const Product = ({ item, product, cart, saveCart, userLogged }) => {

    const updateCart = () => {
        saveCart([...cart, product]);
    }

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
                {userLogged.key ? 
                <button onClick={updateCart} className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-sm">
                    Agregar al carrito
                </button>
                : null
                }
            </div>
        </div>
    );
}

export default Product;