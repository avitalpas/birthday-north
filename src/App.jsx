import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Music, Heart } from 'lucide-react'
import c from './content'
import './App.css'

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay },
})

export default function App() {
  const [musicStarted, setMusicStarted] = useState(false)

  return (
    <div className="invite">

      {/* ── HERO ── */}
      <section className="hero">
        <div
          className="hero-bg"
          style={{ backgroundImage: `url('/images/place/place 3.jpg')` }}
        />
        <div className="hero-overlay" />

        <div className="hero-content">
          <motion.div {...reveal(0.1)}>
            <span className="badge">{c.hero.badge}</span>
          </motion.div>

          <motion.h1 {...reveal(0.25)} className="hero-title">
            {c.hero.title1}<br />{c.hero.title2}
          </motion.h1>

          <motion.p {...reveal(0.4)} className="hero-body">
            {c.hero.line1}<br />
            {c.hero.line2}<br />
            {c.hero.line3}<br />
            <span className="hero-aside">{c.hero.aside}</span>
          </motion.p>

          <motion.div {...reveal(0.55)} className="hero-scroll">
            {c.hero.scroll}
          </motion.div>
        </div>

        <div className="hero-wave">
          <svg viewBox="0 0 1440 72" preserveAspectRatio="none">
            <path d="M0,36 C360,72 1080,0 1440,36 L1440,72 L0,72 Z" fill="#FAFAF7" />
          </svg>
        </div>
      </section>

      {/* ── MUSIC ── */}
      <section className="section section-music">
        <div className="container">
          <motion.div {...reveal()} className="section-header">
            <span className="section-icon">🎵</span>
            <h2>{c.music.sectionTitle}</h2>
            <p className="section-sub">{c.music.sectionSub}</p>
          </motion.div>

          <motion.div {...reveal(0.15)} className="music-player-wrap">
            {c.music.songId ? (
              musicStarted ? (
                <iframe
                  className="music-embed"
                  src={`https://www.youtube.com/embed/${c.music.songId}?autoplay=1`}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              ) : (
                <button className="music-play-btn" onClick={() => setMusicStarted(true)}>
                  <Music size={22} />
                  {c.music.playBtnText}
                </button>
              )
            ) : (
              <div className="music-placeholder">
                <Music size={38} className="music-icon" />
                <p className="music-title">{c.music.cardTitle || 'הסאונדטרק הרשמי של הנופש'}</p>
                <p className="music-note">בקרוב — השיר שייגרום לך לחייך 🎵</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── HOW WE START ── */}
      <section className="section section-alt">
        <div className="container">
          <motion.div {...reveal()} className="section-header">
            <span className="section-icon">🌊</span>
            <h2>{c.start.sectionTitle}</h2>
          </motion.div>

          <motion.div {...reveal(0.1)} className="breakfast-card">
            <div
              className="breakfast-img"
              style={{ backgroundImage: `url('/images/port cafe.jpg')` }}
            />
            <div className="breakfast-text">
              <h3>{c.start.breakfastTitle}</h3>
              <p>
                {c.start.breakfastLine1}<br />
                {c.start.breakfastLine2}<br />
                {c.start.breakfastLine3}
              </p>
              <a
                href={c.start.breakfastLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="place-link"
              >
                <MapPin size={14} /> {c.start.breakfastLinkText}
              </a>
            </div>
          </motion.div>

          <motion.div {...reveal(0.2)} className="breakfast-card">
            <div className="breakfast-text">
              <h3>{c.start.driveTitle}</h3>
              <p>
                {c.start.driveLine1}<br />
                {c.start.driveLine2}<br />
                {c.start.driveLine3}
              </p>
              <a
                href={c.start.playlistUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="playlist-link"
              >
                <Music size={14} /> {c.start.playlistText}
              </a>
            </div>
            <div
              className="breakfast-img"
              style={{ backgroundImage: `url('/images/characters/car.jpg')` }}
            />
          </motion.div>

          <motion.div {...reveal(0.28)} className="dest-info" style={{ marginTop: '36px' }}>
            <h3 className="dest-name">{c.start.cabinName}</h3>
            <p className="dest-cabin">{c.start.cabinSub}</p>
            <p className="dest-vibe">
              {c.start.cabinVibe}<br />
              <span className="dest-vibe-aside">{c.start.cabinVibeAside}</span>
            </p>
          </motion.div>

          <motion.div {...reveal(0.35)} className="cabin-mini-gallery">
            <div className="cabin-mini-img" style={{ backgroundImage: `url('/images/place/place 1.jpg')` }} />
            <div className="cabin-mini-img" style={{ backgroundImage: `url('/images/place/place 2.jpg')` }} />
          </motion.div>
        </div>
      </section>

      {/* ── BISLI ── */}
      <section className="section section-bisli">
        <div className="container">
          <motion.div {...reveal()} className="section-header">
            <span className="section-icon">🐾</span>
            <h2>{c.bisli.sectionTitle}</h2>
            <p className="section-sub bisli-sub">{c.bisli.sectionSub}</p>
          </motion.div>

          <motion.div {...reveal(0.15)} className="character-pair">
            <img src="/images/characters/forest.jpg" alt="טיול ביער עם ביסלי" className="character-img" />
            <img src="/images/characters/coffee.jpg" alt="קפה עם ביסלי" className="character-img" />
          </motion.div>

          <motion.p {...reveal(0.25)} className="bisli-note">
            {c.bisli.noteLine1}<br />
            {c.bisli.noteLine2}
          </motion.p>
        </div>
      </section>

      {/* ── SURPRISES ── */}
      <section className="section">
        <div className="container">
          <motion.div {...reveal()} className="section-header">
            <span className="section-icon">✨</span>
            <h2>{c.surprises.sectionTitle}</h2>
            <p className="section-sub">{c.surprises.sectionSub}</p>
          </motion.div>

          <div className="surprises-grid">
            {c.surprises.items.map((s, i) => (
              <motion.div key={i} {...reveal(i * 0.15)} className="surprise-card">
                <span className="surprise-emoji">{s.emoji}</span>
                <p>{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RING CEREMONY ── */}
      <section className="section section-rings">
        <div className="container">
          <motion.div {...reveal()} className="section-header">
            <span className="section-icon">💍</span>
            <h2>{c.rings.sectionTitle}</h2>
            <p className="section-sub rings-sub">{c.rings.sectionSub}</p>
          </motion.div>

          <motion.div {...reveal(0.15)} className="rings-card">
            <p className="rings-intro">
              {c.rings.introLine1}<br />
              {c.rings.introLine2}<br />
              {c.rings.introLine3}
            </p>
            <div className="rings-mission">
              <span className="mission-badge">{c.rings.missionBadge}</span>
              <p>
                {c.rings.missionLine1}<br />
                {c.rings.missionLine2} <strong>{c.rings.missionBold}</strong><br />
                <span className="mission-hint">{c.rings.missionHint}</span>
              </p>
            </div>
            <p className="rings-end">
              <Heart size={15} className="inline-heart" />
              {c.rings.end}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FLOW & MAP ── */}
      <section className="section section-alt">
        <div className="container">
          <motion.div {...reveal()} className="section-header">
            <span className="section-icon">🍽️</span>
            <h2>{c.flow.sectionTitle}</h2>
          </motion.div>

          <motion.p {...reveal(0.1)} className="flow-text">
            {c.flow.line1}<br />
            {c.flow.line2}<br />
            <br />
            {c.flow.line3}<br />
            <br />
            {c.flow.line4}<br />
            {c.flow.line5}
          </motion.p>

          <motion.div {...reveal(0.15)} className="character-illustration">
            <img src="/images/characters/restaurant.jpg" alt="אוכלים טוב" className="character-img" />
          </motion.div>

          <motion.div {...reveal(0.22)} className="map-btn-wrap">
            <a
              href={c.flow.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="map-btn"
            >
              <MapPin size={19} />
              {c.flow.mapText}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <motion.div {...reveal()} className="footer-inner">
          <p className="footer-title">{c.footer.title}</p>
          <p className="footer-note">
            {c.footer.noteLine1}<br />
            {c.footer.noteLine2}
          </p>
          <p className="footer-sign">
            {c.footer.signLine1}<br />
            <strong>{c.footer.signBold}</strong> {c.footer.signEmoji}
          </p>
        </motion.div>
      </footer>

    </div>
  )
}
