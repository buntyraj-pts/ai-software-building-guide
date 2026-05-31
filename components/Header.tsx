import BackgroundColorPicker from "@/components/BackgroundColorPicker";

const navLinks = [
  { href: "#why", label: "Why AI" },
  { href: "#tools", label: "Tools" },
  { href: "#step-1", label: "Step 1" },
  { href: "#step-2", label: "Step 2" },
  { href: "#step-3", label: "Step 3" },
  { href: "#step-4", label: "Step 4" },
  { href: "#walkthrough", label: "Walkthrough" },
  { href: "#tips", label: "Tips" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-3xl justify-end border-b border-slate-100 px-6 py-2">
        <BackgroundColorPicker />
      </div>
      <div className="mx-auto flex max-w-3xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <a
          href="#top"
          className="text-sm font-semibold text-slate-900 hover:text-indigo-600"
        >
          AI Software Guide
        </a>
        <nav aria-label="Page sections">
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-slate-600 hover:text-indigo-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
