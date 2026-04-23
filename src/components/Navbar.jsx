import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => setOpen(false), [location])

  const links = [
    { to: '/', label: 'בית' },
    { to: '/packages', label: 'חבילות' },
    { to: '/booking', label: 'הזמנה' },
  ]

  return (
    <nav style={{
      position: 'fixed', top: 0, right: 0, left: 0, zIndex: 1000,
      background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 800, fontSize: '1.2rem', color: scrolled ? 'var(--primary-dark)' : 'white' }}>
          <Sparkles size={22} color="var(--accent)" />
          יום הולדת בצפון
        </Link>

        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="desktop-links">
          {links.map(l => (
            <Link key={l.to} to={l.to} style={{
              fontWeight: 600,
              color: scrolled ? (location.pathname === l.to ? 'var(--primary)' : 'var(--text)') : 'white',
              opacity: location.pathname === l.to ? 1 : 0.85,
              borderBottom: location.pathname === l.to ? '2px solid var(--accent)' : '2px solid transparent',
              paddingBottom: 4,
              transition: 'all 0.2s',
            }}>
              {l.label}
            </Link>
          ))}
          <Link to="/booking" className="btn-primary" style={{ padding: '10px 24px', fontSize: '0.95rem' }}>
            להזמנה עכשיו
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="mobile-menu-btn"
          style={{ background: 'none', border: 'none', color: scrolled ? 'var(--text)' : 'white', display: 'none' }}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div style={{
          background: 'white',
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
        }}>
          {links.map(l => (
            <Link key={l.to} to={l.to} style={{
              fontWeight: 600,
              fontSize: '1.1rem',
              color: location.pathname === l.to ? 'var(--primary)' : 'var(--text)',
              padding: '8px 0',
              borderBottom: '1px solid var(--border)',
            }}>
              {l.label}
            </Link>
          ))}
          <Link to="/booking" className="btn-primary" style={{ textAlign: 'center', justifyContent: 'center' }}>
            להזמנה עכשיו
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-links { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
