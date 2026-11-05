import "./globals.css";

export const metadata = {
  title: "Capitol - a Hack Club hackathon in Washington, D.C.",
  description:
    "Capitol is a free 36-hour hackathon in Washington, D.C. for teenagers, run by Hack Club with the Congressional App Challenge and Middlebury College.",
  openGraph: {
    images: [
      {
        url: "/Capitol%20Logo.png",
        width: 2489,
        height: 1983,
        alt: "Capitol Hack Club seal: the U.S. Capitol dome inside a ring of stars",
      },
    ],
  },
  // "summary" shows a square thumbnail, which fits the round seal;
  // "summary_large_image" would crop it to 2:1 and cut off the lettering.
  twitter: {
    card: "summary",
    images: ["/Capitol%20Logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
