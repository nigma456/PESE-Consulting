import {
  CheckCircleFilled,
  SafetyCertificateOutlined,
  AuditOutlined,
  DeploymentUnitOutlined,
  ReadOutlined,
} from '@ant-design/icons'

const roles = [
  {
    title: 'Lead Structural Engineer, PE & SE',
    points: [
      'Engineer of Record on 300+ residential, commercial and utility solar projects over a decade',
      'M.S. Structural Engineering and M.S. Earthquake Engineering',
      'ANSYS-certified on fluid analysis; author of peer-reviewed work on performance-based seismic design',
    ],
  },
  {
    title: 'Lead Drafting Engineer',
    points: [
      'Eight years specialized in full permit drawing set development',
      'Structural, electrical and mechanical sheets produced to submission standard',
    ],
  },
]

const trust = [
  {
    icon: <SafetyCertificateOutlined />,
    title: 'Professionally Insured',
    desc: 'All engineering service is carried under $1M / $2M professional liability coverage.',
  },
  {
    icon: <AuditOutlined />,
    title: 'Built to Clear Plan Check',
    desc: 'Detail-level design work is calibrated to satisfy AHJ review — the City of San Jose has issued written recognition on finished work, and on another project the construction permit followed the day after our package was submitted.',
  },
  {
    icon: <DeploymentUnitOutlined />,
    title: 'Direct to Client',
    desc: 'A low-overhead practice with no middle agents and no paid advertising, plus established relationships with local contractors for the construction phase.',
  },
]

const history = [
  { period: '2012 – 2014', org: 'Belectric Inc.', place: 'Newark, CA', note: 'Utility light-gauge steel design and component FEA optimization' },
  { period: '2014 – 2022', org: 'IronRidge Inc.', place: 'Hayward, CA', note: 'Principal resource for product structural design and FEA' },
  { period: '2023 – present', org: 'PESE Consulting', place: 'Fremont, CA', note: 'Independent structural and solar engineering practice' },
]

export default function Credentials() {
  return (
    <section className="credentials">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Credentials</div>
          <h2 className="section-title">
            Licensure, People & <span className="accent">Publications</span>
          </h2>
          <p className="section-desc">
            A licensed civil (PE) and structural (SE) practice holding engineering licences
            across the states shown below, plus Hawaii and Puerto Rico.
          </p>
        </div>

        <div className="cred-map-grid">
          <div className="cred-map">
            <img src="/img/credentials/licensed-states-map.png" alt="Map of U.S. states where the firm holds engineering licences" loading="lazy" />
          </div>
          <div className="cred-map-text">
            <h3>Licensed Coverage</h3>
            <p>
              Green states indicate where an active professional engineer or structural
              engineer licence is held, allowing sealed drawings and calculations to be
              issued directly for jurisdictions across most of the continental United
              States. Hawaii and Puerto Rico are additionally covered.
            </p>
            <p className="cred-note">
              Licence numbers and jurisdiction-specific details are available on request
              during qualification review.
            </p>
            <div className="cred-roles">
              {roles.map((role) => (
                <div key={role.title} className="cred-role">
                  <h4>{role.title}</h4>
                  <ul>
                    {role.points.map((p) => (
                      <li key={p}>
                        <CheckCircleFilled />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="cred-trust">
          {trust.map((item) => (
            <div key={item.title} className="cred-trust-card">
              <div className="cred-trust-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="cred-lower">
          <div className="cred-history">
            <h3>Practice Background</h3>
            <ul>
              {history.map((row) => (
                <li key={`${row.org}-${row.period}`}>
                  <span className="cred-period">{row.period}</span>
                  <div>
                    <strong>{row.org}</strong>
                    <span className="cred-place"> — {row.place}</span>
                    <p>{row.note}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="cred-pub">
            <h3>
              <ReadOutlined /> Publications
            </h3>
            <div className="cred-pub-row">
              <img
                src="/img/credentials/publication-cover.jpg"
                alt="First page of the published paper on performance-based design of coupled core wall systems"
                loading="lazy"
              />
              <div>
                <p className="cred-pub-cite">
                  Xuan, G., Shahrooz, B. M., Harries, K. A., and Rassati, G. A. (2008).
                  <em> “A Performance-Based Design Approach for Coupled Core Wall Systems
                  with Diagonally Reinforced Concrete Coupling Beams.”</em>
                  Advances in Structural Engineering, 11(3), 265–280.
                </p>
                <p className="cred-pub-note">
                  Presents a performance-based design approach that lets a coupled core wall
                  system be proportioned to code while satisfying the practical constructability
                  constraints that strength-based design leaves unresolved.
                </p>
                <p className="cred-pub-note">
                  Reprinted with permission of Multi-Science Publishing Co. Ltd. Full text is
                  available through the journal rather than hosted on this site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
