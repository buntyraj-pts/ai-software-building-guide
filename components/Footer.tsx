const links = [
  { href: "https://cursor.com", label: "Cursor" },
  { href: "https://github.com", label: "GitHub" },
  { href: "https://vercel.com", label: "Vercel" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 py-12 text-slate-300">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="text-sm font-medium text-white">
          Built with Cursor + deployed on Vercel
        </p>
        <ul className="mt-6 flex flex-wrap justify-center gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-xs text-slate-500">
          A beginner guide to building software with AI.
        </p>
      </div>
    </footer>
  );
}
