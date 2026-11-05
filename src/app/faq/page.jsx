import PageShell from "../components/PageShell";

export const metadata = {
  title: "FAQ - Capitol",
  description: "Short answers about the Hack Club certificate and the Capitol hackathon.",
};

const FAQS = [
  {
    question: "What is the certificate?",
    body: [
      "An award given by Hack Club to any student who publishes and open-sources their Congressional App Challenge project. It's recognised by several institutions and comes with an invite to Capitol, Hack Club's hackathon in Washington, D.C.",
    ],
  },
  {
    question: "How do I qualify?",
    body: ["To qualify, you need to:"],
    list: [
      "Apply for the Congressional App Challenge (and be eligible)",
      "Open source your project on GitHub with a README.md",
      "Submit a playable link to your project in the Congressional App Challenge submission",
    ],
  },
  {
    question: "Which institutions recognise it?",
    body: [
      "The certificate is recognised by MIT School of Engineering, GitHub, the Congressional App Challenge, Girl Scouts of Greater New York, The Knowledge House, Code.org, and other institutions.",
    ],
  },
  {
    question: "What is Capitol?",
    body: [
      "Capitol is a 36-hour hackathon in Washington, D.C., October 9th to 11th, for certified students. It's 100% free: food, merch, and travel stipends are covered. For every hour you work on your Congressional App Challenge project (logged with Hackatime), $10 is added to your travel stipend.",
    ],
  },
  {
    question: "How do I log my time with Hackatime?",
    body: [
      "Set up Hackatime to track your coding hours from your editor, and note the project name you track under when you submit. The resources page walks through it.",
    ],
  },
];

export default function FAQPage() {
  return (
    <PageShell narrow>
      <h1 className="t-heading page-paper__title">Frequently Asked Questions</h1>
      <div className="t-lead page-intro">
        <p>The short answers about the certificate and the Capitol hackathon.</p>
      </div>

      <div className="page-section">
        {FAQS.map((faq) => (
          <section key={faq.question} className="box">
            <h2 className="box__title">{faq.question}</h2>
            <div className="box__body">
              {faq.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {faq.list && (
                <ul>
                  {faq.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        ))}
      </div>

      <section className="page-section">
        <h2 className="t-heading">Still stuck?</h2>
        <p className="t-body">
          The longer guides cover building, documenting and submitting your project in detail, and
          the Slack is the fastest way to get a question answered.
        </p>
        <div className="btn-row">
          <a href="/resources" className="btn btn--primary">
            Read the guides
          </a>
          <a href="https://hackclub.com/slack" target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
            Ask on Slack
          </a>
        </div>
      </section>
    </PageShell>
  );
}
