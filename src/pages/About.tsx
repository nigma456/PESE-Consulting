import PageBanner from '../components/PageBanner'
import AboutContent from '../components/About'
import ServiceArea from '../components/ServiceArea'

export default function About() {
  return (
    <>
      <PageBanner
        tag="About Us"
        title="Engineering Excellence in Solar Mounting Solutions"
        subtitle="A specialized engineering firm delivering code-compliant, structurally optimized solar installations across the United States."
        bgImage="/img/bb016c368e6837363b32.jpg"
      />
      <AboutContent />
      <ServiceArea />
    </>
  )
}
