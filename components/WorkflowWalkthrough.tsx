const steps = [
  {
    number: 1,
    title: "Your idea",
    description:
      "Start with a simple concept — a personal page, a hobby site, or a small business landing page.",
  },
  {
    number: 2,
    title: "Build in Cursor",
    description:
      "Open Cursor, describe your idea to the AI agent, and review the code it creates.",
  },
  {
    number: 3,
    title: "Push to GitHub",
    description:
      "Save your project online with a commit and push so your files are backed up.",
  },
  {
    number: 4,
    title: "Deploy on Vercel",
    description:
      "Import your GitHub repo into Vercel and click Deploy to get a live URL.",
  },
  {
    number: 5,
    title: "Share your link",
    description:
      "Send your new website URL to friends, family, or customers. You built something real!",
  },
];

export default function WorkflowWalkthrough() {
  return (
    <section id="walkthrough" className="scroll-mt-24 border-t border-slate-200 bg-slate-50 py-16">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          End-to-end walkthrough
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Here is the full journey from idea to live website in five steps.
        </p>
        <ol className="mt-10 space-y-6">
          {steps.map((step) => (
            <li
              key={step.number}
              className="flex gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-lg font-bold text-white">
                {step.number}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-1 text-slate-600">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
