export default function Hero() {
  return (
    <section
      id="top"
      className="border-b border-slate-200 bg-gradient-to-b from-indigo-50 to-white py-20"
    >
      <div className="mx-auto max-w-3xl px-6 text-center sm:text-left">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Build a website with AI — even if you&apos;ve never coded
        </h1>
        <p className="mt-3 text-base font-medium text-blue-600">
          Created by BuntyRaj
        </p>
        <p className="mt-6 text-lg leading-relaxed text-slate-600">
          This guide walks you through building and publishing software using
          three free tools: Cursor, GitHub, and Vercel. No prior programming
          experience required.
        </p>
        <ul className="mt-8 space-y-3 text-left text-slate-700">
          <li className="flex gap-3">
            <span className="font-semibold text-indigo-600">1.</span>
            Install Cursor and set up your workspace
          </li>
          <li className="flex gap-3">
            <span className="font-semibold text-indigo-600">2.</span>
            Describe your idea and let AI build the project
          </li>
          <li className="flex gap-3">
            <span className="font-semibold text-indigo-600">3.</span>
            Publish a live website URL on the internet
          </li>
        </ul>
        <a
          href="#step-1"
          className="mt-10 inline-block rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-700"
        >
          Start with Step 1
        </a>
      </div>
    </section>
  );
}
