const conditions = [
  {
    key: 'A',
    title: 'Modules beyond the 6.7 ft size limit',
    desc: 'Engineering solutions for module sizes that exceed the 6.7 ft dimension prescribed by ASCE 7.',
  },
  {
    key: 'B',
    title: 'Placement inside the roof-edge zone',
    desc: 'Modules set immediately adjacent to roof edges, within the 2 × h₂ region where pressures are highest.',
  },
  {
    key: 'C',
    title: 'Height above the roof surface',
    desc: 'Arrays positioned above the 4 ft exposure limit over the roof surface.',
  },
  {
    key: 'D',
    title: 'Modules cantilevered past the edge',
    desc: 'Configurations extended beyond the roof edge, outside the published load provisions.',
  },
]

const gallery = [
  {
    img: '/img/method/clamp-nonlinear-stress.jpg',
    title: 'Clamp Nonlinear Capacity',
    desc: 'Von Mises stress in a stainless module clamp taken to the plastic range.',
  },
  {
    img: '/img/method/module-assembly-deformation.jpg',
    title: 'Assembly Interaction',
    desc: 'Module assembly response across multiple attachment supports.',
  },
  {
    img: '/img/method/seismic-time-history.jpg',
    title: 'Seismic Time History',
    desc: 'Deformation time history of an assembly under recorded ground motion.',
  },
  {
    img: '/img/method/fsi-pressure-mesh.jpg',
    title: 'Fluid–Structure Interaction',
    desc: 'Wind pressure imported from the fluid solution onto the solid model.',
  },
  {
    img: '/img/method/wind-pressure-contour.jpg',
    title: 'Surface Pressure Mapping',
    desc: 'Pressure contour over a module surface from wind tunnel simulation.',
  },
  {
    img: '/img/method/module-deformation-fea.jpg',
    title: 'Deformation with Module Flexibility',
    desc: 'Reaction distribution resolved together with module frame deformation.',
  },
]

export default function Method() {
  return (
    <section className="method">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Analysis Method</div>
          <h2 className="section-title">
            Beyond the <span className="accent">Spreadsheet</span>
          </h2>
          <p className="section-desc">
            Standard tools cover standard roofs. Where a project falls outside them, the
            answer comes from automated finite element pipelines, wind simulation and a
            careful reading of the code commentary.
          </p>
        </div>

        <div className="method-feature">
          <div className="method-feature-media">
            <img
              src="/img/method/apdl-racking-model.jpg"
              alt="ANSYS APDL automated racking analysis model"
              loading="lazy"
            />
          </div>
          <div className="method-feature-text">
            <h3>An In-House Automated Analysis Pipeline</h3>
            <p>
              A custom ANSYS APDL program automates the entire ground-mount racking analysis
              loop — geometric member modelling, load application, boundary condition
              assignment, meshing, member analysis, and the sorting and exporting of stresses
              and reactions.
            </p>
            <p>
              Because the pipeline runs unattended, it is used to sweep a very large collection
              of design cases and build a <strong>structural database</strong> for the whole
              design team: member sizes, span limits and footing depth are looked up directly
              against site wind, snow and seismic demand and the system tilt and clearance
              configuration.
            </p>
            <ul className="method-list">
              <li>Nonlinear yielding, ultimate resistance and buckling strength for stainless steel and aluminium components, cross-checked against ADM, AISI and AISC hand calculation</li>
              <li>Prototype test design — required test load, failure-mode safety factors, worst-case boundary conditions and FEA cross-validation</li>
              <li>One-way fluid–structure interaction using wind tunnel pressure data imported into the solid model</li>
              <li>Modal, frequency and seismic time-history response for assemblies in high-demand regions</li>
            </ul>
          </div>
        </div>

        <div className="method-conditions">
          <h3>Conditions Outside the Code Tables</h3>
          <p className="method-conditions-lead">
            Where a project falls beyond published specification limits, solutions are
            developed from an extensive review of code reference material rather than
            declined as non-standard.
          </p>
          <div className="cond-grid">
            {conditions.map((c) => (
              <div key={c.key} className="cond-card">
                <span className="cond-key">{c.key}</span>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="method-gallery">
          <h3>Analysis Gallery</h3>
          <div className="method-grid">
            {gallery.map((item) => (
              <figure key={item.title} className="method-card">
                <img src={item.img} alt={item.title} loading="lazy" />
                <figcaption>
                  <strong>{item.title}</strong>
                  <span>{item.desc}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
