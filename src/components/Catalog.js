/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, Fragment } from 'react';
import Product from './Product';
import NotLoggedAlert from './NotLoggedAlert';

const Catalog = ({userLogged, cart , saveCart }) => {
    const [productList, saveProducts] = useState([]);

    useEffect(() => {

        const consultar = async () => {
            const url = 'http://localhost:5000/api/products';
            const response = await fetch(url);
            const result = await response.json();
            saveProducts(result.products)
        }
        consultar();
    }, []);

    return (
        <Fragment>
            <section className="bgGreen text-gray-700 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="text-center mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Nuestros productos</h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Algunas de las caracteristicas de nuestros productos son:</p>
                    </div>
                    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium">Hecho con ingredientes 100% naturales</span>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium">Cambios desde la primera aplicación</span>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium">Coloring Book Ethical</span>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium">Typewriter Polaroid Cray</span>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium">Pack Truffaut Blue</span>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium">The Catcher In The Rye</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="text-gray-700 body-font">
                <div className="container px-5 py-24 mx-auto">
            { userLogged.key == null ? <NotLoggedAlert/> : null  }
                    <div className="flex flex-wrap -m-4">
                        {productList.map(item => (
                            <Product key={item._id} cart={cart} saveCart={saveCart} product={item} userLogged={userLogged} />
                        ))}
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default Catalog;