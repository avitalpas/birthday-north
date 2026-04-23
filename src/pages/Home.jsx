import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star, TreePine, Utensils, Waves, Music, Camera, ChevronLeft, CheckCircle } from 'lucide-react'

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const stagger = { show: { transition: { staggerChildren: 0.12 } } }

const features = [
  { icon: <TreePine size={28} color="var(--primary-light)" />, title: 'טבע ורוגע', text: 'צימרים ובקתות בלב הטבע, עם נוף עוצר נשימה לגלבוע, הגולן או הגליל' },
  { icon: <Utensils size={28} color="var(--primary-light)" />, title: 'חבילות גורמה', text: 'ארוחות מפנקות ממטבח מקומי, סלים עם פינוקים ויין מהאזור' },
  { icon: <Waves size={28} color="var(--primary-light)" />, title: 'ספא וריפוי', text: 'עיסויים, ג׳קוזי פרטי ויחידות עם בריכה מחוממת לזוג' },
  { icon: <Music size={28} color="var(--primary-light)" />, title: 'אירועים חוויתיים', text: 'הפתעות, פעילויות קבוצתיות ואירועי ערב בהתאמה אישית' },
  { icon: <Camera size={28} color="var(--primary-light)" />, title: 'תיעוד מקצועי', text: 'צלם/ת לאירוע שישמור לכם את הרגעים הכי יפים לנצח' },
  { icon: <Star size={28} color="var(--primary-light)" />, title: 'הפתעות מותאמות', text: 'כל חבילה בנויה בהתאמה אישית מלאה לפי הרצונות והתקציב' },
]

const testimonials = [
  { name: 'נועה ורותם', text: 'חגגנו את יום ההולדת ה-30 שלי בצימר בגולן והיה פשוט חלום. הכל היה מושלם, מהגעה ועד הרגע האחרון!', stars: 5 },
  { name: 'משפחת לוי', text: 'הזמנו חבילה קבוצתית ל-12 איש לאחות שלי. ההפתעה הצליחה ברמות! ממליצים בחום לכולם.', stars: 5 },
  { name: 'דניאל ש׳', text: 'השירות היה אדיר, הצוות זמין ועוזר בכל שאלה. הצימר היה הרבה יותר יפה ממה שציפינו.', stars: 5 },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section style={{
        minHeight: '100vh',
        background: 'linear-gradient(160deg, var(--primary-dark) 0%, #1a4a30 40%, #2d6a4f 100%)',
        display: 'flex', alignItems: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `radial-gradient(ellipse at 20% 50%, rgba(82,183,136,0.15) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, rgba(212,160,23,0.1) 0%, transparent 50%)`,
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: 100, paddingBottom: 80 }}>
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            style={{ maxWidth: 680 }}
          >
            <motion.div variants={fadeUp}>
              <span style={{
                display: 'inline-block', background: 'rgba(212,160,23,0.2)',
                color: 'var(--accent-light)', padding: '6px 18px', borderRadius: 50,
                fontSize: '0.9rem', fontWeight: 700, marginBottom: 24,
                border: '1px solid rgba(212,160,23,0.3)',
              }}>
                ✨ חגיגות יום הולדת בלתי נשכחות
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              fontWeight: 800, color: 'white',
              lineHeight: 1.2, marginBottom: 24,
            }}>
              הפכו את יום ההולדת<br />
              <span style={{ color: 'var(--accent-light)' }}>לחוויה שלא תישכח</span>
            </motion.h1>

            <motion.p variants={fadeUp} style={{
              fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)',
              lineHeight: 1.8, marginBottom: 40, maxWidth: 560,
            }}>
              נופש יום הולדת מיוחד בצפון הארץ — צימרים מפנקים, חבילות גורמה,
              ספא ופעילויות בלתי נשכחות בלב הטבע הירוק של ישראל.
            </motion.p>

            <motion.div variants={fadeUp} style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link to="/booking" className="btn-primary" style={{ fontSize: '1.1rem', padding: '16px 36px' }}>
                להזמנה עכשיו <ChevronLeft size={20} />
              </Link>
              <Link to="/packages" className="btn-secondary" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.5)' }}>
                לחבילות שלנו
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} style={{ display: 'flex', gap: 32, marginTop: 48, flexWrap: 'wrap' }}>
              {[['500+', 'חגיגות מוצלחות'], ['4.9★', 'דירוג ממוצע'], ['100%', 'שביעות רצון']].map(([num, label]) => (
                <div key={label}>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-light)' }}>{num}</div>
                  <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)' }}>{label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* wave divider */}
        <svg viewBox="0 0 1440 80" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, fill: 'var(--bg)' }} preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p style={{ textAlign: 'center', color: 'var(--primary)', fontWeight: 700, marginBottom: 8, fontSize: '0.95rem', letterSpacing: 1 }}>
              למה לבחור בנו?
            </p>
            <h2 className="section-title">הכל כלול בחוויה שלכם</h2>
            <p className="section-subtitle">אנחנו דואגים לכל הפרטים כדי שתוכלו פשוט ליהנות</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{
                  background: 'white', borderRadius: 'var(--radius)',
                  padding: 28, boxShadow: 'var(--shadow)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  border: '1px solid var(--border)',
                }}
                whileHover={{ y: -6, boxShadow: 'var(--shadow-lg)' }}
              >
                <div style={{
                  background: 'rgba(45,106,79,0.08)', borderRadius: 12,
                  width: 52, height: 52, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 16,
                }}>
                  {f.icon}
                </div>
                <h3 style={{ fontWeight: 700, marginBottom: 8, color: 'var(--primary-dark)' }}>{f.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>{f.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{
        background: 'linear-gradient(135deg, var(--primary), var(--primary-light))',
        padding: '60px 0',
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <h2 style={{ color: 'white', fontSize: '2rem', fontWeight: 800, marginBottom: 12 }}>
              מוכנים לתכנן את החגיגה המושלמת?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', marginBottom: 32 }}>
              בחרו חבילה, מלאו פרטים — ואנחנו נדאג לשאר
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/packages" style={{
                background: 'white', color: 'var(--primary)',
                padding: '14px 32px', borderRadius: 50,
                fontWeight: 700, fontSize: '1rem',
                display: 'inline-flex', alignItems: 'center', gap: 8,
                boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
              }}>
                לחבילות שלנו <ChevronLeft size={18} />
              </Link>
              <Link to="/booking" style={{
                background: 'rgba(255,255,255,0.15)', color: 'white',
                border: '2px solid white',
                padding: '12px 28px', borderRadius: 50,
                fontWeight: 600, fontSize: '1rem',
              }}>
                הזמנה ישירה
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <h2 className="section-title">מה אומרים עלינו?</h2>
          <p className="section-subtitle">אלפי מחוייכים שכבר חגגו איתנו</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  background: 'var(--bg)', borderRadius: 'var(--radius)',
                  padding: 28, border: '1px solid var(--border)',
                }}
              >
                <div style={{ display: 'flex', gap: 4, marginBottom: 14 }}>
                  {Array(t.stars).fill(0).map((_, j) => <Star key={j} size={16} fill="var(--accent)" color="var(--accent)" />)}
                </div>
                <p style={{ color: 'var(--text)', lineHeight: 1.8, marginBottom: 16, fontStyle: 'italic' }}>"{t.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--primary), var(--primary-light))',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'white', fontWeight: 700, fontSize: '1rem',
                  }}>
                    {t.name[0]}
                  </div>
                  <span style={{ fontWeight: 700, color: 'var(--primary-dark)' }}>{t.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
