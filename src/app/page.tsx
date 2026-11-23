import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-16 py-12">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
          Autonomous AI Engineering in Nagercoil
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Building Production-Grade <span className="text-indigo-600">AI Agents &amp; Cloud Platforms</span>
        </h1>

        <p className="max-w-2xl mx-auto text-base text-slate-600 leading-relaxed">
          PulseAI Labs designs and delivers bespoke machine learning architectures, automated workflow orchestrators, and enterprise software solutions for startups and global enterprises.
        </p>

        <div className="flex items-center justify-center gap-4 pt-2">
          <Link
            href="/services"
            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md transition-all"
          >
            Explore Services
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-semibold text-sm transition-all shadow-sm"
          >
            Contact Team
          </Link>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-lg">
            ⚡
          </div>
          <h2 className="text-lg font-bold text-slate-900">LLM System Engineering</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Custom retrieval-augmented generation pipelines, local model fine-tuning, and deterministic prompt engineering.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-lg">
            🛡️
          </div>
          <h2 className="text-lg font-bold text-slate-900">Enterprise Cloud MVPs</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Full-stack web &amp; mobile solutions engineered for rapid deployment, fault tolerance, and sub-second latencies.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-lg">
            🌐
          </div>
          <h2 className="text-lg font-bold text-slate-900">Virtual CTO Consulting</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Fractional tech leadership guiding cloud architecture, developer team building, and technological roadmaps.
          </p>
        </div>
      </section>

      {/* Proof Stats */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-900 rounded-2xl p-8 text-white grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-extrabold text-indigo-400">14+</div>
            <div className="text-xs text-slate-400 mt-1">AI MVPs Shipped</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-emerald-400">&lt; 150ms</div>
            <div className="text-xs text-slate-400 mt-1">Avg Pipeline Latency</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-amber-400">99.9%</div>
            <div className="text-xs text-slate-400 mt-1">Uptime SLA</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-purple-400">Nagercoil</div>
            <div className="text-xs text-slate-400 mt-1">HQ &amp; Core Lab</div>
          </div>
        </div>
      </section>
    </div>
  );
}
