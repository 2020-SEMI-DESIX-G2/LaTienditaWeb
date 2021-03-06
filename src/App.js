import React, {useState} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import Catalog from './components/Catalog';
import ShoppingCart from './components/ShoppingCart';


function App() {
  const [userLogged, saveUserLogged] = useState({
    key: null,
    usr: null
  });
  
  const [cart, saveCart] = useState([]);

        /**
       *  customer:userLogged.usr.email ,
        total: getTotal(),
        items: [] 
       */
  return (
    <div className="App">
      <BrowserRouter>
      <Header userLogged={userLogged} saveUserLogged={saveUserLogged} saveCart={saveCart} />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login"  render={(props) => <Login {...props} userLogged={userLogged} saveUserLogged={saveUserLogged} />}  />
          <Route exact path="/register" component={Register} />
          <Route exact path="/catalog" render={(props) => <Catalog {...props} userLogged={userLogged} cart={cart} saveCart={saveCart} />} />
          <Route exact path="/cart" render={(props) => <ShoppingCart {...props} cart={cart} userLogged={userLogged} />} />
        </Switch>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
