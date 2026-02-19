import React from "react";
import Search from "./components/Search";
import { useState } from "react";

const App = () => {

  const [searchTerm, setSearchTerm] = useState("");
  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <img src="/hero.png" alt="Hero Banner" />
          <h1>Find <span className="text-gradient"> Movies </span> You'll Enjoy Without the Hassle on <span className="text-gradient">CineHub</span></h1>
        </header>

        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <h1>{searchTerm ? `Search results for "${searchTerm}"` : null}</h1>
      </div>
    </main>
  );
};

export default App;


/* 1hr 07min */