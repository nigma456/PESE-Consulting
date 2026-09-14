import { Link } from 'react-router-dom'
import { ArrowRightOutlined, CheckCircleFilled } from '@ant-design/icons'
import Hero from '../components/Hero'
import ServiceArea from '../components/ServiceArea'

const previewServices = [
  { title: 'Solar Mounting Design', desc: 'Complete racking & mounting system design using IronRidge products.', img: '/img/bb016c368e6837363b32.jpg' },
  { title: 'Wind Load Analysis (CFD)', desc: 'CFD simulation of wind pressures on solar arrays with precise pressure mapping.', img: '/img/10f5f29ba668ce21ef12.jpg' },
  { title: 'Structural Analysis (FEA)', desc: 'Finite element analysis of mounting components under extreme loading.', img: '/img/4aba92adde89485ced2a.jpg' },
]

const capabilities = [
  'IronRidge Certified Design Partner',
  'ASCE 7 Wind & Snow Load Compliance',
  'ANSYS FEA & CFD Simulation',
  'UL 2703 / 2703A Standards',
  'ISO 9001 Quality Management',
  'NABCEP Certified Engineering',
]

export default function Home() {
  return (
    <>
      <Hero />

      <section className="about home-preview">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <div className="section-tag">About Us</div>
              <h2 className="section-title">
                Engineering Excellence in <span className="accent">Solar Mounting Solutions</span>
              </h2>
              <p className="section-desc">
                PESE Consulting is a specialized engineering firm providing comprehensive
                design and analysis services for solar mounting systems. We partner with
                industry-leading manufacturers like IronRidge to deliver code-compliant,
                structurally optimized installations across the United States.
              </p>
              <p className="section-desc">
                Our team combines deep expertise in structural engineering, computational
                fluid dynamics, and finite element analysis to solve the most challenging
                solar installation scenarios — from hurricane zones to extreme snow loads,
                from complex curved roofs to utility-scale ground mounts.
              </p>
              <div className="about-capabilities">
                {capabilities.map((cap) => (
                  <div key={cap} className="capability-item">
                    <CheckCircleFilled className="capability-icon" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="read-more-link">
                Learn More About Us <ArrowRightOutlined />
              </Link>
            </div>
            <div className="about-visual">
              <div className="about-img-main">
                <img src="/img/10f5f29ba668ce21ef12.jpg" alt="Wind tunnel load simulation" />
                <div className="about-img-caption">
                  Wind tunnel CFD simulation per solid/fluid interaction
                </div>
              </div>
              <div className="about-img-secondary">
                <img src="/img/98ee6c503fdd7d47fb54.jpg" alt="Wind pressure contour map" />
                <div className="about-img-caption">
                  Wind pressure contour map over module surface
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services home-preview">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Our Services</div>
            <h2 className="section-title">
              Comprehensive <span className="accent">Engineering Solutions</span>
            </h2>
            <p className="section-desc">
              From computational simulation to code-compliant design, we provide end-to-end
              engineering services for solar mounting systems in any environment.
            </p>
          </div>
          <div className="services-grid">
            {previewServices.map((service) => (
              <div key={service.title} className="service-card">
                <div className="service-img">
                  <img src={service.img} alt={service.title} />
                  <div className="service-img-overlay" />
                </div>
                <div className="service-body">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="home-cta-center">
            <Link to="/services" className="read-more-link">
              View All Services <ArrowRightOutlined />
            </Link>
          </div>
        </div>
      </section>

      <ServiceArea />

      <section className="home-cta-section">
        <div className="container">
          <div className="home-cta-box">
            <h2>Ready to Start Your Engineering Project?</h2>
            <p>Contact PESE Consulting today for a personalized quote and project plan.</p>
            <Link to="/contact">
              <button className="hero-btn-primary">
                Get a Quote <ArrowRightOutlined />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
