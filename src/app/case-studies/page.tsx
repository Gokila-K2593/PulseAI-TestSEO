export default function CaseStudiesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-slate-900">Client Case Studies</h1>
        <p className="text-sm text-slate-600">
          Real production systems engineered for startups and enterprise clients.
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <span className="text-xs font-bold text-indigo-600">FinTech Platform</span>
          <h2 className="text-lg font-bold text-slate-900">Autonomous Compliance &amp; Document Extraction</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Built an autonomous document analysis engine processing 50k+ financial statements daily with 99.4% field-level accuracy.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <span className="text-xs font-bold text-emerald-600">HealthTech AI</span>
          <h2 className="text-lg font-bold text-slate-900">Real-Time Patient Intake Triaging Agent</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Deployed a multi-modal agent helping clinics reduce front-desk wait times by 65% through automated speech-to-structured-EMR sync.
          </p>
        </div>
      </div>
    </div>
  );
}
