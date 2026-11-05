// Sits on the dark ground below the paper sheet. The top padding leaves room
// for the sheet's torn bottom edge, which hangs over this element.
const COLUMNS = [
  {
    title: "Hack Club Capitol",
    links: [
      { label: "Home", href: "/" },
      { label: "Certificate", href: "/certificate" },
      { label: "Project gallery", href: "/gallery" },
      { label: "Resources", href: "/resources" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Elsewhere",
    links: [
      { label: "hackclub.com", href: "https://hackclub.com", external: true },
      { label: "Join the Slack", href: "https://hackclub.com/slack", external: true },
      {
        label: "Congressional App Challenge",
        href: "https://www.congressionalappchallenge.us/",
        external: true,
      },
      { label: "Middlebury College", href: "https://www.middlebury.edu/", external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <p className="site-footer__word">Capitol</p>
          <p className="site-footer__blurb">
            A free 36-hour hackathon in Washington, D.C., run by Hack Club with the Congressional
            App Challenge and Middlebury College.
          </p>
        </div>

        {COLUMNS.map((column) => (
          <div key={column.title}>
            <h2>{column.title}</h2>
            <ul>
              {column.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="site-footer__legal">
        © 2026 Hack&nbsp;Club, a 501(c)(3) nonprofit (EIN: 81-2908499). Made with love by
        teenagers, for teenagers.
      </p>
    </footer>
  );
}
