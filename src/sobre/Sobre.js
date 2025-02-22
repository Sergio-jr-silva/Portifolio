import "./Sobre.css";
import csharp from '../images/csharp.png';
import mysql from '../images/mysql.png';
import react from '../images/reactjs.png';
import dotnet from '../images/donet.png';
import java from '../images/java.webp';
import node from '../images/nodejs.png';

export default function Sobre() {
  const technologies = [
    { name: "C#", img: csharp },
    { name: "MySQL", img: mysql },
    { name: "React.js", img: react },
    { name: ".NET", img: dotnet },
    { name: "Node.js", img: node },
    { name: "Java", img: java },
  ];

  return (
    <section className="about-section" id="sobre">
      <div className="about-content">
        <h2 className="about-title">Sobre mim</h2>
        <p className="about-description">
          Apaixonado por desenvolvimento de software, 
          com sólida experiência em criação de soluções robustas e escaláveis que 
          otimizam processos e impulsionam o desempenho organizacional. Meu foco 
          está em entregar sistemas confiáveis e eficientes que atendam às 
          necessidades do negócio com inovação e qualidade.
        </p>
      </div>

      {/* Linha laranja decorativa */}
      <div className="about-line"></div>

      {/* Mini Cards das Tecnologias */}
      <div className="tech-container">
        {technologies.map((tech, index) => (
          <div key={index} className="tech-card">
            <img src={tech.img} alt={tech.name} className="tech-image" />
            <span className="tech-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
