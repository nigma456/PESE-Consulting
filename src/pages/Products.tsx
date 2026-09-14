import PageBanner from '../components/PageBanner'
import ProductsContent from '../components/Products'

export default function Products() {
  return (
    <>
      <PageBanner
        tag="Product Lines"
        title="IronRidge Mounting Solutions"
        subtitle="We design and engineer with the full range of IronRidge solar mounting products — the industry standard for quality and reliability."
        bgImage="/img/33109797312784440f18.jpg"
      />
      <ProductsContent />
    </>
  )
}
