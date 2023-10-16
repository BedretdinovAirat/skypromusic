import "./App.css";
import "./style.css";
import "./Header.css";
import "./Center.css";
import "./Footer.css";
import Navigation from "./components/Navigation";
import CenterBlock from "./components/CenterBlock";
import MainSideBar from "./components/MainSideBar";
import Bar from "./components/Bar";
import Footer from "./components/Footer";
import React from "react";
function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <Navigation />
          <CenterBlock />
          <MainSideBar />
        </main>
        <Bar />
        <Footer />
      </div>
    </div>
  );
}

export default App;

