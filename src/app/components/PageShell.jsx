import Nav from "./nav";
import Footer from "./footer";
import Paper from "./Paper";

// Every page other than the homepage: a strip of sky under the header, the
// paper sheet carrying the content, and the footer on the dark ground below.
export default function PageShell({ children, narrow = false }) {
  return (
    <>
      <div className="sky">
        <div className="sky__grain" aria-hidden="true" />
        <Nav />
        <div className="page-sky" />
      </div>
      <Paper className={`page-paper ${narrow ? "page-paper--narrow" : ""}`}>{children}</Paper>
      <Footer />
    </>
  );
}
