import { useState } from 'react'
import {
  EnvironmentOutlined,
  TeamOutlined,
  SafetyCertificateOutlined,
  FileTextOutlined,
} from '@ant-design/icons'
import { projectGroups, projectCaseCount } from '../data/projects'

export default function ProjectCases() {
  const [active, setActive] = useState(projectGroups[0].id)

  const jump = (id: string) => {
    setActive(id)
    const el = document.getElementById(`exp-${id}`)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 90
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section className="projects-archive">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Project Experience</div>
          <h2 className="section-title">
            Selected <span className="accent">Work Archive</span>
          </h2>
          <p className="section-desc">
            {projectCaseCount} documented engagements drawn from the firm's own project records —
            solar work from residential rooftops to 1.5 MW utility farms, plus industrial
            upgrades, existing-building assessments, field inspection and contemporary
            residential development.
          </p>
        </div>

        <div className="exp-filter">
          {projectGroups.map((group) => (
            <button
              key={group.id}
              type="button"
              className={`exp-filter-btn ${active === group.id ? 'active' : ''}`}
              onClick={() => jump(group.id)}
            >
              {group.label}
              <span className="exp-filter-count">{group.cases.length}</span>
            </button>
          ))}
        </div>

        {projectGroups.map((group) => (
          <div key={group.id} id={`exp-${group.id}`} className="exp-group">
            <div className="exp-group-head">
              <h3>{group.label}</h3>
              <p>{group.blurb}</p>
            </div>
            <div className="exp-grid">
              {group.cases.map((item) => (
                <article key={item.title} className="exp-card">
                  {item.img ? (
                    <div className="exp-card-media">
                      <img src={item.img} alt={item.imgAlt} loading="lazy" />
                      <span className="exp-card-role">{item.role}</span>
                    </div>
                  ) : (
                    <div className="exp-card-media exp-card-media-empty">
                      <FileTextOutlined />
                      <span className="exp-card-role">{item.role}</span>
                    </div>
                  )}
                  <div className="exp-card-body">
                    <h4>{item.title}</h4>
                    <div className="exp-card-meta">{item.meta}</div>
                    <ul>
                      {item.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                    <div className="exp-card-foot">
                      {item.location && (
                        <span>
                          <EnvironmentOutlined /> {item.location}
                        </span>
                      )}
                      {item.client && (
                        <span>
                          <TeamOutlined /> {item.client}
                        </span>
                      )}
                    </div>
                    <div className="exp-card-source">
                      <SafetyCertificateOutlined /> Source: {item.source}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
