import { getMdxBySlug, getSlugs, markdownToHtml } from "../../lib/mdx";
import PageShell from "../components/PageShell";
import GuideNav from "../components/Sidebar";
import { notFound } from "next/navigation";

// Only the guides that exist at build time get pages; there is no server to
// render anything else on request.
export const dynamicParams = false;

export async function generateStaticParams() {
  return getSlugs().map((slug) => ({ slug }));
}

export default async function DocPage({ params }) {
  const { slug } = await params;

  // Only the guides in guides/*.mdx are real pages; anything else is a 404.
  if (!getSlugs().includes(slug)) {
    notFound();
  }

  const { content } = await getMdxBySlug(slug);
  const htmlContent = markdownToHtml(content);

  // Several guides in guides/ are still just a title. Rendering the heading
  // alone reads as a broken page, so say so and point somewhere useful.
  const hasBody = content.replace(/^#{1,6}.*$/gm, "").trim().length > 0;

  return (
    <PageShell>
      <div className="guide-layout">
        <GuideNav />
        <div>
          <article
            className="markdown-body prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {!hasBody && (
            <div className="box mt-6">
              <h2 className="box__title">This guide isn&apos;t ready yet</h2>
              <div className="box__body">
                <p>
                  There&apos;s nothing here yet. In the meantime, the resources page covers
                  building, documenting and submitting your project, and the Slack is the fastest
                  way to get a question answered.
                </p>
              </div>
              <div className="btn-row">
                <a href="/resources" className="btn btn--primary">
                  Go to resources
                </a>
                <a
                  href="https://hackclub.com/slack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--ghost"
                >
                  Ask on Slack
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </PageShell>
  );
}
