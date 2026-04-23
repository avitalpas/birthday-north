import { motion } from 'framer-motion'
import { MapPin, Music, PawPrint, Heart, ExternalLink } from 'lucide-react'
import './App.css'

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay },
})

export default function App() {
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
            <span className="badge">🎂 יום הולדת שמח, אוראל</span>
          </motion.div>

          <motion.h1 {...reveal(0.25)} className="hero-title">
            הגיע הזמן<br />לנשום.
          </motion.h1>

          <motion.p {...reveal(0.4)} className="hero-body">
            אחרי מילואים. אחרי מלחמה.<br />
            אחרי שגרה שהיא לא ממש שגרה.<br />
            סוף סוף בורחים מהעולם —<br />
            <span className="hero-aside">(לא, ממש בורחים. עם תיק. ועם כלבה.)</span>
          </motion.p>

          <motion.div {...reveal(0.55)} className="hero-scroll">
            ↓ &nbsp; גלול לגלות
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
            <h2>השיר של הטיול</h2>
            <p className="section-sub">בחרתי לנו משהו להתכוונן אליו לפני שיוצאים</p>
          </motion.div>

          <motion.div {...reveal(0.15)} className="music-placeholder">
            <Music size={38} className="music-icon" />
            <p className="music-title">הסאונדטרק הרשמי של הבריחה שלנו</p>
            <p className="music-note">עוד בוחרים שיר — אבל תדע שהוא יגרום לך לחייך.</p>
          </motion.div>
        </div>
      </section>

      {/* ── DESTINATION ── */}
      <section className="section">
        <div className="container">
          <motion.div {...reveal()} className="section-header">
            <span className="section-icon">🏡</span>
            <h2>לאן נוסעים?</h2>
            <p className="section-sub">לא ספרתי לך. עכשיו אני מספרת.</p>
          </motion.div>

          <motion.div {...reveal(0.1)} className="dest-info">
            <h3 className="dest-name">בית לחם הגלילית</h3>
            <p className="dest-cabin">בקתות עץ Lila</p>
            <p className="dest-vibe">
              שקט · ירוק · עץ · ריח של ״ברחנו רגע מהעולם״<br />
              <span className="dest-vibe-aside">(וגם Wi-Fi, כי אנחנו לא פראיירים)</span>
            </p>
          </motion.div>

          <div className="place-gallery">
            {[
              '/images/place/place 1.jpg',
              '/images/place/place 2.jpg',
              '/images/place/place 3.jpg',
            ].map((src, i) => (
              <motion.div
                key={i}
                {...reveal(i * 0.14)}
                className="gallery-img"
                style={{ backgroundImage: `url('${src}')` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE START ── */}
      <section className="section section-alt">
        <div className="container">
          <motion.div {...reveal()} className="section-header">
            <span className="section-icon">🌊</span>
            <h2>ככה מתחילים</h2>
          </motion.div>

          <motion.div {...reveal(0.1)} className="breakfast-card">
            <div
              className="breakfast-img"
              style={{ backgroundImage: `url('/images/port cafe.jpg')` }}
            />
            <div className="breakfast-text">
              <h3>ארוחת בוקר מול הים</h3>
              <p>
                פורט קפה, נמל קיסריה.<br />
                קפה. גלים. ריבה. עוד קפה.<br />
                הכי טוב שיש לפני שיוצאים לדרך.
              </p>
              <a
                href="https://maps.app.goo.gl/d2BqpBFkfSjpACHz5"
                target="_blank"
                rel="noopener noreferrer"
                className="place-link"
              >
                <MapPin size={14} /> פורט קפה בנמל קיסריה
              </a>
            </div>
          </motion.div>

          <motion.div {...reveal(0.2)} className="drive-card">
            <span className="drive-emoji">🎶</span>
            <div className="drive-text">
              <h3>ואז — נוסעים צפונה</h3>
              <p>
                עם מוזיקה טובה, חיוכים, ונשנושים שאוראל יגיד ״אל תגמרי את כולם״<br />
                ואני אגמור אותם בכל זאת.
              </p>
              <a
                href="YOUR_YOUTUBE_MUSIC_PLAYLIST_LINK_HERE"
                target="_blank"
                rel="noopener noreferrer"
                className="playlist-link"
              >
                <Music size={14} /> הפלייליסט שלנו לנסיעה 🎧
                <span className="playlist-soon">(בקרוב)</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── BISLI ── */}
      <section className="section section-bisli">
        <div className="container">
          <motion.div {...reveal()} className="section-header">
            <span className="section-icon">🐾</span>
            <h2>ביסלי באה איתנו!!!</h2>
            <p className="section-sub bisli-sub">
              כן. רשמית. כחברת צוות מלאה ושווה זכויות.
            </p>
          </motion.div>

          <motion.div {...reveal(0.15)} className="bisli-cartoon">
            <PawPrint size={36} className="cartoon-paw" />
            <p className="cartoon-label">
              [קריקטורה של ביסלי באוטו, מאושרת, עם ראש בחלון]<br />
              <span className="cartoon-sub">היא לא יודעת לאן היא נוסעת אבל היא בעד</span>
            </p>
          </motion.div>

          <motion.p {...reveal(0.25)} className="bisli-note">
            טיולים קצרים, עצירות לריח עצים, ופנים של כלבה שלא מבינה לאן היא נוסעת<br />
            אבל מאוד נהנית מהתשומת לב.
          </motion.p>
        </div>
      </section>

      {/* ── SURPRISES ── */}
      <section className="section">
        <div className="container">
          <motion.div {...reveal()} className="section-header">
            <span className="section-icon">✨</span>
            <h2>הפתעות (עדינות)</h2>
            <p className="section-sub">לא ספוילרים. רק טיזרים.</p>
          </motion.div>

          <div className="surprises-grid">
            {[
              { emoji: '🎀', text: 'משהו קטן ומרגש שמחכה לנו במקום הלינה' },
              { emoji: '💑', text: 'רגע מיוחד שמוקדש רק לשנינו — רומנטיקה בלי לחץ ובלי לוח זמנים' },
            ].map((s, i) => (
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
            <h2>טקס טבעות</h2>
            <p className="section-sub rings-sub">
              ״דברים שרציתי לומר לך מתחת לחופה ולא הספקתי״
            </p>
          </motion.div>

          <motion.div {...reveal(0.15)} className="rings-card">
            <p className="rings-intro">
              הרעיון פשוט: כל אחד מגיע מוכן עם כמה משפטים מהלב.<br />
              אין קהל. אין חזרות. אין מיקרופון.<br />
              רק אנחנו, אוויר של גליל, וטבעות.
            </p>
            <div className="rings-mission">
              <span className="mission-badge">🎯 המשימה שלך</span>
              <p>
                לחשוב מראש על משהו שרצית להגיד לי ולא הספקת.<br />
                ולהגיע מוכן. <strong>כן, גם אתה.</strong><br />
                <span className="mission-hint">(A4, הטלפון, מפיות — אין שפוט.)</span>
              </p>
            </div>
            <p className="rings-end">
              <Heart size={15} className="inline-heart" />
              ואז ענידה. בלי דרמה. רק אמת ואהבה.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FLOW & MAP ── */}
      <section className="section section-alt">
        <div className="container">
          <motion.div {...reveal()} className="section-header">
            <span className="section-icon">🍽️</span>
            <h2>מה עושים בשאר הזמן אתה שואל?</h2>
          </motion.div>

          <motion.p {...reveal(0.1)} className="flow-text">
            כמו חוסר ההחלטיות שלי בנוגע למה אני רוצה לאכול ברגע נתון —<br />
            לא הצלחתי לבחור מראש.<br />
            <br />
            גם טראמפ לא.<br />
            <br />
            לכן הנה מפה עם דברים מגניבים לעשות וטעימים לאכול.<br />
            נחליט ברגע האמת!!
          </motion.p>

          <motion.div {...reveal(0.22)} className="map-btn-wrap">
            <a
              href="https://maps.app.goo.gl/m5VKAgKtYEnDyJueA"
              target="_blank"
              rel="noopener noreferrer"
              className="map-btn"
            >
              <MapPin size={19} />
              מפת אוכל ודברים כיפיים באזור
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <motion.div {...reveal()} className="footer-inner">
          <p className="footer-title">מזל טוב אהוב שלייי 🎂</p>
          <p className="footer-note">
            מזכירה לצעוד לאט —<br />
            כי אתה מטייל כרגע עם היפופוטם.
          </p>
          <p className="footer-sign">
            מודים מקרב לב על ההבנה —<br />
            <strong>אני, סינוצ'יק וסופליק</strong> 🐾💛
          </p>
        </motion.div>
      </footer>

    </div>
  )
}
