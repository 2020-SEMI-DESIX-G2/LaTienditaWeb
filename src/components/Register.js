/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import EmptyFieldError from "./EmptyFieldError";
import RegisteredAlert from './RegisteredAlert';

const Register = () => {
  //states
  const [register, saveRegister] = useState({
    name: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
  });

  const [error, saveError] = useState(false);
  const [registerTrigger, saveRegisterTrigger] = useState(false);
  const [registered, saveRegistered] = useState(false);

  useEffect(() => {
    const callApi = () => {
      if (registerTrigger) {
        // POST request using fetch()
        fetch(`http://localhost:5000/api/register`, {
          // Adding method type
          method: "POST",

          // Adding body or contents to send
          body: JSON.stringify({
            name,
            lastName,
            username,
            password,
            email
          }),

          // Adding headers to the request
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          // Converting to JSON
          .then((response) => response.json())
          // Displaying results to console
          .then( (json) => {
            if (json.user){
              saveRegistered(true);
            }
          });
      }
    };
    callApi();
  }, [registerTrigger]);

  //extraer datos del registro
  const { name, lastName, username, password, email } = register;

  const handleChange = (e) => {
    saveRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //validar
    if (
      name.trim() === "" ||
      lastName.trim() === "" ||
      username.trim() === "" ||
      password.trim() === "" ||
      email.trim() === ""
    ) {
      saveError(true);
      return;
    }
    saveError(false);
    saveRegisterTrigger(true);
  };

  return (
    <section className=" byeDown text-gray-700 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Registrar usuario
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            {error ? <EmptyFieldError /> : null}
            {registered ? <RegisteredAlert/> : null}
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <input
                  className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-green-500 text-base px-4 py-2"
                  placeholder="Primer nombre"
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={handleChange}
                />
              </div>
              <div className="p-2 w-1/2">
                <input
                  className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-green-500 text-base px-4 py-2"
                  placeholder="Apellido"
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={lastName}
                  onChange={handleChange}
                />
              </div>
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
                  placeholder="Nombre de usuario"
                  type="text"
                  name="username"
                  id="username"
                  value={username}
                  onChange={handleChange}
                />
              </div>
              <div className="p-2 w-1/2">
                <input
                  className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-green-500 text-base px-4 py-2"
                  placeholder="Contraseña"
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={handleChange}
                />
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
                >
                  Ingresar
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
