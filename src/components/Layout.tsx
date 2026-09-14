import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import type { ReactNode } from 'react'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="app">
      <ScrollToTop />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
