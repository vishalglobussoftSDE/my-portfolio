import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'
import instagramIcon from '../../assets/instagram.svg'

export function Footer() {
  return (
    <Container className="footer">
      <a href="https://vishal.in" className="logo">
        <span>www.Vishal</span>
        <span>vishwakarma.in</span>
      </a>

      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
        </p>
      </div>

      <div className="social-media">
        {/* LinkedIn */}
        <a
          href="https://in.linkedin.com/in/vishal-vishwakarma-aa17ba215"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>

        {/* Personal GitHub */}
        <a
          href="https://github.com/vishal2806"
          target="_blank"
          rel="noreferrer"
          title="Personal GitHub"
        >
          <img src={githubIcon} alt="Personal GitHub" />
        </a>

        {/* Office GitHub */}
        <a
          href="https://github.com/vishalglobussoftSDE"
          target="_blank"
          rel="noreferrer"
          title="Office GitHub"
        >
          <img src={githubIcon} alt="Office GitHub" />
        </a>

        {/* Whatsapp */}
        <a
          href="https://api.whatsapp.com/send/?phone=%2B919630576848&text=Hello++I+found+your+contact+through+portfolio+site.%0A%0A"
          target="_blank"
          rel="noreferrer"
          title="WhatsApp"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/.in"
          target="_blank"
          rel="noreferrer"
          title="Instagram"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  )
}
