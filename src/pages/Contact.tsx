import PageBanner from '../components/PageBanner'
import ContactContent from '../components/Contact'

export default function Contact() {
  return (
    <>
      <PageBanner
        tag="Get In Touch"
        title="Start Your Engineering Project"
        subtitle="Tell us about your solar mounting project. Our engineering team will respond within 24 hours with a personalized quote and project plan."
        bgImage="/img/bfe7ab795ab584d16380.jpg"
      />
      <ContactContent />
    </>
  )
}
