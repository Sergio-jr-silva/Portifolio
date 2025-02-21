import "./App.css";
import Navbar from "./NavBar/Navbar";
import Main from "./Main/Main";
import Sobre from "./sobre/Sobre";
import Projetos from "./projetos/Projetos";
import Footer from "./footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Sobre />
      <Projetos />
      <Footer />
    </>
  );
}

export default App;
