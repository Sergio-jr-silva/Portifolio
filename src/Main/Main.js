import "./Main.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";


export default function Main() {
  return (
    <main className="main-section">
      <div className="overlay">
        <p>Olá, Visitante! 👋</p>
        <h1>Meu Nome é Sérgio Silva</h1>
        <p>Desenvolvedor FullStack</p>
        <div className="social-icons"> 
          <a href="https://www.linkedin.com/in/sergio-silvajr/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
          <a href="https://github.com/Sergio-jr-silva" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>
          <a href="mailto:juniosergio034@gmail.com">
            <FaEnvelope className="icon" /> 
          </a>
        </div>
      </div>
    </main>
  );
}