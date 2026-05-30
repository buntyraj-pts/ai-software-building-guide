type CodeBlockProps = {
  children: string;
  label?: string;
};

export default function CodeBlock({ children, label }: CodeBlockProps) {
  return (
    <div className="mt-4">
      {label ? (
        <p className="mb-2 text-sm font-medium text-slate-700">{label}</p>
      ) : null}
      <pre className="overflow-x-auto rounded-lg bg-slate-900 px-4 py-3 text-sm leading-relaxed text-slate-100">
        <code>{children}</code>
      </pre>
    </div>
  );
}
