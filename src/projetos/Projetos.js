import "./Projetos.css";
import ProjetoTintas from '../images/ProjetoTintas.png';
import gilsonshop from '../images/gilsonshop.png';
import Construção from '../images/construcao.png';
export default function Projeto() {
  const projects = [
    {
      name: "Controle de Tintas Manipuladas",
      image: ProjetoTintas,
      description:
        "Sistema para controle e monitoramento de tintas manipuladas, permitindo cadastro de erros, cálculo de perdas e geração de relatórios em PDF.",
      technologies: ["C#", ".NET", "MySQL", "Railway"],
    },
    {
      name: "Website GS Pinturas & Serviços",
      image: gilsonshop,
      description:
        "Website desenvolvido em ReactJS para a empresa GS Pinturas e Serviços focada em destacar os serviços de pintura e manutenção com um design moderno, responsivo e cheio de personalidade.",
      technologies: ["React.js", "TypeScript", "JavaScript"],
    },
    {
      name: "Em Construção",
      image: Construção,
      description:
        "Projeto Em Fase de Desenvolvimento 🎨🛠️ .",
      technologies: [ "indefined"],
    },
  ];

 
  const techColors = {
    "C#": "#68217a",
    ".NET": "#512bd4",
    "MySQL": "#00758f",
    "React.js": "#61dafb",
    "Node.js": "#83cd29",
    "JavaScript": "#f7df1e",
    "TypeScript": "#3178c6",
    "Railway": "#5505c5",
    "indefined": "#990cs2"
  };

  return (
    <section className="projects-section" id="projetos">
      <h2 className="projects-title">
        <span className="line"></span> Projetos <span className="line"></span>
      </h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.name} className="project-image" />
            <div className="project-info">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-techs">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="tech-badge"
                    style={{ backgroundColor: techColors[tech] }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
