type ScreenshotPlaceholderProps = {
  label: string;
  alt: string;
};

export default function ScreenshotPlaceholder({
  label,
  alt,
}: ScreenshotPlaceholderProps) {
  return (
    <figure className="mt-6">
      <div
        role="img"
        aria-label={alt}
        className="flex aspect-video w-full items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-100 px-6 text-center text-sm text-slate-500"
      >
        {label}
      </div>
      <figcaption className="mt-2 text-center text-xs text-slate-500">
        Screenshot placeholder — replace with a real image in{" "}
        <code className="rounded bg-slate-200 px-1 py-0.5">public/images/</code>
      </figcaption>
    </figure>
  );
}
