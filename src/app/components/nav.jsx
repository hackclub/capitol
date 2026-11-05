"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/certificate", label: "Certificate" },
  { href: "/gallery", label: "Gallery" },
  { href: "/resources", label: "Resources" },
  { href: "/faq", label: "FAQ" },
];

// The header for every page except the homepage, which carries the same logo
// row inside its hero instead. Transparent over the sky, cream once the page
// has scrolled under it.
export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const current = (href) => (pathname === href ? "page" : undefined);

  const links = LINKS.map((link) => (
    <li key={link.href}>
      <a href={link.href} aria-current={current(link.href)}>
        {link.label}
      </a>
    </li>
  ));

  return (
    <nav className={`site-nav ${scrolled || isOpen ? "site-nav--solid" : ""}`}>
      <div className="site-nav__inner">
        <div className="site-nav__logos">
          <a href="https://hackclub.com" target="_blank" rel="noopener noreferrer">
            <img src="/collage/hackclub-flag.svg" alt="Hack Club" />
          </a>
          <img src="/collage/cross.svg" alt="" aria-hidden="true" className="site-nav__cross" />
          <a href="https://www.congressionalappchallenge.us/" target="_blank" rel="noopener noreferrer">
            <img src="/collage/cac-wordmark.png" alt="Congressional App Challenge" />
          </a>
          <img src="/collage/cross.svg" alt="" aria-hidden="true" className="site-nav__cross" />
          <a href="https://www.middlebury.edu/" target="_blank" rel="noopener noreferrer">
            <img src="/collage/middlebury.png" alt="Middlebury College" className="site-nav__seal" />
          </a>
        </div>

        <ul className="site-nav__links">{links}</ul>

        <button
          type="button"
          className="site-nav__toggle"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="site-nav__sheet">
          <ul>{links}</ul>
        </div>
      )}
    </nav>
  );
}
