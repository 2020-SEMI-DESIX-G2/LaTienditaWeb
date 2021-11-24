/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useHistory } from "react-router-dom";

const Header = ({ userLogged, saveUserLogged, saveCart }) => {

  const history = useHistory();
  const about = () => history.push("/about");
  const index = () => history.push("/");
  const login = () => history.push("/login");
  const catalog = () => history.push("/catalog");

  const logOut = () => {
    saveUserLogged({
      key: null,
      usr: null
    })
    saveCart([]);
    index();
  }


  return (
    <div>
      <header className="text-gray-700 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img className="logito" src="https://i.imgur.com/oLZXE5T.jpg" alt="logo" />
            <span className="ml-3 text-xl">Dreams organic</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a onClick={index} className="mr-5 hover:text-gray-900 actionHand" id="inicio">
              Inicio
            </a>
            <a onClick={about} className="mr-5 hover:text-gray-900 actionHand" id="acerca">
              Acerca
            </a>
            {userLogged.key == null ? <a onClick={login} className="mr-5 hover:text-gray-900 actionHand" id="initsession">
              Iniciar sesion
            </a> 
            :<a onClick={logOut} className="mr-5 hover:text-gray-900 actionHand" id="closeSession">
                Cerrar sesion 
            </a>}
          </nav>
          <button id="comprar" onClick={catalog} className=" actionHand inline-flex items-center callToAction border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">
            Comprar
            <svg
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
