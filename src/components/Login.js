/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const register = () => history.push("/register");
  return (
    <section className="text-gray-700 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Iniciar sesión
          </h1>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <input
                className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-green-500 text-base px-4 py-2"
                placeholder="Email"
                type="email"
              />
            </div>
            <div className="p-2 w-1/2">
              <input
                className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-green-500 text-base px-4 py-2"
                placeholder="Password"
                type="Password"
              />
            </div>
            <div className="p-2 w-full">
              <button className=" callToAction flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
                Ingresar
              </button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <span>
                <a className="text-green-500">No tienes una cuenta?</a>{" "}
                <a onClick={register} className="text-green-700">
                  registrate
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
