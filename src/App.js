import "../src/assets/scss/reset.scss";
import "./App.css";
import Sidebar from "./components/Sidebar";
import AboutMe from "./routes/AboutMe";
// import HomePage from "./routes/HomePage";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        {/* <HomePage /> */}
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
