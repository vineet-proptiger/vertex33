'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { logoImages } from '../lib/images'

const PHONE = '9718344024'
const PHONE_DISPLAY = '9718 344 024'

const navLinks = [
  { name: 'HOME', href: '#' },
  { name: 'OVERVIEW', href: '#overview' },
  { name: 'HIGHLIGHTS', href: '#highlights' },
  { name: 'GALLERY', href: '#gallery' },
  { name: 'PRICE LIST', href: '#pricing' },
  { name: 'AMENITIES', href: '#amenities' },
  { name: 'LOCATION', href: '#location' },
  { name: 'FLOOR PLANS', href: '#masterplan' },
]

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'

const Navbar = ({ setIsOpen }) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: (scrolled || mobileOpen) ? 'rgba(13,59,80,0.97)' : 'rgba(13,59,80,0)',
        borderBottom: (scrolled || mobileOpen) ? '1px solid rgba(196,149,42,0.2)' : '1px solid transparent',
        boxShadow: scrolled ? '0 2px 20px rgba(13,59,80,0.5)' : 'none',
        transition: 'background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease',
      }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-[88px]">

          {/* Logo */}
          <a href="#" className="flex items-center shrink-0">
            <img
              src={logoImages.main}
              alt="Vertex 33"
              style={{ height: 'clamp(115px, 30vw, 160px)', width: 'auto', objectFit: 'contain', maxWidth: '600px' }}
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  fontFamily: F_JOST,
                  fontSize: '14px',
                  fontWeight: '700',
                  color: '#ffffff',
                  letterSpacing: '0.03em',
                  textTransform: 'uppercase',
                  transition: 'color 0.2s',
                  position: 'relative',
                }}
                onMouseEnter={e => (e.target.style.color = 'var(--color-gold)')}
                onMouseLeave={e => (e.target.style.color = '#ffffff')}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Phone — Desktop */}
          {/* <a
            href={`tel:${PHONE}`}
            className="hidden lg:block"
            style={{
              fontFamily: F_JOST,
              fontSize: '20px',
              fontWeight: '700',
              color: '#ffffff',
              letterSpacing: '0.02em',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.target.style.color = 'var(--color-gold)')}
            onMouseLeave={e => (e.target.style.color = '#ffffff')}
          >
            {PHONE_DISPLAY}
          </a> */}

          {/* Mobile hamburger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ color: '#fff', padding: '4px', background: 'none', border: 'none' }}
              aria-label="Toggle Menu"
            >
              {mobileOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{ background: '#0D3B50', borderTop: '1px solid rgba(196,149,42,0.2)' }}>
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'block',
                padding: '14px 24px',
                fontFamily: F_JOST,
                fontSize: '14px',
                fontWeight: '700',
                color: '#ffffff',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                transition: 'color 0.2s, background 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-gold)'; e.currentTarget.style.background = 'rgba(255,255,255,0.07)' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.background = 'transparent' }}
            >
              {link.name}
            </a>
          ))}
          <div style={{ padding: '16px 24px' }}>
            <button
              onClick={() => { setIsOpen(true); setMobileOpen(false) }}
              className="btn-gold w-full"
              style={{ padding: '12px', fontSize: '13px' }}
            >
              ENQUIRE NOW
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
