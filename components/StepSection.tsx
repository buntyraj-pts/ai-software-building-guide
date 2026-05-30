import type { ReactNode } from "react";
import ScreenshotPlaceholder from "./ScreenshotPlaceholder";

type StepSectionProps = {
  id: string;
  stepNumber: number;
  title: string;
  children: ReactNode;
  screenshotLabel?: string;
  screenshotAlt?: string;
  link?: { href: string; label: string };
};

export default function StepSection({
  id,
  stepNumber,
  title,
  children,
  screenshotLabel,
  screenshotAlt,
  link,
}: StepSectionProps) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-slate-200 py-16">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
          Step {stepNumber}
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          {title}
        </h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
          {children}
        </div>
        {link ? (
          <p className="mt-6">
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-indigo-600 underline underline-offset-4 hover:text-indigo-800"
            >
              {link.label}
            </a>
          </p>
        ) : null}
        {screenshotLabel && screenshotAlt ? (
          <ScreenshotPlaceholder
            label={screenshotLabel}
            alt={screenshotAlt}
          />
        ) : null}
      </div>
    </section>
  );
}
