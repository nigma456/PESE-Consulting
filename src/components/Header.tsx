import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Products', path: '/products' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const isHome = location.pathname === '/'

  return (
    <header className={`site-header ${scrolled || !isHome ? 'scrolled' : ''}`}>
      <div className="header-inner">
        <Link to="/" className="header-logo">
          <img src="/logo-light.svg" alt="PESE Consulting Logo" />
        </Link>

        <nav className={`header-nav ${mobileOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={location.pathname === item.path ? 'active' : ''}
            >
              {item.label}
            </Link>
          ))}
          <Button type="primary" className="header-cta" onClick={() => navigate('/contact')}>
            Get a Quote
          </Button>
        </nav>

        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>
      </div>
    </header>
  )
}
