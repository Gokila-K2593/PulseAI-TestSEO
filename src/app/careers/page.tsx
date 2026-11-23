export default function CareersPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-slate-900">Careers at PulseAI Labs</h1>
        <p className="text-sm text-slate-600">
          Join our high-performance engineering team based in Court Road, Nagercoil.
        </p>
      </div>

      <div className="space-y-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-base font-bold text-slate-900">Senior AI Systems Engineer</h2>
            <p className="text-xs text-slate-500">Python, PyTorch, vLLM, LangChain • On-site Nagercoil</p>
          </div>
          <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold">
            Full-time
          </span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-base font-bold text-slate-900">Full-Stack Next.js Architect</h2>
            <p className="text-xs text-slate-500">TypeScript, React, PostgreSQL, Docker • On-site Nagercoil</p>
          </div>
          <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">
            Full-time
          </span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-base font-bold text-slate-900">Junior Machine Learning Intern</h2>
            <p className="text-xs text-slate-500">RAG Pipelines, Prompt Optimization • Nagercoil &amp; Kanyakumari</p>
          </div>
          <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold">
            Internship
          </span>
        </div>
      </div>
    </div>
  );
}
