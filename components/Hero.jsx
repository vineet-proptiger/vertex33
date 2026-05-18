'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { heroImages } from '../lib/images'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'

const slides = [heroImages.banner, heroImages.banner2]

const Hero = ({ setIsOpen }) => {
  const [current, setCurrent] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % slides.length), 5000)
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check, { passive: true })
    return () => { clearInterval(t); window.removeEventListener('resize', check) }
  }, [])

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{ height: 'auto' }}
    >
      {/* ── Image + text wrapper ──
          Mobile: relative, height = exact image AR (2520×1440 = 1.75:1) → no letterbox gaps
          Desktop: absolute fill of the full-viewport section */}
      <div style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '2520/1440',
        overflow: 'hidden',
      }}>
        {/* Background carousel */}
        {slides.map((src, idx) => (
          <div
            key={idx}
            style={{
              position: 'absolute', inset: 0,
              opacity: current === idx ? 1 : 0,
              transition: 'opacity 1s ease',
              zIndex: 0,
            }}
          >
            <Image
              src={src}
              alt={`Vertex 33 ${idx + 1}`}
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'center center',
              }}
              priority={idx === 0}
              sizes="100vw"
              quality={100}
            />
          </div>
        ))}

        {/* Dark gradient overlay - limited to bottom text area */}
        <div style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          height: isMobile ? '50%' : '35%',
          zIndex: 1,
          background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)',
          pointerEvents: 'none'
        }} />

        {/* Center-bottom text */}
        <div
          style={{
            position: 'absolute', left: 0, right: 0,
            bottom: isMobile ? '10px' : '180px',
            zIndex: 2, textAlign: 'center', padding: '0 16px',
          }}
        >
          {/* Project Tagline - Commented out as requested
          <div style={{ marginBottom: isMobile ? '6px' : '14px' }}>
            <span style={{
              background: 'rgba(0, 0, 0, 0.5)',
              border: '1.5px solid var(--color-gold)',
              padding: isMobile ? '4px 16px' : '7px 28px',
              borderRadius: '50px',
              color: 'var(--color-gold)',
              fontFamily: F_JOST,
              fontSize: isMobile ? '10px' : 'clamp(12px, 1.4vw, 15px)',
              fontWeight: '800',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              display: 'inline-block',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.4)'
            }}>
              West at Nallagandla
            </span>
          </div>
          */}

          <h1 style={{
            background: 'rgba(0, 0, 0, 0.5)',
            border: '2px solid var(--color-gold)',
            padding: isMobile ? '6px 20px' : '12px 40px',
            borderRadius: '50px',
            fontFamily: F_JOST,
            fontSize: isMobile ? '18px' : 'clamp(20px, 3.2vw, 46px)',
            fontWeight: '800',
            color: '#ffffff',
            margin: isMobile ? '0 0 8px' : '0 0 16px',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            textShadow: '0 2px 20px rgba(0,0,0,0.5)',
            display: 'inline-block',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.4)'
          }}>
            VERTEX 33 <span style={{ color: 'var(--color-gold)' }}>WEST</span>
          </h1>

          {/* Location & Phone */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: isMobile ? '6px' : 'clamp(6px, 2vw, 24px)',
            flexWrap: 'wrap', marginTop: '2px',
            filter: 'drop-shadow(0 2px 10px rgba(0,0,0,0.7))'
          }}>
            {/* Location */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span style={{
                fontFamily: F_SANS,
                fontSize: isMobile ? '10px' : 'clamp(13px, 1.2vw, 15px)',
                color: '#ffffff', fontWeight: '600', letterSpacing: '0.04em', textTransform: 'uppercase',
              }}>
                Nallagandla, Gachibowli, Hyderabad
              </span>
            </div>

            {/* Separator — Hidden on small mobile */}
            <div className="hidden xs:block" style={{ width: '1px', height: '14px', background: 'rgba(255,255,255,0.4)' }} />

            {/* Phone */}
            <a href="tel:+919718344024" style={{ display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span style={{
                fontFamily: F_SANS,
                fontSize: isMobile ? '10px' : 'clamp(13px, 1.2vw, 15px)',
                color: '#ffffff', fontWeight: '700', letterSpacing: '0.04em',
              }}>
                +91 9718 344 024
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Bottom info bar ──
          Mobile: relative, flows naturally right below the image wrapper (zero gap)
          Desktop: absolute, pinned to bottom of the full-viewport section */}
      <div style={{
        position: 'relative',
        zIndex: 5,
      }}>
        {/* USP row */}
        <div style={{
          background: 'rgba(13,59,80,0.92)',
          backdropFilter: 'blur(8px)',
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
          borderTop: '1px solid rgba(var(--color-gold-rgb),0.35)',
          width: '100%',
        }}>
          {[
            'Exclusive 2 Towers Launch',
            '524 units of Vastu-compliant',
            '3 Acres Land Parcel',
          ].map((point, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: '6px', padding: isMobile ? '10px 8px' : '14px 12px',
              borderRight: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none',
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span style={{
                fontFamily: F_SANS, fontSize: 'clamp(10px, 1.5vw, 13px)',
                fontWeight: '600', color: '#ffffff', letterSpacing: '0.02em',
              }}>
                {point}
              </span>
            </div>
          ))}
        </div>

        {/* Pricing row */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(12,53,71,0.98) 0%, rgba(14,67,88,0.95) 100%)',
          backdropFilter: 'blur(12px)',
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
          borderTop: '1px solid rgba(var(--color-gold-rgb),0.25)',
          boxShadow: isMobile ? 'none' : '0 -10px 40px rgba(7,30,40,0.6)',
          overflow: 'hidden',
          width: '100%',
        }}>
          {[
            { label: 'STATUS', value: 'New Launch' },
            { label: 'CONFIGURATIONS', value: '2.5 & 3 BHK Luxury APT.' },
            { label: 'PRICE', value: '₹ 1.45 Cr*' },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                textAlign: 'center',
                padding: isMobile ? '10px 8px' : '14px 12px',
                borderRight: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '2px'
              }}
            >
              <span style={{
                fontFamily: F_JOST,
                fontSize: 'clamp(8px, 1.2vw, 11px)',
                fontWeight: '600',
                color: 'var(--color-gold)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                opacity: 0.9
              }}>
                {item.label}
              </span>
              <span style={{
                fontFamily: F_JOST,
                fontSize: 'clamp(10px, 1.8vw, 16px)',
                fontWeight: '700',
                color: '#ffffff',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                textShadow: '0 1px 4px rgba(0,0,0,0.3)',
              }}>
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
