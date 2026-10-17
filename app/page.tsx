"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowDownRight, ArrowUpRight, Menu, X } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { AnimatedNoise } from "@/components/animated-noise"
import { ScrambleTextOnHover } from "@/components/scramble-text"
import { BiomecHero } from "@/components/biomec-hero"

gsap.registerPlugin(ScrollTrigger)

const stages = [
  ["01", "ASSESS", "Establish the baseline", "Measure what matters so the next decision is clear."],
  ["02", "REBUILD", "Address what limits you", "Resolve pain, restrictions, asymmetries and capacity gaps."],
  ["03", "TRAIN", "Build capacity with intent", "Progress strength, fitness and skill around the person."],
  ["04", "PERFORM", "Use it where it matters", "Apply the work to life, training, work or sport."],
]

const assessments = [
  { level: "LEVEL 1", price: "INR 2,000", title: "Lifestyle Assessment", tag: "Know your body", body: "A practical starting point covering body composition, posture, balance and basic strength.", best: "Beginners, active adults and anyone restarting." },
  { level: "LEVEL 2", price: "INR 3,500", title: "Movement Assessment", tag: "Move better", body: "A closer look at mobility, control, balance and strength across training and everyday movement.", best: "Active adults, recurring stiffness and return to exercise." },
  { level: "LEVEL 3", price: "INR 5,000", title: "Performance Assessment", tag: "Perform better", body: "A wider profile of the qualities behind sport, competition or a demanding personal goal.", best: "Athletes, runners, young athletes and HYROX preparation." },
]

const faqs = [
  ["Is BMF a gym?", "Yes. It is also the assessment, rehabilitation and performance system around the gym, so your programme can adapt as your needs change."],
  ["Do I need to be fit before joining?", "No. BMF meets you at your current level."],
  ["Which assessment should I choose?", "Choose Level 1 for a lifestyle and body overview, Level 2 for movement analysis, or Level 3 for a wider performance profile. The team can guide you if you are unsure."],
  ["What happens after an assessment?", "Your results are explained, priorities are identified and you receive a recommended next step."],
  ["Can BMF help with pain or injury?", "BMF provides rehabilitation and return-to-activity support, with referral for further medical evaluation where appropriate."],
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const pageRef = useRef<HTMLElement>(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".hero-copy", {
        y: -100,
        opacity: 0,
        scrollTrigger: { trigger: ".hero-section", start: "top top", end: "bottom top", scrub: 1 },
      })
    }, pageRef)
    return () => ctx.revert()
  }, [])

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main ref={pageRef} className="bmf-site">
      <header className="site-header">
        <button className="wordmark" onClick={() => scrollTo("top")} aria-label="BMF home">BMF<span>®</span></button>
        <nav className={menuOpen ? "mobile-nav open" : "mobile-nav"} aria-label="Main navigation">
          {[["system", "The system"], ["assess", "Assess"], ["train", "Train + rehab"], ["perform", "Perform"], ["about", "About"]].map(([id, label]) => <button key={id} onClick={() => scrollTo(id)}>{label}</button>)}
        </nav>
        <div className="header-actions"><span className="coming">Soon in Delhi NCR</span><button className="button button-dark" onClick={() => scrollTo("start")}>Book an assessment <ArrowUpRight data-icon="inline-end" /></button><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button></div>
      </header>

      <BiomecHero onBookClick={() => scrollTo("start")} onExploreClick={() => scrollTo("system")} />

      <section id="system" className="section cream-section intro-section">
        <div className="section-label reveal"><span>01</span><span>The BMF difference</span></div>
        <div className="intro-layout"><div className="display-xl reveal">Your plan begins<br /><em>with understanding.</em></div><div className="intro-text reveal"><p>BMF measures the factors that shape your plan: your body, movement, capacity, goals and context. Then we connect the right expertise around what you need now, and what you want to do next.</p><button className="text-link dark-link" onClick={() => scrollTo("assess")}>Find your starting point <ArrowUpRight data-icon="inline-end" /></button></div></div>
      </section>

      <section className="section brown-section journey-section">
        <div className="section-label light-label reveal"><span>02</span><span>One system. Four stages.</span></div>
        <div className="section-heading reveal"><h2>From information<br /><em>to action.</em></h2><p>The stages are not membership tiers. They are the logic behind every BMF pathway.</p></div>
        <div className="stage-grid">{stages.map(([number, title, subtitle, body]) => <article className="stage-card" key={number}><span className="stage-number">{number}</span><div><h3>{title}</h3><p className="stage-subtitle">{subtitle}</p><p>{body}</p></div><ArrowUpRight className="stage-arrow" /></article>)}</div>
      </section>

      <section id="assess" className="section cream-section assess-section">
        <div className="section-label reveal"><span>03</span><span>Assess</span></div>
        <div className="section-heading reveal"><h2>Know what your body can do.<br /><em>Know what to do next.</em></h2><p>Whether you are starting to exercise, training consistently, returning after pain or preparing to compete, BMF measures the qualities that matter to your goal.</p></div>
        <div className="assessment-grid">{assessments.map((item) => <article className="assessment-card reveal" key={item.level}><div className="card-top"><span>{item.level}</span><b>{item.price}</b></div><h3>{item.title}</h3><p className="card-tag">{item.tag}</p><p>{item.body}</p><div className="best-for"><small>BEST FOR</small><span>{item.best}</span></div><button className="card-link" onClick={() => scrollTo("start")}>Choose this assessment <ArrowUpRight data-icon="inline-end" /></button></article>)}</div>
      </section>

      <section id="train" className="section dark-section train-section"><div className="section-label light-label reveal"><span>04</span><span>Train + rehabilitation</span></div><div className="split-heading"><h2 className="reveal">Build capacity.<br /><em>Restore confidence.</em><br />Keep moving forward.</h2><div className="reveal"><p>Train for health and strength, rebuild after pain or injury, or progress back to activity with a plan linked to your assessment.</p><button className="button button-cream" onClick={() => scrollTo("start")}>Start with an assessment <ArrowUpRight data-icon="inline-end" /></button></div></div><div className="route-grid"><div className="route-card reveal"><span>A /</span><h3>Gym + coaching</h3><p>A premium training environment built around progression, coaching and intent.</p><ul><li>General training</li><li>Personal coaching</li><li>Performance training</li><li>Progress reviews</li></ul></div><div className="route-card route-card-outline reveal"><span>B /</span><h3>Rehabilitation + return</h3><p>Pain can interrupt activity, but it should not erase the plan.</p><div className="mini-flow">UNDERSTAND <i>→</i> SETTLE <i>→</i> REBUILD <i>→</i> RETURN <i>→</i> REASSESS</div></div></div></section>

      <section id="perform" className="section orange-section"><div className="section-label reveal"><span>05</span><span>Perform / partnerships</span></div><div className="perform-grid"><div className="reveal"><h2>Train what matters.<br /><em>Measure what changes.</em></h2><p>Performance development for athletes who need a clearer view of physical qualities, sport demands and the next training priority.</p><button className="text-link dark-link" onClick={() => scrollTo("start")}>Build a performance profile <ArrowUpRight data-icon="inline-end" /></button></div><div className="cycle reveal">{["PROFILE", "PRIORITISE", "PROGRAMME", "MONITOR", "REASSESS"].map((x, i) => <div key={x}><span>0{i + 1}</span>{x}{i < 4 && <i>↓</i>}</div>)}</div></div><div className="partner-strip reveal"><div><small>SCHOOLS</small><h3>Measure potential.<br />Protect participation.</h3><p>On-campus profiling that gives students, coaches and schools objective insight into movement, fitness and sport readiness.</p></div><div><small>CORPORATE WELLNESS</small><h3>Better information<br />for healthier teams.</h3><p>Assessment-led wellness programmes that turn screening, education and practical action into a plan employees can use.</p></div></div></section>

      <section id="about" className="section cream-section about-section"><div className="section-label reveal"><span>06</span><span>About BMF</span></div><div className="about-layout"><h2 className="reveal">Fitness works better<br /><em>when the right people</em><br />share the same information.</h2><div className="reveal"><p>BMF was built to connect what is often fragmented: gym training, assessment, sports physiotherapy, return to activity and performance development. The result is a system that gives each person a clearer starting point and a more coherent way forward.</p><div className="team-list"><div><b>Raghav Maheshwari</b><span>CSCS · Chartered Accountant</span></div><div><b>Nilam Dave</b><span>Sports Physiotherapist · MPT</span></div><div><b>Lakshay Batra</b><span>Sports Performance · MSc · CSCS</span></div></div></div></div></section>

      <section id="start" className="section start-section"><div className="start-card"><div className="section-label light-label"><span>START HERE</span><span>Coming soon to Delhi NCR</span></div><div className="start-layout"><div><h2>Tell us what you want to improve.<br /><em>We will guide the next step.</em></h2><p>Choose your route and the BMF team will respond with the most relevant starting point.</p></div>{submitted ? <div className="success-state"><span>✓</span><h3>Thank you.</h3><p>We have your enquiry and will guide you to the right next step.</p></div> : <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}><label>Name<input required placeholder="Your name" /></label><label>Email or mobile<input required placeholder="How can we reach you?" /></label><label>What brings you to BMF?<select defaultValue=""><option value="" disabled>Select a route</option><option>I want an assessment</option><option>I want to train</option><option>I need rehabilitation</option><option>I am an athlete or parent</option><option>I represent a school</option><option>I represent an organisation</option></select></label><label>Tell us more<textarea placeholder="Your goal, challenge or programme need" rows={3} /></label><button className="button button-cream" type="submit">Send enquiry <ArrowUpRight data-icon="inline-end" /></button></form>}</div></div></section>

      <section className="section faq-section cream-section">
        <div className="section-label reveal"><span>FAQ</span><span>Questions, answered</span></div>
        <div className="faq-layout">
          <div className="faq-intro reveal">
            <h2>Frequently asked<br /><em>questions.</em></h2>
            <p>Everything you need to know about the BMF system, our diagnostic assessments, and getting started on the right pathway.</p>
            <div className="faq-help-card">
              <span className="faq-help-label">HAVE A SPECIFIC QUESTION?</span>
              <p>Whether you are navigating pain, training for an athletic goal, or restarting exercise, our team will guide you.</p>
              <button className="text-link dark-link" onClick={() => scrollTo("start")}>
                Speak with our team <ArrowUpRight data-icon="inline-end" />
              </button>
            </div>
          </div>
          <div className="faq-list">
            {faqs.map(([q, a]) => (
              <details className="faq-item reveal" key={q}>
                <summary>{q}<span>+</span></summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <footer className="site-footer"><div><button className="wordmark" onClick={() => scrollTo("top")}>BMF<span>®</span></button><p>Assessment-led fitness,<br />rehabilitation and performance.</p></div><div><b>ASSESS · REBUILD · TRAIN · PERFORM</b><p>© 2026 Biomec Fitness India<br />Soon in Delhi NCR</p></div><div><button onClick={() => scrollTo("assess")}>Assess</button><button onClick={() => scrollTo("train")}>Train + rehab</button><button onClick={() => scrollTo("perform")}>Perform</button><button onClick={() => scrollTo("start")}>Contact</button></div></footer>
    </main>
  )
}
