"use client"

import { useState, useEffect } from "react"
import { ArrowUpRight, ArrowDownRight, ArrowRight } from "lucide-react"

interface BiomecHeroProps {
  onBookClick?: () => void
  onExploreClick?: () => void
}

const PILLARS = [
  {
    number: "01",
    name: "ASSESS",
    headline: "Diagnostic Baseline",
    summary: "Understand your body's mobility, strength symmetry, and baseline movement before writing a single exercise.",
    focus: "Force profiling · 3D movement screening · Asymmetry mapping",
    image: "/images/hero-assess.jpg",
    alt: "Coach conducting an athletic movement and mobility assessment",
  },
  {
    number: "02",
    name: "REBUILD",
    headline: "Sports Physiotherapy",
    summary: "Resolve pain, restore joint range, and rebuild tissue tolerance with dedicated clinical guidance.",
    focus: "Pain desensitisation · Load management · Kinetic chain restoration",
    image: "/images/hero-rebuild.jpg",
    alt: "Sports physiotherapist assisting with mobility and rehabilitation",
  },
  {
    number: "03",
    name: "TRAIN",
    headline: "Coached Progression",
    summary: "Build genuine physical capacity and strength in a high-intent environment structured around the person.",
    focus: "Progressive overload · Strength & conditioning · Movement quality",
    image: "/images/hero-train.jpg",
    alt: "Athlete performing focused barbell strength training",
  },
  {
    number: "04",
    name: "PERFORM",
    headline: "Athletic Resilience",
    summary: "Apply capacity to sport, competition, or daily life with resilient movement patterns that hold under load.",
    focus: "Sport transfer · Reactive power · Stamina & work capacity",
    image: "/images/hero-athlete.jpg",
    alt: "Athlete in explosive power movement",
  },
]

export function BiomecHero({ onBookClick, onExploreClick }: BiomecHeroProps) {
  const [activeIdx, setActiveIdx] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Subtle auto-advance every 6 seconds so user sees the 4 pillars, unless manually clicked
  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % PILLARS.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const current = PILLARS[activeIdx]

  return (
    <section
      id="top"
      className="hero-section relative min-h-[100svh] flex flex-col justify-center px-5 sm:px-[6vw] pt-[105px] sm:pt-[130px] pb-[40px] sm:pb-[50px] overflow-hidden select-none bg-[var(--brown)] text-[var(--cream)]"
    >
      {/* Subtle atmospheric ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          background:
            "radial-gradient(1100px circle at 80% 35%, rgba(201, 111, 59, 0.22), transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Background architectural grid */}
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-[0.14]" aria-hidden="true" />

      {/* 2-Column Hero Grid */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        
        {/* Left Column: Monolithic Editorial Typography & CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Brand Eyebrow */}
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--orange)]" />
            <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[var(--orange)] font-semibold">
              BMF INDIA
            </span>
            <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.15em] uppercase text-[#9e8574] truncate">
              / ASSESS · REBUILD · TRAIN · PERFORM
            </span>
          </div>

          {/* Monumental Athletic Title: Two-Tone Cream & Terracotta */}
          <h1
            className="font-[var(--font-bebas)] text-[clamp(3.6rem,11.5vw,11.2rem)] leading-[0.84] tracking-[-0.03em] uppercase m-0 select-text"
            aria-label="Biomec Fitness"
          >
            <span className="block text-[var(--cream)] hover:text-[var(--orange)] transition-colors duration-300">
              BIOMEC
            </span>
            <span
              className="block text-orange hover:opacity-90 transition-opacity duration-300"
              style={{ color: "var(--orange)" }}
            >
              FITNESS
            </span>
          </h1>

          {/* Core Philosophy Statement */}
          <div className="mt-6 sm:mt-8 flex items-baseline gap-4 border-l-2 border-[var(--orange)] pl-4 sm:pl-5">
            <p className="max-w-[500px] text-[#cfb7a4] text-[15px] sm:text-[17px] leading-[1.6] m-0 font-sans">
              An assessment-led fitness system connecting clinical diagnostics, rehabilitation, and high-performance training in one clear pathway.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-8">
            <button
              onClick={onBookClick}
              className="group relative inline-flex items-center justify-center gap-4 bg-[var(--cream)] text-[var(--brown)] px-8 py-4 font-mono text-[11px] font-semibold tracking-[0.14em] uppercase transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(201,111,59,0.35)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-center"
            >
              <span>Book an assessment</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>

            <button
              onClick={onExploreClick}
              className="group inline-flex items-center justify-center sm:justify-start gap-3 text-[var(--cream)] font-mono text-[11px] tracking-[0.14em] uppercase hover:text-[var(--orange)] transition-colors duration-200 cursor-pointer py-2 sm:py-3 text-center"
            >
              <span>Explore the BMF system</span>
              <ArrowDownRight className="w-4 h-4 text-[var(--orange)] transition-transform duration-300 group-hover:translate-y-1" />
            </button>
          </div>

          {/* Credentials / Center Tag */}
          <div className="mt-12 pt-6 border-t border-[rgba(235,219,196,0.12)] flex flex-wrap items-center gap-6 text-[#9a8170] font-mono text-[10px] tracking-[0.18em] uppercase">
            <span>Clinical Physiotherapy</span>
            <span>·</span>
            <span>Strength & Conditioning</span>
            <span>·</span>
            <span className="text-[var(--orange)]">Delhi NCR / 2026</span>
          </div>
        </div>

        {/* Right Column: Editorial Visual Showcase for the 4 Stages */}
        <div className="lg:col-span-5 w-full flex flex-col">
          <div className="relative border border-[rgba(235,219,196,0.18)] bg-[rgba(25,16,13,0.7)] backdrop-blur-md p-4 sm:p-7 shadow-[0_25px_60px_rgba(0,0,0,0.45)]">
            {/* Architectural Framing Corner Accents */}
            <span className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-[var(--orange)] pointer-events-none" />
            <span className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-[var(--orange)] pointer-events-none" />
            <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-[var(--orange)] pointer-events-none" />
            <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-[var(--orange)] pointer-events-none" />

            {/* Header: Stage Badge & Credo */}
            <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-[rgba(235,219,196,0.12)]">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--orange)]">
                  THE FOUR STAGES
                </span>
                <h3 className="font-[var(--font-bebas)] text-[20px] sm:text-[22px] text-[var(--cream)] m-0 leading-none mt-1">
                  {current.number} / {current.headline}
                </h3>
              </div>
              <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#8e7465]">
                {activeIdx + 1} of 4
              </span>
            </div>

            {/* Stage Selector Buttons: Clean, Editorial, Athletic */}
            <div className="mt-3 sm:mt-4 grid grid-cols-4 gap-1 p-1 bg-[rgba(15,10,8,0.7)] border border-[rgba(235,219,196,0.08)]">
              {PILLARS.map((p, idx) => {
                const isActive = activeIdx === idx
                return (
                  <button
                    key={p.number}
                    onClick={() => {
                      setIsAutoPlaying(false)
                      setActiveIdx(idx)
                    }}
                    className={`py-2 px-1 text-center font-mono uppercase transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-[var(--orange)] text-[var(--brown)] font-bold shadow-sm"
                        : "text-[#9d8574] hover:text-[var(--cream)] hover:bg-[rgba(235,219,196,0.06)]"
                    }`}
                  >
                    <span className="block text-[8px] opacity-75">{p.number}</span>
                    <span className="block text-[9px] sm:text-[10px] tracking-[0.06em]">{p.name}</span>
                  </button>
                )
              })}
            </div>

            {/* Editorial Athletic Photograph Showcase */}
            <div className="relative mt-3 sm:mt-4 h-[210px] sm:h-[260px] w-full overflow-hidden border border-[rgba(235,219,196,0.12)] bg-[#1c120e]">
              {PILLARS.map((p, idx) => (
                <div
                  key={p.number}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    activeIdx === idx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <img
                    src={p.image}
                    alt={p.alt}
                    className="w-full h-full object-cover object-center filter contrast-[1.05]"
                  />
                  {/* Subtle dark warm overlay gradient */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(25,16,13,0.92) 0%, rgba(25,16,13,0.2) 60%, transparent 100%)",
                    }}
                  />
                  {/* In-image caption tag */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono tracking-[0.14em] uppercase text-[var(--cream)]">
                    <span className="bg-[rgba(25,16,13,0.85)] px-2.5 py-1 border border-[rgba(235,219,196,0.15)] text-[var(--orange)]">
                      {p.focus}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Stage Human Description */}
            <div className="mt-4 pt-4 border-t border-[rgba(235,219,196,0.12)]">
              <p className="text-[13px] md:text-[14px] text-[#cfb8a6] leading-[1.55] m-0 font-sans">
                {current.summary}
              </p>
            </div>

            {/* Brand Credo Stamp */}
            <div className="mt-4 pt-3 border-t border-[rgba(235,219,196,0.08)] flex items-center justify-between">
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#8b7262]">
                PHILOSOPHY
              </span>
              <span className="font-[var(--font-bebas)] text-[15px] tracking-[0.08em] text-[var(--cream)]">
                CAN ONLY CHANGE WHAT WE MEASURE
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Hero Foot Coordinates */}
      <div className="hero-foot relative z-10 w-full max-w-[1400px] mx-auto mt-12 pt-6 border-t border-[rgba(235,219,196,0.12)] flex justify-between items-center text-[#8e7465] font-mono text-[9px] tracking-[0.16em] uppercase">
        <span className="hover:text-[var(--cream)] transition-colors">01 — 06 / SYSTEM OVERVIEW</span>
        <span className="hidden sm:inline-block text-[var(--orange)]">
          ↓ SCROLL TO EXPLORE
        </span>
        <span>DELHI NCR / 2026</span>
      </div>
    </section>
  )
}
