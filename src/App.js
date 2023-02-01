import Home from "./pages/home/home";
import "./App.css";
import AppRouting from "./router/router";
import NavbarMain from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div>
      <NavbarMain />
      <AppRouting />
      <Footer />
    </div>
  );
}

export default App;
