import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Instagram, Facebook, Sparkles } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--primary-dark)', color: 'rgba(255,255,255,0.85)', paddingTop: 60 }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 40, marginBottom: 48 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <Sparkles size={22} color="var(--accent-light)" />
              <span style={{ fontWeight: 800, fontSize: '1.2rem', color: 'white' }}>יום הולדת בצפון</span>
            </div>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, opacity: 0.75 }}>
              חוויות נופש בלתי נשכחות בצפון הארץ — כי כל יום הולדת ראוי לקסם.
            </p>
            <div style={{ display: 'flex', gap: 14, marginTop: 20 }}>
              <a href="#" style={{ color: 'white', opacity: 0.7, transition: 'opacity 0.2s' }} onMouseOver={e=>e.target.style.opacity=1} onMouseOut={e=>e.target.style.opacity=0.7}>
                <Instagram size={22} />
              </a>
              <a href="#" style={{ color: 'white', opacity: 0.7, transition: 'opacity 0.2s' }} onMouseOver={e=>e.target.style.opacity=1} onMouseOut={e=>e.target.style.opacity=0.7}>
                <Facebook size={22} />
              </a>
            </div>
          </div>

          <div>
            <h4 style={{ color: 'white', fontWeight: 700, marginBottom: 18, fontSize: '1rem' }}>ניווט מהיר</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[['/', 'דף הבית'], ['/packages', 'חבילות נופש'], ['/booking', 'הזמנה מקוונת']].map(([to, label]) => (
                <Link key={to} to={to} style={{ opacity: 0.75, fontSize: '0.95rem', transition: 'opacity 0.2s' }}
                  onMouseOver={e=>e.target.style.opacity=1} onMouseOut={e=>e.target.style.opacity=0.75}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ color: 'white', fontWeight: 700, marginBottom: 18, fontSize: '1rem' }}>צרו קשר</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.95rem' }}>
                <Phone size={17} color="var(--accent-light)" />
                <span>050-000-0000</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.95rem' }}>
                <Mail size={17} color="var(--accent-light)" />
                <span>hello@birthday-north.co.il</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.95rem' }}>
                <MapPin size={17} color="var(--accent-light)" style={{ marginTop: 3, flexShrink: 0 }} />
                <span>אזור הגליל והגולן, צפון ישראל</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', padding: '20px 0', textAlign: 'center', fontSize: '0.85rem', opacity: 0.5 }}>
          © 2026 יום הולדת בצפון · כל הזכויות שמורות
        </div>
      </div>
    </footer>
  )
}
