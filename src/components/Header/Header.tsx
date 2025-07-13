import { Container } from './styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState } from 'react'
import Resume from '../../assets/Updated-Resume.pdf'

const NavHashLinkComponent = NavHashLink as any;
const HashLinkComponent = HashLink as any;

export function Header() {
  const [isActive, setActive] = useState(false)
  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0]
    html.classList.toggle('light')
  }
  function closeMenu() {
    setActive(false)
  }
  return (
    <Container className="header-fixed">
      <Router>
        <HashLinkComponent smooth to="#home" className="logo">
          <span>{"<Aditya Koushik V/>"}</span>
        </HashLinkComponent>
        <input
          onChange={toggleTheme}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
        />
        <label htmlFor="switch">Toggle</label>
        <nav className={isActive ? 'active' : ''}>
          <NavHashLinkComponent smooth to="#home" onClick={closeMenu}>
            Home
          </NavHashLinkComponent>
          <NavHashLinkComponent smooth to="#about" onClick={closeMenu}>
            About me
          </NavHashLinkComponent>
          {/* <NavHashLinkComponent smooth to="#project" onClick={closeMenu}>
            Project
          </NavHashLinkComponent> */}
          <NavHashLinkComponent smooth to="#contact" onClick={closeMenu}>
            Contact
          </NavHashLinkComponent>
          <a href={Resume} download className="button">
            Resume
          </a>
        </nav>
        <div
          aria-expanded={isActive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isActive ? 'Fechar menu' : 'Abrir menu'}
          className={isActive ? 'menu active' : 'menu'}
          onClick={() => {
            setActive(!isActive)
          }}
        ></div>
      </Router>
    </Container>
  )
}
