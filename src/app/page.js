import Paper from "./components/Paper";
import Footer from "./components/footer";
import ProjectStrip from "./components/ProjectStrip";
import HeroPlane from "./components/HeroPlane";

const APPLY_URL = "https://forms.hackclub.com/capitol-apply";

// Institutions that recognise the certificate, printed as one-ink marks.
// Width and height are the design's, in px on the 758px column.
const RECOGNIZED_BY = [
  { name: "Massachusetts Institute of Technology", src: "/collage/logo-mit.png", w: 204.8, h: 48.4 },
  { name: "GitHub", src: "/collage/logo-github.png", w: 204.8, h: 58.6 },
  { name: "Girls Who Code", src: "/collage/logo-gwc.png", w: 144.99, h: 61.03 },
];

const FAQS = [
  {
    q: "What's a hackathon?",
    a: (
      <>
        <p>
          A hackathon is a social coding event where people come together to make projects. The
          goal is to come up with an idea and build a working prototype in a short amount of time,
          learning and having fun throughout.
        </p>
        <p>
          Hack Club has run many hackathons across the world, including a recent {" "}
          <a
            className="link"
            href="https://www.youtube.com/watch?v=dTGFOKblRc4"
            target="_blank"
            rel="noopener noreferrer"
          >
            200-teen hardware hackathon in
          Shenzhen, China
          </a>
          .
        </p>
      </>
    ),
  },
  {
    q: "Who can apply?",
    a: (
      <p>
        Capitol is for high school students ages 13 to 18 who live in the United States. You
        don't need to participated in the Congressional App Challenge before.
      </p>
    ),
  },
  {
    q: "How much does it cost?",
    a: (
      <p>
        Nothing. Capitol is 100% free for teenagers in the United States. We're providing food,
        merch, and need-based travel stipends so you can build in D.C. without it costing you anything.
      </p>
    ),
  },
  {
    q: "When are applications due?",
    a: (
      <p>
        Applications are due September 24th at 9am EST, and responses go
        out on a rolling basis, so the sooner you apply, the sooner you hear back.
      </p>
    ),
  },
  {
    q: "What if I don't have experience?",
    a: (
      <p>
        Hack Club Capitol welcomes participants of all skill levels. We'll have workshops throughout the
        event to help you start building, and mentors who can guide you through the process.
      </p>
    ),
  },
  {
    q: "Can I come if I'm a U.S. resident but not a citizen?",
    a: <p>Yep! As long as you're a resident, there's no citizenship requirement.</p>,
  },
  {
    q: "What's Hack Club? Is it legit?",
    a: (
      <>
        <p>
          <a className="link" href="https://hackclub.com/" target="_blank" rel="noopener noreferrer">
            Hack Club
          </a>{" "}
          is a 501(c)(3) non-profit. It's{" "}
          <a className="link" href="https://hcb.hackclub.com/hq" target="_blank" rel="noopener noreferrer">
            fiscally transparent
          </a>{" "}
          and supported by donations from GitHub, Michael Dell, and more.
        </p>
        <p>
          Hack Club has run hackathons across the world and an online event in partnership with
          NASA.
        </p>
      </>
    ),
  },
  {
    q: "Is hardware allowed?",
    a: <p>Yes, but you'll have to bring your own supplies if you want to make a hardware project.</p>,
  },
  {
    q: "What's the certificate?",
    a: (
      <p>
        An award Hack Club gives to any student who publishes and open-sources their Congressional
        App Challenge project. It's recognised by the institutions above, whether or not you place
        in your district.
      </p>
    ),
  },
  {
    q: "How do I get certified?",
    a: (
      <p>
        Open-source your project on GitHub with a README.md, enter it in the Congressional App
        Challenge, then{" "}
        <a className="link" href="/certificate">
          submit it to Hack Club
        </a>
        . That's it.
      </p>
    ),
  },
];

// Every collage piece is placed by the design's own pixel coordinates (see
// .hero__piece in globals.css). Order matters: later pieces paint on top.
function Piece({ className = "", x, y, w, h, children }) {
  return (
    <div
      className={`hero__piece ${className}`}
      style={{ "--x": x, "--y": y, "--wd": w, "--ht": h }}
      aria-hidden="true"
    >
      {children}
    </div>
  );
}

// The one action in the hero, where the comp draws its sign-up pill.
function ApplyButton() {
  return (
    <a className="hero__apply" href={APPLY_URL}>
      Apply now
      <img src="/collage/arrow-right.svg" alt="" aria-hidden="true" />
    </a>
  );
}

export default function Home() {
  return (
    <>
      <header className="sky hero">
        {/* Sky: two photographed clouds and the paper grain over them. */}
        <Piece className="hero__cloud hero__cloud--right" x={1133} y={-273} w={1024} h={682.75}>
          <img src="/collage/cloud-right.png" alt="" fetchPriority="high" />
        </Piece>
        <Piece className="hero__cloud hero__cloud--left" x={-123} y={-274} w={1024} h={682.75}>
          <img src="/collage/cloud-left.png" alt="" />
        </Piece>
        <div className="sky__grain hero__grain" aria-hidden="true" />

        {/* Left: the Capitol, cut out and stuck onto a torn scrap of paper. */}
        <Piece className="hero__torn-left" x={-24.98} y={436.5} w={732} h={757}>
          <img src="/collage/torn-left.svg" alt="" />
        </Piece>

        {/* Right: cherry blossom branches on their own torn scrap, flattened
            into one cut-out so the pieces stay together at every size. */}
        <Piece className="hero__blossoms" x={1402.5} y={44} w={557.5} h={471.5}>
          <img src="/collage/blossoms.svg" alt="" />
        </Piece>

        <Piece className="hero__capitol" x={-403} y={396} w={1304} h={978}>
          <img src="/collage/capitol.png" alt="" fetchPriority="high" />
        </Piece>

        {/* An airliner cut-out that flies over the dome as the page scrolls. */}
        <HeroPlane />

        {/* The partnership row. */}
        <div className="hero__logos">
          <a
            href="https://hackclub.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ "--lw": 106.515, "--lh": 37.26 }}
          >
            <img src="/collage/hackclub-flag.svg" alt="Hack Club" />
          </a>
          <img src="/collage/cross.svg" alt="" aria-hidden="true" className="hero__cross" />
          <a
            href="https://www.middlebury.edu/"
            target="_blank"
            rel="noopener noreferrer" 
            style={{ "--lw": 45.15, "--lh": 49.44 }}
          >
            <img src="/collage/middlebury.png" alt="Middlebury College" />
          </a>
        </div>

        <div className="hero__title">
          <p className="hero__presents">Hack Club presents</p>
          <h1 className="t-display hero__capitol-word">Capitol</h1>
          <p className="hero__sub">
            36-hour hackathon in Washington, D.C.
            <br/>
            October 16th-18th
          </p>
          <div className="hero__cta">
            <a href="/certificate" className="btn btn--primary">
              Get the Open-source Certificate
            </a>
          </div>
        </div>

      </header>

      <Paper className="home-paper">
        <section className="home-section">
          <h2 className="text-5xl font-serif font-bold">60 teenagers in Washington D.C.</h2>
          {/* The full-colour mark, printed as a greyscale plate and restored to
              its navy and red under the cursor, like the strip below. It is
              1056px wide and drawn at 600, so it stays crisp on any display;
              the intrinsic size is declared so the space is reserved before it
              loads. */}
          <a src="https://www.congressionalappchallenge.us/" className="flex items-center justify-center">
            <img
              src="/collage/cac-wordmark.png"
              alt="Congressional App Challenge"
              width={1056}
              height={250}
              className="ink-mark w-[600px] h-auto my-6 mt-10"
            />
          </a>
          <div className="t-lead my-7">
            <p>
              Come to Hack Club Capitol, an event in partnership with the Congressional App Challenge
              and Middlebury College. Over one weekend, you&apos;ll learn to build and publish an
              open-source app utilizing data to meet your community&apos;s needs.
            </p>
            <p>
              Travel to Washington D.C., learn from workshops and mentors, and ship an app you can
              later submit to the Congressional App Challenge for an official certificate.
            </p>
            <p>
              Capitol is 100% free for teenagers in the United States. We&rsquo;re providing food,
              merch, and travel stipends for teenagers to build awesome projects together in D.C.
            </p>
          </div>
        </section>

          <h2 className="text-[length:clamp(24px,calc((100vw_-_40px)*0.044),38px)] leading-tight text-balance font-bold mb-20">Build a project and get a certificate, recognized by</h2>
          <ul className="logo-row home-section__content m">
            {RECOGNIZED_BY.map((logo) => (
              <li key={logo.name}>
                <img
                  className="logo-row__mark ink-mark"
                  src={logo.src}
                  alt={logo.name}
                  width={logo.w}
                  height={logo.h}
                  style={{ "--h": logo.h }}
                  />
              </li>
            ))}
          </ul>

        <section className="my-20">
          <h2 className="t-heading">Previous certified projects</h2>
          <ProjectStrip />
        </section>

        <section className="home-section" id="faq">
          <h2 className="t-heading">Frequently Asked Questions</h2>
          <div className="faq-grid home-section__content">
            {FAQS.map((faq) => (
              <div key={faq.q} className="faq-card">
                <h3 className="faq-card__q">{faq.q}</h3>
                <div className="faq-card__a">{faq.a}</div>
              </div>
            ))}
          </div>
        </section>
        <h2 className="t-heading text-center my-6">
          Got more questions? Contact{" "}
          <a className="link" href="mailto:capitol@hackclub.com">
            capitol@hackclub.com
          </a>
        </h2>
      </Paper>

      <Footer />
    </>
  );
}
