import PageShell from "../components/PageShell";
import ProjectStrip from "../components/ProjectStrip";

export const metadata = {
  title: "The certificate - Capitol",
  description:
    "Open-source your Congressional App Challenge project and Hack Club will certify it.",
};

const HACKATIME_URL = "https://hackatime.hackclub.com/";

const hackatimeLink = (
  <a href={HACKATIME_URL} target="_blank" rel="noopener noreferrer">
    Hackatime
  </a>
);

// The six things that earn the award.
const REQUIREMENTS = [
  {
    title: "Open source it",
    detail: "Put your project on GitHub, with a README.md that explains what it is and how to run it.",
  },
  {
    title: "Enter the Challenge",
    detail: "Submit your project to the Congressional App Challenge.",
  },
  {
    title: "Deploy it",
    detail:
      "Make your project accessible to the public. This could mean deploying your site with Vercel or getting your app on TestFlight.",
  },
  {
    title: "Install Hackatime",
    detail: (
      <>
        {hackatimeLink} tracks the time you spend coding. Add it to your code editor and try it
        out!
      </>
    ),
  },
  {
    title: "Spend an hour improving your project",
    detail: (
      <>
        Track an hour or more on {hackatimeLink} improving your project and making it even better!
      </>
    ),
  },
  {
    title: "Submit to Hack Club",
    detail:
      "Send us the repository, have your project showcased on the site, and get an official certificate.",
  },
];

export default function Certificate() {
  return (
    <PageShell narrow>
      <h1 className="t-heading page-paper__title">
        Hack Club &times; Congressional App Challenge
      </h1>
      <div className="t-lead page-intro">
        <p>
          For the 2026&ndash;2027 Congressional App Challenge, Hack Club would like to recognise
          the real winners: anybody who open-sources their project and publishes it for the world
          to see.
        </p>
      </div>

      <section className="page-section">
        <h2 className="t-heading">Requirements</h2>
        <p className="t-body">Six things, and the certificate is yours.</p>
        <ol className="mt-4">
          {REQUIREMENTS.map((item, index) => (
            <li key={item.title} className="box">
              <h3 className="box__title">
                {index + 1}. {item.title}
              </h3>
              <div className="box__body">
                <p>{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="btn-row">
          <a href="https://forms.hackclub.com/congressional_certification" className="btn btn--primary">
            Submit
            <img src="/collage/arrow-right.svg" alt="" aria-hidden="true" width={12} height={12} />
          </a>
          <a href="/resources" className="btn btn--ghost">
            Read the guides
          </a>
        </div>
      </section>

      <section className="page-section">
        <h2 className="t-heading">Already certified</h2>
        <ProjectStrip />
        <div className="btn-row">
          <a href="/gallery" className="btn btn--ghost">
            Browse the full gallery
          </a>
        </div>
      </section>
    </PageShell>
  );
}
