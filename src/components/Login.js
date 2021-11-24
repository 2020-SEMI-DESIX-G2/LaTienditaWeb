/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import EmptyFieldError from "./EmptyFieldError";
import LoggedInAlert from './LoggedInAlert';

const Login = ({ userLogged , saveUserLogged }) => {
  //states
  const [loginTrigger, saveLoginTrigger] = useState(false);
  const [error, saveError] = useState(false);
  const [loginData, saveLoginData] = useState({
    email: "",
    password: "",
  });
  //se sacan los valores de loginData
  const { email, password } = loginData;


  useEffect(() => {
    const callLoginApi = () => {
      if (loginTrigger) {
        // POST request using fetch()
        fetch("http://localhost:5000/api/login", {
          // Adding method type
          method: "POST",

          // Adding body or contents to send
          body: JSON.stringify({
            email,
            password
          }),

          // Adding headers to the request
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          // Converting to JSON
          .then((response) => response.json())
          // Displaying results to console
          .then((json) => {
            saveUserLogged({
              key: json.tkn,
              usr: json.usr
            });
          });
          
      }
    };
    callLoginApi();
  }, [loginTrigger]);

  //se ejecuta cuando un valor cambia en el form
  const handleChange = (e) => {
    saveLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  //se ejecuta cuando se hace submit
  const handleSubmit = (e) => {
    e.preventDefault();
    //validar
    if (
      password.trim() === "" ||
      email.trim() === ""
    ) {
      saveError(true);
      return;
    }
    saveError(false);
    saveLoginTrigger(true);
  };

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
          <form onSubmit={handleSubmit}>
          {error ? <EmptyFieldError /> : null}
          {userLogged.key!=null ? <LoggedInAlert /> : null }
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <input
                  className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-green-500 text-base px-4 py-2"
                  placeholder="Email"
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div className="p-2 w-1/2">
                <input
                  className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-green-500 text-base px-4 py-2"
                  placeholder="Password"
                  type="Password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={handleChange}
                />
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  id="ingresar"
                  className=" callToAction flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
                >
                  Ingresar
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                { userLogged.key!= null ? null : 
                <span>
                  <a className="text-green-500">No tienes una cuenta?</a>{" "}
                  <a onClick={register} className="actionHand text-green-700">
                    registrate
                  </a>
                </span>
                 }
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
