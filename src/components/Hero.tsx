import { Link } from 'react-router-dom'
import { ArrowRightOutlined, ThunderboltOutlined } from '@ant-design/icons'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src="/img/bb016c368e6837363b32.jpg" alt="Solar farm installation" />
        <div className="hero-overlay" />
      </div>
      <div className="hero-content">
        {/* <div className="hero-logo">
          <img src="/logo-light.svg" alt="PESE Consulting" />
        </div> */}
        <p className="hero-subtitle">Engineering Solution Services</p>
        <p className="hero-tagline">
          Professional engineering solutions for solar mounting systems —
          wind load analysis, structural engineering, seismic design, and complex roof installations.
        </p>
        <div className="hero-cta">
          <Link to="/services">
            <button className="hero-btn-primary">
              <ThunderboltOutlined /> Our Services
            </button>
          </Link>
          <Link to="/contact">
            <button className="hero-btn-outline">
              Contact Us <ArrowRightOutlined />
            </button>
          </Link>
        </div>
      </div>
      <div className="hero-stats">
        <div className="stat-item">
          <span className="stat-number">20+</span>
          <span className="stat-label">Years Experience</span>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <span className="stat-number">700+</span>
          <span className="stat-label">Projects Completed</span>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <span className="stat-number">30+</span>
          <span className="stat-label">States Served</span>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <span className="stat-number">100%</span>
          <span className="stat-label">Code Compliant</span>
        </div>
      </div>
    </section>
  )
}
