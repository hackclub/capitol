import PageShell from "./components/PageShell";

export const metadata = {
  title: "Page not found - Capitol",
};

// Any route the site doesn't have: a stale link, a typo, an old bookmark.
export default function NotFound() {
  return (
    <PageShell narrow>
      <h1 className="t-heading page-paper__title">There&rsquo;s nothing here</h1>
      <div className="t-lead page-intro">
        <p>That page doesn&rsquo;t exist, or it moved. The pages that do are below.</p>
      </div>
      <div className="btn-row">
        <a href="/" className="btn btn--primary">
          Back to the homepage
        </a>
        <a href="/resources" className="btn btn--ghost">
          Resources
        </a>
        <a href="/faq" className="btn btn--ghost">
          FAQ
        </a>
      </div>
    </PageShell>
  );
}
