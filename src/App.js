import React from "react";
import Header from "./components/Header/index";
import "./App.scss";
import Headline from "./components/Headline/index";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <section className="main">
        <Headline header="Posts" desc="Click the button to render posts"></Headline>
      </section>
    </div>
  );
}

export default App;
