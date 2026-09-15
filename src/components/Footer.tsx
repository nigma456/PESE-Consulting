import { Link } from 'react-router-dom'

const footerSections = [
  {
    title: 'Services',
    links: [
      { label: 'Solar Mounting Design', path: '/services' },
      { label: 'Wind Load Analysis', path: '/services' },
      { label: 'Structural Analysis (FEA)', path: '/services' },
      { label: 'Seismic Engineering', path: '/services' },
      { label: 'Snow Load Engineering', path: '/services' },
      { label: 'Hurricane Zone Design', path: '/services' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'Pitched Roof Systems', path: '/products' },
      { label: 'Flat Roof Systems', path: '/products' },
      { label: 'Ground-Based Systems', path: '/products' },
      { label: 'IronRidge XR Rails', path: '/products' },
      { label: 'QuickMount Products', path: '/products' },
      { label: 'Design Tools', path: '/products' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', path: '/about' },
      { label: 'Engineering Portfolio', path: '/projects' },
      { label: 'Service Area', path: '/about' },
      { label: 'Certifications', path: '/about' },
      { label: 'Contact', path: '/contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src="/logo-light.svg" alt="PESE Consulting" />
            </Link>
            <p className="footer-desc">
              Engineering Solution Services for solar mounting systems.
              Professional design, analysis, and certification across the United States.
            </p>

          </div>
          {footerSections.map((section) => (
            <div key={section.title} className="footer-col">
              <h4>{section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <div className="footer-copyright">
            © {new Date().getFullYear()} PESE Consulting. All rights reserved.
          </div>
          <div className="footer-meta">
            <span>Domain by GoDaddy</span>
            <span className="dot">·</span>
            <span>Hosted on Google Cloud</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
