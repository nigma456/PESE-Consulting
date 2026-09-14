import PageBanner from '../components/PageBanner'
import ServicesContent from '../components/Services'

export default function Services() {
  return (
    <>
      <PageBanner
        tag="Our Services"
        title="Comprehensive Engineering Solutions"
        subtitle="From computational simulation to code-compliant design, we provide end-to-end engineering services for solar mounting systems in any environment."
        bgImage="/img/10f5f29ba668ce21ef12.jpg"
      />
      <ServicesContent />
    </>
  )
}
