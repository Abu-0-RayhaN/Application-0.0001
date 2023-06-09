import React from "react";
import "./App.css";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  Whatgpt3,
  Header,
} from "./containers";
import { Brand, Cta, Navbar } from "./components";
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatgpt3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
