import "../src/assets/scss/reset.scss";
import "../src/assets/scss/variables.scss";
import "./App.css";
import Sidebar from "./components/Sidebar";
import HomePage from "./routes/HomePage";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <HomePage />
    </div>
  );
}

export default App;
