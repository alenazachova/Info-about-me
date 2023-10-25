import "./App.css";
import { Footer } from "./layout/Footer";
import { Buttons } from "./components/Buttons";
import { Header } from "./components/Header";
import { Texts } from "./components/Texts";

function App() {
  return (
    <div className="container">
      <Header />
      <Buttons />
      <Texts />
      <Footer />
    </div>
  );
}

export default App;
