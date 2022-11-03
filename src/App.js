import "./App.css";
import BodyApp from "./components/BodyApp";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";

export default function App() {
  function saludar() {
    alert("hola chiques");
  }

  function funcionLogin() {
    alert("algo importante sobre el login");
  }
  return (
    <div>
      <Navbar conBoton={true} color={"#ddd"} funcionLogin={funcionLogin} />
      <ItemListContainer greeting={"prueba"} />
      <BodyApp />
      <Footer />
    </div>
  );
}
