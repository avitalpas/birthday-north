import { useState, useEffect } from 'react'
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
  const [countdown, setCountdown] = useState(null)
  const [showBalagan, setShowBalagan] = useState(false)
  const [contentUnlocked, setContentUnlocked] = useState(false)

  useEffect(() => {
    if (window.instgrm) window.instgrm.Embeds.process()
  }, [])

  function handlePlay() {
    setMusicStarted(true)
    setCountdown(3)
    let count = 3
    const timer = setInterval(() => {
      count -= 1
      if (count === 0) {
        clearInterval(timer)
        setCountdown(null)
        setShowBalagan(true)
        setTimeout(() => {
          setShowBalagan(false)
          setContentUnlocked(true)
        }, 1500)
      } else {
        setCountdown(count)
      }
    }, 1000)
  }

  return (
    <div className="invite">

      {/* ── COUNTDOWN / BALAGAN POPUP ── */}
      {(countdown !== null || showBalagan) && (
        <motion.div
          className="surprise-popup-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="surprise-popup"
            initial={{ scale: 0.5, rotate: -8 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 320, damping: 22 }}
          >
            <span className="surprise-popup-burst">🎉</span>
            {countdown !== null ? (
              <motion.span
                key={countdown}
                className="surprise-popup-number"
                initial={{ scale: 1.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.35 }}
              >
                {countdown}
              </motion.span>
            ) : (
              <motion.span
                className="surprise-popup-balagan"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              >
                יאללה בלאגןןן
              </motion.span>
            )}
            <span className="surprise-popup-burst">🎉</span>
          </motion.div>
        </motion.div>
      )}


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

      {/* ── REEL ── */}
      <section className="section section-reel">
        <div className="container">
          <motion.div {...reveal()} className="section-header">
            <span className="section-icon">📱</span>
            <h2>רק שתדע שכל יום לפני הנופש זו אני !!!</h2>
          </motion.div>
          <motion.div {...reveal(0.15)} className="reel-wrap">
            <blockquote
              className="instagram-media"
              data-instgrm-captioned
              data-instgrm-permalink="https://www.instagram.com/reel/DWUYA5ouAdk/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ=="
              data-instgrm-version="14"
            />
          </motion.div>
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
                <button className="music-play-btn" onClick={handlePlay}>
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

            {!contentUnlocked && !countdown && !showBalagan && (
              <p className="lock-message">☝️ שאר הסודות יופיעו רק אם השיר של הטיול פועל</p>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── HOW WE START ── */}
      {contentUnlocked && <>
      <section className="section section-alt">
        <div className="container">
          <motion.div {...reveal()} className="section-header">
            <span className="section-icon">🌊</span>
            <h2>{c.start.sectionTitle}</h2>
          </motion.div>

          <motion.div {...reveal(0.1)} className="breakfast-card">
            <div
              className="breakfast-img"
              style={{ backgroundImage: `url('/images/aroma caffe.jpg')` }}
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

          <motion.div {...reveal(0.25)} className="breakfast-card">
            <div
              className="breakfast-img"
              style={{ backgroundImage: `url('/images/blue sport car.jpg')` }}
            />
            <div className="breakfast-text">
              <h3>{c.start.liftTitle}</h3>
              <p>
                {c.start.liftLine1}<br />
                {c.start.liftLine2}<br />
                {c.start.liftLine3}
              </p>
            </div>
          </motion.div>

          <motion.div {...reveal(0.28)} className="dest-info" style={{ marginTop: '36px' }}>
            <h3 className="dest-name">{c.start.cabinName}</h3>
            <p className="dest-cabin">{c.start.cabinSub}</p>
            <p className="dest-vibe">
              {c.start.cabinVibe}<br />
              <span className="dest-vibe-aside">{c.start.cabinVibeAside}</span>
            </p>
            <a
              href={c.start.cabinLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="place-link"
            >
              <MapPin size={14} /> {c.start.cabinLinkText}
            </a>
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

          <motion.div {...reveal(0.1)} className="character-illustration">
            <img src="/images/surprise.png" alt="הפתעה" className="character-img" />
          </motion.div>

          <div className="surprises-grid">
            {c.surprises.items.map((s, i) => (
              <motion.div key={i} {...reveal(i * 0.15)} className="surprise-card">
                <p>{s.text}</p>
              </motion.div>
            ))}
          </div>
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

      <footer className="footer">
        <motion.div {...reveal()} className="footer-inner">
          <p className="footer-title">{c.footer.title}</p>
          <p className="footer-note">
            {c.footer.noteLine1}<br />
            {c.footer.noteLine2}
          </p>
          <img src="/images/slow.png" alt="לאט לאט" className="footer-img" />
          <p className="footer-sign">
            {c.footer.signLine1}<br />
            <strong>{c.footer.signBold}</strong> {c.footer.signEmoji}
          </p>
        </motion.div>
      </footer>
      </>}

    </div>
  )
}
