"use client";

import { FormEvent, useState } from "react";

const services = [
  {
    number: "01",
    title: "Landscape design & installation",
    copy: "Thoughtful layouts, planting plans, and site improvements for residential and commercial properties.",
    tags: ["Design", "Planting", "Site additions"],
  },
  {
    number: "02",
    title: "Hardscaping",
    copy: "Retaining walls and paver surfaces shaped for the way your property needs to move, drain, and live.",
    tags: ["Pavers", "Retaining walls", "Driveways"],
  },
  {
    number: "03",
    title: "Fences & gates",
    copy: "New fence and gate installation, repair, staining, painting, and weatherproofing.",
    tags: ["Installation", "Repair", "Finishing"],
  },
  {
    number: "04",
    title: "Irrigation & repair",
    copy: "Irrigation work and practical landscape repairs to help established outdoor spaces work better.",
    tags: ["Irrigation", "Repair", "Troubleshooting"],
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  name: "Leonardi Landscaping",
  telephone: "+1-425-422-6199",
  address: {
    "@type": "PostalAddress",
    streetAddress: "18318 State Route 203",
    addressLocality: "Monroe",
    addressRegion: "WA",
    postalCode: "98272",
    addressCountry: "US",
  },
  areaServed: "Monroe, Washington area",
  openingHours: "Mo-Fr 08:00-17:00",
  priceRange: "$$$",
  makesOffer: [
    "Landscape design and installation",
    "Hardscaping",
    "Fences and gates",
    "Irrigation",
  ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
};

export default function Home() {
  const [sent, setSent] = useState(false);

  function submitDemo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="proposal-bar">
        <span>Website concept</span>
        <p>Dashed labels mark content Leonardi should confirm or provide before launch.</p>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Leonardi Landscaping home">
          <span className="brand-mark" aria-hidden="true">L</span>
          <span>Leonardi<small>Landscaping</small></span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#work">Our work</a>
          <a href="#about">About</a>
        </nav>
        <a className="header-call" href="tel:+14254226199">
          <span>Call today</span>
          (425) 422-6199
        </a>
        <a className="button button-small" href="#quote">Request a quote <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <img src="/leonardi-landscape-concept.png" alt="Pacific Northwest landscape concept with stone path, retaining wall, and native planting" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow"><span /> Residential + commercial · Monroe, WA</p>
          <h1>Outdoor spaces,<br /><em>built to belong.</em></h1>
          <p className="hero-copy">Landscape construction, hardscaping, fencing, and irrigation for properties across the Monroe area.</p>
          <div className="hero-actions">
            <a className="button button-light" href="#quote">Start your project <span>↗</span></a>
            <a className="text-link" href="#services">Explore services <span>↓</span></a>
          </div>
        </div>
        <div className="concept-tag hero-tag"><b>Concept image</b><span>Replace with a Leonardi project photo</span></div>
        <div className="hero-bottom">
          <p>Serving Monroe<br />and the surrounding area</p>
          <p>Monday–Friday<br />8:00 AM–5:00 PM</p>
          <a href="#quote">Tell us what you’re planning <span>→</span></a>
        </div>
      </section>

      <section className="intro section-pad">
        <p className="section-kicker">What we build</p>
        <div>
          <h2>One team for the ground,<br />the structure, and the finish.</h2>
          <p>From the first site addition to the last planted edge, Leonardi brings core outdoor construction services together under one roof.</p>
        </div>
      </section>

      <section className="services" id="services">
        {services.map((service) => (
          <article className="service-card" key={service.number}>
            <div className="service-top"><span>{service.number}</span><i>↗</i></div>
            <h3>{service.title}</h3>
            <p>{service.copy}</p>
            <ul>{service.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
          </article>
        ))}
      </section>

      <section className="split-feature" id="work">
        <div className="feature-image" role="img" aria-label="Conceptual close-up of Pacific Northwest landscape materials">
          <div className="material-grid">
            <span className="stone" /><span className="fern">✦</span><span className="cedar" />
          </div>
          <div className="concept-tag"><b>Portfolio needed</b><span>Add 6–12 real before/after projects</span></div>
        </div>
        <div className="feature-copy">
          <p className="section-kicker light">Built for this place</p>
          <h2>Northwest landscapes ask more of every detail.</h2>
          <p>Water, slope, soil, privacy, and four-season texture all shape a successful site. The strongest portfolio story will show how Leonardi solves those conditions—not just how the finished yard looks.</p>
          <div className="proof-placeholder">
            <span>Client to confirm</span>
            <strong>Project approach, materials, warranties, and credentials</strong>
            <p>This area is intentionally reserved for Leonardi’s real differentiators.</p>
          </div>
        </div>
      </section>

      <section className="process section-pad" id="process">
        <div className="process-head">
          <div><p className="section-kicker">A clear path forward</p><h2>From first call<br />to final walkthrough.</h2></div>
          <div className="concept-note"><span>Suggested process</span><p>Confirm these steps and timing before the site goes live.</p></div>
        </div>
        <div className="steps">
          <article><span>01</span><h3>Share the scope</h3><p>Tell us about the property, priorities, and the work you have in mind.</p></article>
          <article><span>02</span><h3>Walk the site</h3><p>Meet on site to review access, conditions, materials, and project fit.</p></article>
          <article><span>03</span><h3>Review the plan</h3><p>Align on scope, selections, scheduling, and a written project estimate.</p></article>
          <article><span>04</span><h3>Build with care</h3><p>Coordinate the work through installation and a final project review.</p></article>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-copy">
          <p className="section-kicker light">Leonardi Landscaping</p>
          <h2>Landscape work for homes, businesses, and the space between.</h2>
          <p>Based in Monroe, Leonardi provides residential and commercial landscaping services including hardscaping, fencing, irrigation, repairs, and design.</p>
          <a className="text-link light-link" href="#quote">Plan a site visit <span>→</span></a>
        </div>
        <div className="about-stats">
          <div><span>Based in</span><strong>Monroe, WA</strong></div>
          <div><span>Project types</span><strong>Residential + commercial</strong></div>
          <div className="unverified-stat"><span>Client to add</span><strong>Years in business</strong></div>
          <div className="unverified-stat"><span>Client to add</span><strong>License + insurance</strong></div>
        </div>
      </section>

      <section className="reputation section-pad">
        <div>
          <p className="section-kicker">Trust is built in the details</p>
          <h2>Let the work—and the people behind it—make the case.</h2>
        </div>
        <div className="reputation-card">
          <span className="quote-mark">“</span>
          <p>Add 2–3 verified customer stories here, ideally tied to named projects and original photography.</p>
          <div><span>Testimonials needed</span><small>Client-supplied or permission-cleared</small></div>
        </div>
      </section>

      <section className="quote-section" id="quote">
        <div className="quote-intro">
          <p className="section-kicker light">Start a conversation</p>
          <h2>What could your<br />outdoor space become?</h2>
          <p>Share a few details. Leonardi can follow up to talk through your property and next steps.</p>
          <a className="phone-panel" href="tel:+14254226199"><span>Prefer to call?</span><strong>(425) 422-6199</strong><i>↗</i></a>
          <div className="form-note"><span>Demo form</span><p>Connect this to Leonardi’s preferred email or CRM before launch.</p></div>
        </div>
        <form onSubmit={submitDemo}>
          {sent ? (
            <div className="success" role="status"><span>✓</span><h3>That’s the experience.</h3><p>In the live site, this message would be delivered directly to Leonardi’s team.</p><button type="button" onClick={() => setSent(false)}>Send another test</button></div>
          ) : (
            <>
              <div className="form-row"><label>Your name<input required name="name" placeholder="First and last name" /></label><label>Phone number<input required type="tel" name="phone" placeholder="(425) 555-0123" /></label></div>
              <label>Email address<input required type="email" name="email" placeholder="you@email.com" /></label>
              <div className="form-row"><label>Project type<select name="project"><option>Choose a service</option><option>Landscape design / installation</option><option>Hardscaping</option><option>Fence or gate</option><option>Irrigation / repair</option><option>Other</option></select></label><label>Project location<input name="location" placeholder="City or ZIP code" /></label></div>
              <label>Tell us about the project<textarea name="details" rows={4} placeholder="What would you like to change or build?" /></label>
              <button className="button submit-button" type="submit">Request a conversation <span>↗</span></button>
              <small className="privacy">By submitting, you agree to be contacted about your project. No spam.</small>
            </>
          )}
        </form>
      </section>

      <footer>
        <div className="footer-brand"><span className="brand-mark">L</span><h2>Leonardi<small>Landscaping</small></h2></div>
        <div><span>Visit</span><p>18318 State Route 203<br />Monroe, WA 98272</p><a href="https://maps.google.com/?q=18318+State+Route+203+Monroe+WA+98272">Get directions ↗</a></div>
        <div><span>Hours</span><p>Monday–Friday<br />8:00 AM–5:00 PM</p></div>
        <div><span>Contact</span><a href="tel:+14254226199">(425) 422-6199</a><p className="email-placeholder">Email needed</p></div>
        <p className="copyright">© 2026 Leonardi Landscaping · Website concept</p>
      </footer>
    </main>
  );
}
