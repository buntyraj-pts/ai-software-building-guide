const tips = [
  {
    title: "Be specific in your prompts",
    body: "Describe colors, layout, sections, and tone. The more detail you give Cursor, the closer the result will match your vision.",
  },
  {
    title: "Never share passwords or API keys",
    body: "Do not paste secret keys, passwords, or private tokens into the AI chat. Keep sensitive information out of your code and prompts.",
  },
  {
    title: "Paste errors back to Cursor",
    body: "If something breaks, copy the error message and ask Cursor to fix it. Errors are normal — they are how you learn and improve.",
  },
  {
    title: "Save to GitHub often",
    body: "Commit and push your work regularly. Think of it like saving a document — you will always have a backup if something goes wrong.",
  },
];

export default function TipsSection() {
  return (
    <section id="tips" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Tips and common mistakes
        </h2>
        <ul className="mt-10 space-y-6">
          {tips.map((tip) => (
            <li
              key={tip.title}
              className="rounded-xl border border-slate-200 p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {tip.title}
              </h3>
              <p className="mt-2 text-slate-600">{tip.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-12 rounded-xl border border-indigo-200 bg-indigo-50 p-6">
          <h3 className="text-lg font-semibold text-slate-900">
            What to learn next
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
            <li>Add a custom domain name to your Vercel site</li>
            <li>Make small changes with follow-up prompts in Cursor</li>
            <li>Learn basic HTML and CSS to understand what the AI built</li>
          </ul>
          <p className="mt-4 text-sm text-slate-600">
            Helpful docs:{" "}
            <a
              href="https://cursor.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 underline underline-offset-4"
            >
              Cursor
            </a>
            ,{" "}
            <a
              href="https://docs.github.com/en/get-started"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 underline underline-offset-4"
            >
              GitHub
            </a>
            ,{" "}
            <a
              href="https://vercel.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 underline underline-offset-4"
            >
              Vercel
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
