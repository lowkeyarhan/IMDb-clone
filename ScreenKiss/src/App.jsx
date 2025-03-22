import "./App.css";
import React from "react";
import NavBar from "./components/navBar.jsx";
import Banner from "./components/banner.jsx";
import Movies from "./components/movies.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Movies />
    </>
  );
}

export default App;
