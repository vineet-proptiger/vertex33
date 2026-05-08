"use client"
import React from "react"
import Image from "next/image"
import { highlightsMainImage } from "../lib/images"

const F_JOST = "var(--font-jost), Montserrat, sans-serif"
const F_SANS = "var(--font-sans), Open Sans, sans-serif"

const highlights = [
  { title: "Signature Elevation", sub: "Iconic architecture that stands apart" },
  { title: "Designer Facadelight", sub: "Stunning designer facade & lighting" },
  { title: "Exclusive 2 Towers", sub: "Premium low-density twin tower living" },
  { title: "Low Density", sub: "More space, more privacy for residents" },
  { title: "3 Private Balconies", sub: "Every home with 3 exclusive balconies" },
  { title: "Glass Railings", sub: "Unlimited views with glass railing design" },
  { title: "Sprawling Podium", sub: "Grand podium with lifestyle amenities" },
  { title: "60,000 Joyscapes", sub: "Vast open spaces designed for joy" },
  { title: "Spacious Parking", sub: "Ample dedicated parking for residents" },
  { title: "Everything You Need", sub: "All amenities within your community" },
]

const Highlights = ({ setIsOpen }) => (
  <section id="highlights" style={{ background: "#1a1a1a", padding: "0" }}>
    <div className="flex flex-col lg:flex-row" style={{ minHeight: "560px" }}>

      <div
        className="w-full lg:w-[45%] relative p-4 sm:p-6 lg:p-8 h-[320px] sm:h-[400px] lg:h-auto"
        style={{ minHeight: "320px" }}
        data-aos="fade-right"
      >
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src={highlightsMainImage}
            alt="Vertex 33 Highlights"
            fill
            className="object-contain"
            sizes="(max-width:1024px) 100vw, 45vw"
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.15)" }} />
        </div>
      </div>

      <div
        className="w-full lg:w-[55%] flex flex-col justify-start"
        style={{ padding: "7px clamp(24px,5vw,64px) 32px" }}
        data-aos="fade-left"
      >
        <h2 style={{
          fontFamily: F_JOST, fontWeight: "800",
          fontSize: "clamp(28px,4vw,40px)",
          color: "#ffffff", margin: "0 0 14px",
          textTransform: "uppercase", letterSpacing: "0.04em", textAlign: "center",
        }}>
          HIGHLIGHTS
        </h2>
        <div style={{ width: "60px", height: "4px", background: "var(--color-gold)", margin: "0 auto 24px", borderRadius: "2px" }} />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "14px",
          marginBottom: "36px",
        }}>
          {highlights.map((h, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 60}
              style={{
                border: "1px solid #3a3a3a",
                borderRadius: "4px",
                padding: "18px 16px",
                background: "rgba(255,255,255,0.03)",
                transition: "border-color 0.25s, background 0.25s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "var(--color-gold)"
                e.currentTarget.style.background = "rgba(196,149,42,0.06)"
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "#3a3a3a"
                e.currentTarget.style.background = "rgba(255,255,255,0.03)"
              }}
            >
              <p style={{
                fontFamily: F_JOST, fontWeight: "700", fontSize: "14px",
                color: "#ffffff", margin: 0, letterSpacing: "0.02em",
              }}>
                {h.title}
              </p>
            </div>
          ))}
        </div>

        <div>
          <button
            onClick={() => setIsOpen(true)}
            className="btn-gold"
            style={{ padding: "13px 36px", fontSize: "13px", letterSpacing: "0.1em" }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            ENQUIRE NOW
          </button>
        </div>
      </div>
    </div>
  </section>
)

export default Highlights