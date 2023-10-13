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
function App() {
  return (
    // <div classNameName="App">
    //   "Здесь скоро будет Skypro.Music"
    // </div>
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
