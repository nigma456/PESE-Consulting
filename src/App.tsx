import { ConfigProvider } from 'antd'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Products from './pages/Products'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#ff6b00',
          borderRadius: 6,
          fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
        },
        components: {
          Button: {
            colorPrimary: '#ff6b00',
            algorithm: true,
          },
        },
      }}
    >
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </ConfigProvider>
  )
}

export default App
