import { Link } from 'react-router-dom'
import './footer.css'
import { links, socialIcons } from './footer-data'

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-content container">
          <div className="footer-upper ">
            <div className="footer-logo">
              <img src="./footerLogo.svg" alt="Vica logo" />
            </div>
            <div className="footer-links">
              <ul>
                {links.map((link) => (
                  <Link to={link.path} key={link.title}>
                    {link.title}
                  </Link>
                ))}
              </ul>
              <hr className="hr-link" />
            </div>
            <div className="footer-icons">
              {socialIcons.map((icon) => {
                return (
                  <Link key={icon.title} to={icon.href}>
                    <img src={icon.imgSrc} alt={icon.title} />
                  </Link>
                )
              })}
            </div>
          </div>
          <hr className="hr-link-mobile" />
          <p className="footer-rights">
            COPYRIGHT © 2023 Vica solutions, ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  )
}
export default Footer
