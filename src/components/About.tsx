import { CheckCircleFilled } from '@ant-design/icons'

const capabilities = [
  'IronRidge Certified Design Partner',
  'ASCE 7 Wind & Snow Load Compliance',
  'ANSYS FEA & CFD Simulation',
  'UL 2703 / 2703A Standards',
  'ISO 9001 Quality Management',
  'NABCEP Certified Engineering',
]

export default function About() {
  return (
    <section className="about">
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
  )
}
