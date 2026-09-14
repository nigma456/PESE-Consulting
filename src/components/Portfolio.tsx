const portfolioItems = [
  {
    img: '/img/98ee6c503fdd7d47fb54.jpg',
    title: 'Wind Pressure Contour Mapping',
    desc: 'CFD simulation showing wind pressure distribution across a tilted solar module surface, with pressure values ranging from +17.88 to -38.18 psi.',
    category: 'CFD Analysis',
  },
  {
    img: '/img/7cdc599174444582c8e1.jpg',
    title: 'Module Clamp Capacity Analysis',
    desc: 'ANSYS static structural analysis of solar panel module clamp showing total deformation of 0.171 inches under maximum load conditions.',
    category: 'FEA Simulation',
  },
  {
    img: '/img/4aba92adde89485ced2a.jpg',
    title: 'Modular Panel Deformation Study',
    desc: 'FEA total deformation analysis of a modular panel structure showing maximum deflection of 0.207 inches with reaction force distribution.',
    category: 'FEA Simulation',
  },
  {
    img: '/img/b052a9bb6956a24e5fd6.jpg',
    title: 'Seismic Response Analysis',
    desc: 'ANSYS earthquake longitudinal loading analysis of a multi-span elevated structure showing normalized pressure distribution under seismic forces.',
    category: 'Seismic Engineering',
  },
  {
    img: '/img/10f5f29ba668ce21ef12.jpg',
    title: 'Wind Tunnel Fluid-Structure Interaction',
    desc: 'Computational fluid dynamics simulation of wind loads on structures, analyzing solid/fluid interaction for aerodynamic performance validation.',
    category: 'CFD Analysis',
  },
  {
    img: '/img/33109797312784440f18.jpg',
    title: 'Steep Roof Solar Installation',
    desc: 'Solar panel array installed on gambrel, mansard, and sawtooth roof geometries — demonstrating engineering solutions for challenging roof slopes.',
    category: 'Complex Roof Systems',
  },
  {
    img: '/img/73742850e00ae142f599.jpg',
    title: 'Curved Roof System Engineering',
    desc: 'Solar mounting solutions for complex curved and barrel-vaulted roof architectures, adapting standard racking to organic building forms.',
    category: 'Complex Roof Systems',
  },
  {
    img: '/img/752cc9bccf494f32a271.jpg',
    title: 'Extreme Snow Load Design',
    desc: 'Engineering validation for solar installations in regions with up to 420 psf ground snow load, using steep conical roofs for snow shedding.',
    category: 'Snow Load Engineering',
  },
]

export default function Portfolio() {
  return (
    <section className="portfolio">
      <div className="container">
        <div className="section-header">
          <div className="section-tag light">Engineering Portfolio</div>
          <h2 className="section-title light">
            Simulation & <span className="accent">Analysis Showcase</span>
          </h2>
          <p className="section-desc light">
            A selection of our computational engineering work — CFD wind simulations,
            FEA structural analyses, and real-world installation case studies.
          </p>
        </div>
        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <div key={item.title} className="portfolio-card">
              <div className="portfolio-img">
                <img src={item.img} alt={item.title} />
                <div className="portfolio-overlay">
                  <span className="portfolio-category">{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
