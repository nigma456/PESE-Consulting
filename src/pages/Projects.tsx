import PageBanner from '../components/PageBanner'
import ProjectCases from '../components/ProjectCases'

export default function Projects() {
  return (
    <>
      <PageBanner
        tag="Projects"
        title="Documented Project Experience"
        subtitle="Twenty years of sealed structural work — solar from residential rooftops to 1.5 MW utility farms, plus industrial upgrades, existing-building assessment, field inspection and residential development."
        bgImage="/img/cases/milpitas-canopy.jpg"
      />
      <ProjectCases />
    </>
  )
}
