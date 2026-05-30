import ToolCard from "./ToolCard";

const tools = [
  {
    name: "Cursor",
    role: "AI Agent",
    description:
      "An AI-powered code editor. You describe what you want to build, and Cursor writes and edits the code for you. Think of it as your creative workspace.",
  },
  {
    name: "GitHub",
    role: "Code Storage",
    description:
      "Cloud storage for your project files — like Google Drive, but built for code. It keeps your work safe and lets you track every change you make.",
  },
  {
    name: "Vercel",
    role: "Website Hosting",
    description:
      "Turns your project into a real website with a public URL anyone can visit. Connect it to GitHub and every update goes live automatically.",
  },
];

export default function ToolsSection() {
  return (
    <section id="tools" className="scroll-mt-24 border-t border-slate-200 bg-slate-50 py-16">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Your three tools
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Each tool has one clear job. Together, they take you from idea to live
          website.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-1">
          {tools.map((tool) => (
            <ToolCard key={tool.name} {...tool} />
          ))}
        </div>
      </div>
    </section>
  );
}
