import "./App.css";
import Buttons from "./components/Buttons";
import Intro from "./components/Intro";
import Texts from "./components/Texts";
import Socials from "./components/Socials";

function App() {
  return (
    <div className="main-container">
      <div className="container">
        <Intro />
        <Buttons />
        <Texts />
        <Socials />
      </div>
    </div>
  );
}

export default App;
