import { HomeOutlined, BuildOutlined, GlobalOutlined } from '@ant-design/icons'

const products = [
  {
    icon: <HomeOutlined />,
    title: 'Pitched Roof Systems',
    desc: 'IronRidge Aire & XR System resources for pitched roof solar mounting. Includes flashing, attachments, and rail systems for asphalt, tile, and metal roofs.',
    features: ['Aire Racking System', 'XR Rails', 'QuickMount HUG™', 'Tile Hook Flashing'],
    img: '/img/33109797312784440f18.jpg',
  },
  {
    icon: <BuildOutlined />,
    title: 'Flat Roof Systems',
    desc: 'Attached and ballasted flat roof mounting solutions. Low-profile designs optimized for commercial rooftops with minimal penetration.',
    features: ['Attached Flat Roof', 'Ballasted Flat Roof', 'Low-Profile Design', 'Roof Protection'],
    img: '/img/cb1312a971477cfad1ad.jpg',
  },
  {
    icon: <GlobalOutlined />,
    title: 'Ground-Based Systems',
    desc: 'XR Ground Mount System for utility-scale and commercial solar arrays. Engineered for maximum span distances and soil conditions.',
    features: ['XR Ground Mount', 'Foundation Design', 'Soil Analysis', 'Utility-Scale Ready'],
    img: '/img/bb016c368e6837363b32.jpg',
  },
]

export default function Products() {
  return (
    <section className="products">
      <div className="container">
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.title} className="product-card">
              <div className="product-img">
                <img src={product.img} alt={product.title} />
              </div>
              <div className="product-body">
                <div className="product-icon">{product.icon}</div>
                <h3>{product.title}</h3>
                <p>{product.desc}</p>
                <ul className="product-features">
                  {product.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
