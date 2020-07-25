import React from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Testimonial from './components/Testimonial'
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Testimonial/>
      <Footer />
    </div>
  );
}

export default App;
