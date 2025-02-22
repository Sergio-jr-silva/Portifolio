import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
      <h1 className="logo">&lt; Sérgio <span className="highlight">Silva</span> /&gt;</h1>




        {/* Botão do menu para mobile */}
        <button
          className="menu-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="icon" /> : <Menu className="icon" />}
        </button>

        {/* Menu principal */}
        <ul className={`menu ${isOpen ? "menu-open" : ""}`}>
          <li><a href="#inicio" className="menu-item">Início</a></li>
          <li><a href="#sobre" className="menu-item">Sobre</a></li>
          <li><a href="#projetos" className="menu-item">Projetos</a></li>
          <li><a href="#contato" className="menu-item">Contatos</a></li>
        </ul>
      </div>
    </nav>
  );
}
