import { useState, useEffect } from "react";
import Navi from "./nav.jsx";
import HomePage from "./components/homepage.jsx";
import Clicked from "./components/clicked.jsx";
import Footer from "./components/footer.jsx";

function App() {
  if (defaultLoaded) {
    return (
      <div className="archContainer">
        <Navi />
        <HomePage />
        <Footer />
      </div>
    );
  } else if (!defaultLoaded) {
    return (
      <div className="archContainer">
        <Navi />
        <Clicked w its props />
        <Footer />
      </div>
    );
  }
}

export default App;
