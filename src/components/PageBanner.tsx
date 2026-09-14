interface PageBannerProps {
  title: string
  subtitle: string
  bgImage: string
  tag: string
}

export default function PageBanner({ title, subtitle, bgImage, tag }: PageBannerProps) {
  return (
    <section className="page-banner">
      <div className="page-banner-bg">
        <img src={bgImage} alt={title} />
        <div className="page-banner-overlay" />
      </div>
      <div className="page-banner-content">
        <div className="page-banner-tag">{tag}</div>
        <h1 className="page-banner-title">{title}</h1>
        <p className="page-banner-subtitle">{subtitle}</p>
      </div>
    </section>
  )
}
