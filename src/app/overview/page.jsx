import PageShell from "../components/PageShell";
import GuideNav from "../components/Sidebar";

export const metadata = {
  title: "Overview - Capitol",
  description: "What the Hack Club certificate is and how to earn it.",
};

// Printed as one-ink marks, like the row on the homepage.
const RECOGNIZED_BY = [
  { name: "Massachusetts Institute of Technology", src: "/collage/logo-mit.png", w: 204.8, h: 48.4 },
  { name: "GitHub", src: "/collage/logo-github.png", w: 204.8, h: 58.6 },
  { name: "Congressional App Challenge", src: "/collage/logo-cac.png", w: 256, h: 51 },
  { name: "Girls Who Code", src: "/collage/logo-gwc.png", w: 144.99, h: 61.03 },
];

const CRITERIA = [
  "Apply for the Congressional App Challenge (you also need to be eligible for it)",
  "Open source your project on GitHub with a README.md",
  "Submit a playable link to your project in the Congressional App Challenge submission",
];

export default function OverviewPage() {
  return (
    <PageShell>
      <div className="guide-layout">
        <GuideNav />
        <div>
          <h1 className="t-heading page-paper__title">The Hack Club certificate</h1>
          <div className="t-lead page-intro">
            <p>
              An award given by Hack Club to any student who publishes and open-sources their
              Congressional App Challenge project. It&rsquo;s recognised by several institutions
              and comes with an invite to Capitol.
            </p>
          </div>

          <section className="page-section">
            <h2 className="t-heading">Recognized by</h2>
            <ul className="logo-row" style={{ justifyContent: "flex-start" }}>
              {RECOGNIZED_BY.map((logo) => (
                <li key={logo.name}>
                  <img
                    className="logo-row__mark"
                    src={logo.src}
                    alt={logo.name}
                    width={logo.w}
                    height={logo.h}
                    style={{ "--h": logo.h * 0.8 }}
                    />
                </li>
              ))}
            </ul>
          </section>

          <section className="page-section">
            <h2 className="t-heading">What you need to do</h2>
            <div className="box">
              <div className="box__body">
                <p>Only a few criteria need to be met.</p>
                <ul>
                  {CRITERIA.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="t-body mt-5">
              For more on how to open source your project, read the{" "}
              <a href="/github" className="link">
                GitHub guide
              </a>
              . The other guides cover travel and what parents should know.
            </p>
          </section>

          <section className="page-section">
            <h2 className="t-heading">The hackathon</h2>
            <p className="t-body">
              The certificate also comes with an invitation to Capitol, in Washington D.C. For
              every hour you work on your Congressional App Challenge project, logged with
              Hackatime, <strong>$10 is added to your travel stipend</strong>.
            </p>
            <p className="t-body mt-4">Happy hacking!</p>
          </section>
        </div>
      </div>
    </PageShell>
  );
}
