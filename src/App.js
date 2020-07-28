import React, {useState} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';


function App() {
  const [userLogged, saveUserLogged] = useState({
    key: ""
  });
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login"  render={(props) => <Login {...props} saveUserLogged={saveUserLogged} />}  />
          <Route exact path="/register" component={Register} />
        </Switch>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
