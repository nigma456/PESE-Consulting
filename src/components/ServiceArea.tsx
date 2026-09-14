import { EnvironmentOutlined, CheckCircleFilled } from '@ant-design/icons'

const highlights = [
  'Coastal hurricane zones (Cayman Islands, Guam — up to 195 mph wind)',
  'High snow load regions (up to 420 psf ground snow)',
  'Seismically active zones (earthquake engineering)',
  'Complex and curved roof architectures nationwide',
]

export default function ServiceArea() {
  return (
    <section className="service-area">
      <div className="container">
        <div className="service-area-grid">
          <div className="service-area-map">
            <img src="/img/fb8015f50364451d4c7f.jpg" alt="PESE Consulting service area map" />
            <div className="map-badge">
              <EnvironmentOutlined />
              <span>30+ States Served</span>
            </div>
          </div>
          <div className="service-area-text">
            <div className="section-tag light">Service Area</div>
            <h2 className="section-title light">
              Nationwide <span className="accent">Engineering Coverage</span>
            </h2>
            <p className="section-desc light">
              PESE Consulting provides engineering services across more than 30 U.S. states,
              with specialized expertise for the most demanding environmental conditions.
              From hurricane-prone coastal regions to extreme snow zones, we deliver
              code-compliant designs wherever your project is located.
            </p>
            <div className="service-highlights">
              {highlights.map((h) => (
                <div key={h} className="highlight-item">
                  <CheckCircleFilled className="highlight-icon" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
