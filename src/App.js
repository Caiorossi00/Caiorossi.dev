import React, { useState } from "react";
import "../src/assets/scss/reset.scss";
import "./App.css";
import Sidebar from "./components/Sidebar";
import AboutMe from "./routes/AboutMe";
import HomePage from "./routes/HomePage";
// import Projects from "./routes/Projects";
// import Stack from "./routes/Stack";
// import Contact from "./routes/Contact";

function App() {
  const [activePage, setActivePage] = useState("home");

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <HomePage />;
      case "about":
        return <AboutMe />;
      // case "projects":
      //   return <Projects />;
      // case "stack":
      //   return <Stack />;
      // case "contact":
      //   return <Contact />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="App">
      <Sidebar setActivePage={setActivePage} />
      <div className="main-content">{renderPage()}</div>
    </div>
  );
}

export default App;
