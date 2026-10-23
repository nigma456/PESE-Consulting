import {
  FileProtectOutlined,
  FileZipOutlined,
  SolutionOutlined,
  ApartmentOutlined,
  AuditOutlined,
  ToolOutlined,
  NodeIndexOutlined,
  HomeOutlined,
} from '@ant-design/icons'

const scopes = [
  {
    icon: <FileZipOutlined />,
    title: 'Full Permit Package — up to 20 kW',
    desc: 'For rooftop, carport and ground-mounted projects within 20 kW we develop, seal and submit the complete permit package: structural, electrical and mechanical sheets including array layout design, single line diagram and building / racking drawings.',
    tags: ['Array Layout', 'Single Line Diagram', 'Racking Drawings'],
  },
  {
    icon: <FileProtectOutlined />,
    title: 'Commercial Structural Service — above 20 kW',
    desc: 'For commercial systems greater than 20 kW we provide the full structural service, including a sealed drawing set and the supporting calculation package submitted with it.',
    tags: ['Sealed Drawing Set', 'Calculation Submission'],
  },
  {
    icon: <SolutionOutlined />,
    title: 'Engineer of Record',
    desc: 'Assume Engineer of Record responsibility for the structural scope of a project — from load determination and member design through shop drawing review and AHJ correspondence.',
    tags: ['Load Determination', 'Shop Drawing Review', 'AHJ Liaison'],
  },
  {
    icon: <ApartmentOutlined />,
    title: 'Racking & Attachment Certification',
    desc: 'Product-level certification letters for rail and attachment systems, published with pre-certified span tables and attachment reactions across a range of wind, snow and seismic loads.',
    tags: ['Span Tables', 'Attachment Reactions'],
  },
  {
    icon: <AuditOutlined />,
    title: 'Existing-Building Capacity Review',
    desc: 'Structural reserve-capacity assessment of buildings that were never designed for solar, evaluated under the International Existing Building Code with per-building analytical models.',
    tags: ['IEBC', 'RISA Models', 'Roof Load Survey'],
  },
  {
    icon: <ToolOutlined />,
    title: 'Field Inspection & Special Structures',
    desc: 'On-site investigation, as-built survey, pile installation inspection and load rating reports prepared for authority sign-off on temporary and event structures.',
    tags: ['As-Built Survey', 'Pile Inspection', 'AHJ Sign-Off'],
  },
  {
    icon: <NodeIndexOutlined />,
    title: 'Complex Steel Connection Design',
    desc: 'Connection detailing and calculation preparation to AISC Construction Manual Part 13, checking all applicable failure modes for members and connection components.',
    tags: ['AISC CM Part 13', 'Failure Mode Checks'],
  },
  {
    icon: <HomeOutlined />,
    title: 'Residential Structural Development',
    desc: 'Gravity and lateral systems for contemporary residential work — wood frame, steel moment frames, timber shear walls, TJI joist floors and concrete flat slab analysis.',
    tags: ['Wood Frame', 'Moment Frame', 'Timber Shear Wall'],
  },
]

export default function ServiceScope() {
  return (
    <section className="service-scope">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Scope of Service</div>
          <h2 className="section-title">
            What We <span className="accent">Deliver</span>
          </h2>
          <p className="section-desc">
            Beyond analysis, the firm is set up to take a project from load definition to a
            sealed, submittable package — direct to the client, with no middle agent.
          </p>
        </div>
        <div className="scope-grid">
          {scopes.map((scope) => (
            <div key={scope.title} className="scope-card">
              <div className="scope-icon">{scope.icon}</div>
              <h3>{scope.title}</h3>
              <p>{scope.desc}</p>
              <div className="scope-tags">
                {scope.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
