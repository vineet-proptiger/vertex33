'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { heroImages } from '../lib/images'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'

const slides = [heroImages.banner, heroImages.banner2]

const Hero = ({ setIsOpen }) => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % slides.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden h-[72svh] md:h-[100svh]"
      style={{
        paddingTop: 0,
        paddingBottom: 0,
      }}
    >
      {/* ── Background image carousel ── */}
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
            className="object-cover hero-img"
            priority={idx === 0}
            sizes="100vw"
            quality={100}
          />
        </div>
      ))}

      {/* ── Dark gradient overlay ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0) 100%)',
      }} />


      {/* ── Center-bottom text ── */}
      <div className="absolute left-0 right-0 top-[30%] sm:top-auto sm:bottom-[120px]" style={{
        zIndex: 2, textAlign: 'center', padding: '0 16px',
      }}>
        {/* Project Tagline */}
        <div style={{ marginBottom: '14px' }}>
          <span style={{
            background: 'rgba(0, 0, 0, 0.5)',
            border: '1.5px solid var(--color-gold)',
            padding: '7px 28px',
            borderRadius: '50px',
            color: 'var(--color-gold)',
            fontFamily: F_JOST,
            fontSize: 'clamp(12px, 1.4vw, 15px)',
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

        <h1 style={{
          fontFamily: F_JOST,
          fontSize: 'clamp(20px, 3.2vw, 46px)',
          fontWeight: '800',
          color: '#ffffff',
          margin: '0 0 8px',
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          textShadow: '0 2px 20px rgba(0,0,0,0.5)',
        }}>
          VERTEX 33
        </h1>

        {/* Location & Phone */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'clamp(6px, 2vw, 24px)',
          flexWrap: 'wrap', marginTop: '2px'
        }}>
          {/* Location */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span style={{
              fontFamily: F_SANS, fontSize: 'clamp(13px, 1.2vw, 15px)', color: '#ffffff',
              fontWeight: '600', letterSpacing: '0.04em', textTransform: 'uppercase',
            }}>
              Nallagandla, Gachibowli, Hyderabad
            </span>
          </div>

          {/* Separator — Hidden on small mobile */}
          <div className="hidden xs:block" style={{ width: '1px', height: '14px', background: 'rgba(255,255,255,0.4)' }} />

          {/* Phone */}
          <a href="tel:+919718344024" style={{ display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span style={{
              fontFamily: F_SANS, fontSize: 'clamp(13px, 1.2vw, 15px)', color: '#ffffff',
              fontWeight: '700', letterSpacing: '0.04em',
            }}>
              +91 9718 344 024
            </span>
          </a>
        </div>
      </div>

      {/* ── Dot indicators ── */}
      {/* <div style={{
        position: 'absolute', bottom: '110px', left: '50%',
        transform: 'translateX(-50%)', zIndex: 3,
        display: 'flex', gap: '8px',
      }}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            style={{
              width: current === idx ? '28px' : '8px',
              height: '4px',
              background: current === idx ? 'var(--color-gold)' : 'rgba(255,255,255,0.5)',
              border: 'none', borderRadius: '2px', cursor: 'pointer',
              transition: 'all 0.4s ease',
            }}
          />
        ))}
      </div> */}

      {/* ── Bottom info bar ── */}
      <div className="-bottom-4 lg:bottom-0" style={{
        position: 'absolute', left: 0, right: 0, zIndex: 5,
      }}>
        {/* USP row */}
        <div style={{
          background: 'rgba(13,59,80,0.82)',
          backdropFilter: 'blur(8px)',
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
          borderTop: '1px solid rgba(var(--color-gold-rgb),0.35)',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          {[
            'Exclusive 2 Towers',
            ' 524 units of Vastu-compliant ',
            '3 Acres Land Parcel',
          ].map((point, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: '8px', padding: '10px 12px',
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

        <div style={{
          background: 'linear-gradient(135deg, rgba(12,53,71,0.98) 0%, rgba(14,67,88,0.95) 100%)',
          backdropFilter: 'blur(12px)',
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
          borderTop: '1px solid rgba(var(--color-gold-rgb),0.25)',
          boxShadow: '0 -10px 40px rgba(7,30,40,0.6)',
          overflow: 'hidden',
          margin: '0 auto',
          maxWidth: '1200px',
        }}>
          {[
            'New Launch',
            '2.5 & 3 BHK Luxury APARTMENTS',
            '₹ 1.45 Cr* ONWARDS',
          ].map((text, i) => (
            <div
              key={i}
              style={{
                textAlign: 'center',
                padding: '14px 12px',
                borderRight: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none',
              }}
            >
              <span style={{
                fontFamily: F_JOST,
                fontSize: 'clamp(11px, 1.8vw, 16px)',
                fontWeight: '700',
                color: '#ffffff',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                textShadow: '0 1px 4px rgba(0,0,0,0.3)',
              }}>
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
