export default function WhySection() {
  return (
    <section id="why" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Why use AI for software building?
        </h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
          <p>
            AI tools like Cursor act as a <strong>pair-programmer</strong> —
            someone who sits beside you and writes code based on what you
            describe. You tell it what you want in plain English, and it creates
            the files for you.
          </p>
          <p>
            AI is not magic. You still need to <strong>review and approve</strong>{" "}
            what it creates. Read the changes, ask questions, and request fixes
            when something does not look right. You stay in control.
          </p>
          <p>
            A <strong>good prompt</strong> is specific. Instead of &quot;make me a
            website,&quot; try &quot;create a one-page site about gardening tips
            with a green color theme and a contact section at the bottom.&quot; The
            more detail you give, the better the result.
          </p>
        </div>
      </div>
    </section>
  );
}
