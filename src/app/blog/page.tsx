export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-slate-900">PulseAI Engineering Blog</h1>
        <p className="text-sm text-slate-600">
          Insights on LLM deployment, deterministic agents, and cloud architecture from South India.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider">AI Architecture</span>
          <h2 className="text-base font-bold text-slate-900">
            Why We Build Self-Hosted LLM Clusters in Tier-2 Indian Hubs
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Exploring latency improvements, data privacy compliance, and developer economics by operating private GPU clusters in Nagercoil.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider">Case Study</span>
          <h2 className="text-base font-bold text-slate-900">
            Sub-100ms RAG Pipelines for High-Concurrency B2B SaaS
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            How we optimized vector indexing and chunking strategies to achieve sub-second generative search grounding.
          </p>
        </div>
      </div>
    </div>
  );
}
