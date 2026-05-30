type ToolCardProps = {
  name: string;
  role: string;
  description: string;
};

export default function ToolCard({ name, role, description }: ToolCardProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
        {role}
      </p>
      <h3 className="mt-2 text-xl font-semibold text-slate-900">{name}</h3>
      <p className="mt-3 text-slate-600">{description}</p>
    </article>
  );
}
