'use client'
import React, { useState } from 'react'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'

const amenities = [
  {
    label: 'Yoga / Meditation',
    icon: (hovered) => (
      <svg width="72" height="72" viewBox="0 0 52 52" fill="none" stroke={hovered ? '#ffffff' : '#1a1a1a'} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="26" cy="10" r="4" />
        <path d="M26 14v8" />
        <path d="M10 28c4-4 8-6 16-6s12 2 16 6" />
        <path d="M14 28l-6 10h8l4-6" />
        <path d="M38 28l6 10h-8l-4-6" />
        <path d="M20 36h12" />
        <line x1="10" y1="46" x2="42" y2="46" />
      </svg>
    ),
  },
  {
    label: 'Coffee Shop',
    icon: (hovered) => (
      <svg width="72" height="72" viewBox="0 0 52 52" fill="none" stroke={hovered ? '#ffffff' : '#1a1a1a'} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 20h20l-3 18H17L14 20z" />
        <path d="M34 24h4a4 4 0 010 8h-4" />
        <path d="M18 14c0-3 4-3 4-6" />
        <path d="M26 14c0-3 4-3 4-6" />
        <line x1="10" y1="42" x2="42" y2="42" />
      </svg>
    ),
  },
  {
    label: 'Grand Lobby',
    icon: (hovered) => (
      <svg width="72" height="72" viewBox="0 0 52 52" fill="none" stroke={hovered ? '#ffffff' : '#1a1a1a'} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 42V20l18-12 18 12v22" />
        <rect x="20" y="28" width="12" height="14" />
        <line x1="8" y1="42" x2="44" y2="42" />
        <path d="M16 20v14M36 20v14" />
        <path d="M20 14h12" />
      </svg>
    ),
  },
  {
    label: 'Gymnasium',
    icon: (hovered) => (
      <svg width="72" height="72" viewBox="0 0 52 52" fill="none" stroke={hovered ? '#ffffff' : '#1a1a1a'} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" y1="26" x2="44" y2="26" />
        <rect x="4" y="22" width="8" height="8" rx="2" />
        <rect x="40" y="22" width="8" height="8" rx="2" />
        <rect x="14" y="18" width="6" height="16" rx="3" />
        <rect x="32" y="18" width="6" height="16" rx="3" />
      </svg>
    ),
  },
  // {
  //   label: 'Swimming Pool',
  // },
  // {
  //   label: 'Clubhouse',
  // },
  // {
  //   label: "Kids' Play Area",
  // },
  // {
  //   label: 'Landscaped Gardens',
  // },
  // {
  //   label: 'Jogging Track',
  // },
  // {
  //   label: 'Spacious Parking',
  // },
]

const VISIBLE = 3

const AmenityCard = ({ item, index, start }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      key={`${start}-${index}`}
      data-aos="fade-up"
      data-aos-delay={index * 60}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#111111' : '#ffffff',
        borderRadius: '4px',
        padding: '36px 20px 28px',
        textAlign: 'center',
        border: hovered ? '1px solid #111' : '1px solid #e8e8e8',
        boxShadow: hovered ? '0 8px 32px rgba(0,0,0,0.35)' : '0 2px 12px rgba(0,0,0,0.06)',
        transition: 'background 0.3s, border-color 0.3s, box-shadow 0.3s',
      }}
    >
      {/* Icon */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '18px',
      }}>
        {item.icon(hovered)}
      </div>

      {/* Label */}
      <p style={{
        fontFamily: F_JOST, fontWeight: '600', fontSize: '14px',
        color: hovered ? '#ffffff' : '#1a1a1a',
        margin: '0 0 12px', letterSpacing: '0.02em',
        transition: 'color 0.3s',
      }}>
        {item.label}
      </p>

      {/* Gold underline */}
      <div style={{
        width: '36px', height: '2px',
        background: 'var(--color-gold)',
        margin: '0 auto',
        borderRadius: '1px',
      }} />
    </div>
  )
}

const Amenities = ({ setIsOpen }) => {
  const [start, setStart] = useState(0)

  const prev = () => setStart(s => (s - 1 + amenities.length) % amenities.length)
  const next = () => setStart(s => (s + 1) % amenities.length)

  const visible = Array.from({ length: VISIBLE }, (_, i) => amenities[(start + i) % amenities.length])

  return (
    <section id="amenities" style={{ padding: '72px 0', background: '#f5f5f5' }}>
      <div style={{ padding: '0 clamp(16px, 4vw, 48px)' }}>

        {/* Heading */}
        <h2
          data-aos="fade-up"
          style={{
            fontFamily: F_JOST, fontWeight: '800',
            fontSize: 'clamp(28px,4vw,40px)',
            color: '#1a1a1a', textAlign: 'center',
            textTransform: 'uppercase', letterSpacing: '0.04em',
            margin: '0 0 14px',
          }}
        >
          AMENITIES
        </h2>
        <div style={{ width: '60px', height: '4px', background: 'var(--color-gold)', margin: '0 auto 44px', borderRadius: '2px' }} />

        {/* Slider row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>

          {/* Left arrow */}
          <button
            onClick={prev}
            style={{
              flexShrink: 0, width: '44px', height: '44px',
              background: 'var(--color-gold)', border: 'none', borderRadius: '2px',
              color: '#fff', fontSize: '22px', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-gold-dark)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-gold)')}
            aria-label="Previous"
          >
            ‹
          </button>

          {/* Cards */}
          <div style={{
            flex: 1,
            display: 'grid',
            gap: '16px',
          }}
            className="grid grid-cols-1 sm:grid-cols-3">
            {visible.map((item, i) => (
              <AmenityCard key={`${start}-${i}`} item={item} index={i} start={start} />
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            style={{
              flexShrink: 0, width: '44px', height: '44px',
              background: 'var(--color-gold)', border: 'none', borderRadius: '2px',
              color: '#fff', fontSize: '22px', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-gold-dark)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-gold)')}
            aria-label="Next"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '28px' }}>
          {amenities.map((_, i) => (
            <button
              key={i}
              onClick={() => setStart(i)}
              style={{
                width: start === i ? '24px' : '8px',
                height: '4px',
                background: start === i ? 'var(--color-gold)' : '#ccc',
                border: 'none', borderRadius: '2px', cursor: 'pointer',
                transition: 'all 0.3s',
              }}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Amenities
