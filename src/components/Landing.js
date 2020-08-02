/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";


const Landing = () => {

  const history = useHistory();
  const catalog = () => history.push("/catalog");
  return (
    <Fragment>
      <section className="bgGreen text-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Nuestros productos
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed">
              <p>Dale el mejor cuidado a tu cuerpo
              con nuestra linea de productos naturales.</p> <br /> <p>Preparamos un producto especial a tu necesidad que te cambiará desde su primer uso.</p>
            </p>
            <div className="flex justify-center">
              <button onClick={catalog} className="inline-flex text-white callToAction border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Ver mas
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://i.imgur.com/lNHXe1f.jpg"
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Landing;
