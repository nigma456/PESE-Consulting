import PageBanner from '../components/PageBanner'
import Portfolio from '../components/Portfolio'

export default function Projects() {
  return (
    <>
      <PageBanner
        tag="Engineering Portfolio"
        title="Simulation & Analysis Showcase"
        subtitle="A selection of our computational engineering work — CFD wind simulations, FEA structural analyses, and real-world installation case studies."
        bgImage="/img/98ee6c503fdd7d47fb54.jpg"
      />
      <Portfolio />
    </>
  )
}
