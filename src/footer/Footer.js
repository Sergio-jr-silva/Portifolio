import "./Footer.css";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

export default function Footer() {
  const contacts = [
    {
      name: "E-mail",
      value: "juniosergio034@gmail.com",
      link: "mailto:juniosergio034@gmail.com",
      icon: <Mail className="contact-icon" />,
    },
    {
      name: "GitHub",
      value: "github.com/Sergio-jr-silva",
      link: "https://github.com/Sergio-jr-silva",
      icon: <Github className="contact-icon" />,
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/sergio-silvajr",
      link: "https://linkedin.com/in/sergio-silvajr",
      icon: <Linkedin className="contact-icon" />,
    },
    {
      name: "Telefone",
      value: "+55 81 98574-7810",
      link: "tel:+5581985747810",
      icon: <Phone className="contact-icon" />,
    },
  ];

  return (
    <footer className="footer" id="contato">
      <h2 className="footer-title">
        <span className="line"></span> Contatos <span className="line"></span>
      </h2>

      <div className="contact-container">
        {contacts.map((contact, index) => (
          <a key={index} href={contact.link} className="contact-card" target="_blank" rel="noopener noreferrer">
            {contact.icon}
            <div className="contact-info">
              <h3 className="contact-name">{contact.name}</h3>
              <p className="contact-value">{contact.value}</p>
            </div>
          </a>
        ))}
      </div>

      <p className="footer-copy">&copy; {new Date().getFullYear()} Sérgio Silva. Todos os direitos reservados.</p>
    </footer>
  );
}
