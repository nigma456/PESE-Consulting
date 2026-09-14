import {
  ThunderboltOutlined,
  CloudOutlined,
  ExperimentOutlined,
  GlobalOutlined,
  CloudFilled,
  ReloadOutlined,
} from '@ant-design/icons'

const services = [
  {
    icon: <ThunderboltOutlined />,
    title: 'Solar Mounting System Design',
    desc: 'Complete racking and mounting system design using IronRidge products for pitched roofs, flat roofs, and ground-based installations. Full project documentation and certification.',
    img: '/img/bb016c368e6837363b32.jpg',
    tags: ['IronRidge XR System', 'QuickMount', 'Atlas Software'],
  },
  {
    icon: <CloudOutlined />,
    title: 'Wind Load Analysis (CFD)',
    desc: 'Computational fluid dynamics simulation of wind pressures on solar arrays. Precise pressure mapping over module surfaces for optimal mounting design.',
    img: '/img/10f5f29ba668ce21ef12.jpg',
    tags: ['ANSYS Fluent', 'ASCE 7', 'Wind Tunnel'],
  },
  {
    icon: <ExperimentOutlined />,
    title: 'Structural Analysis (FEA)',
    desc: 'Finite element analysis of mounting components, module clamps, and frame systems. Deformation and stress analysis under extreme loading conditions.',
    img: '/img/4aba92adde89485ced2a.jpg',
    tags: ['ANSYS Mechanical', 'Deformation', 'Stress Analysis'],
  },
  {
    icon: <ReloadOutlined />,
    title: 'Seismic Engineering',
    desc: 'Earthquake load analysis for solar structures in seismically active regions. Longitudinal and transverse seismic response evaluation per building codes.',
    img: '/img/b052a9bb6956a24e5fd6.jpg',
    tags: ['Seismic Design', 'AASHTO', 'Bridge Analysis'],
  },
  {
    icon: <CloudFilled />,
    title: 'Snow Load Engineering',
    desc: 'Extreme snow load engineering for installations in high-snow regions. Design validated for up to 420 psf ground snow load conditions.',
    img: '/img/752cc9bccf494f32a271.jpg',
    tags: ['420 psf Snow', 'Steep Roofs', 'ASCE 7'],
  },
  {
    icon: <GlobalOutlined />,
    title: 'Hurricane Zone Engineering',
    desc: 'High-wind load engineering for hurricane-prone coastal regions. Designs validated for wind speeds up to 195 mph in Cayman Islands and Guam.',
    img: '/img/bfe7ab795ab584d16380.jpg',
    tags: ['195 mph Wind', 'Hurricane Zone', 'Coastal'],
  },
]

export default function Services() {
  return (
    <section className="services">
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
          {services.map((service) => (
            <div key={service.title} className="service-card">
              <div className="service-img">
                <img src={service.img} alt={service.title} />
                <div className="service-img-overlay" />
                <div className="service-icon">{service.icon}</div>
              </div>
              <div className="service-body">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <div className="service-tags">
                  {service.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
