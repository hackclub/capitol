"use client";

import { usePathname } from "next/navigation";

const SECTIONS = [
  {
    title: "Getting certified",
    links: [
      { href: "/overview", label: "Overview" },
      { href: "/github", label: "GitHub" },
    ],
  },
  {
    title: "Capitol",
    links: [
      { href: "/faq", label: "FAQ" },
      { href: "/travel-info", label: "Travel info" },
      { href: "/parents", label: "For parents" },
    ],
  },
];

// The list of guides down the left of every guide page. Plain links on the
// paper; the current one is underlined in the page's blue.
export default function GuideNav() {
  const pathname = usePathname();

  return (
    <nav className="guide-nav" aria-label="Guides">
      {SECTIONS.map((section) => (
        <section key={section.title}>
          <h2>{section.title}</h2>
          {section.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </a>
          ))}
        </section>
      ))}
    </nav>
  );
}
