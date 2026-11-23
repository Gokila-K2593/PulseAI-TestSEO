export default function PricingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 space-y-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-slate-900">Transparent Engagement Models</h1>
        <p className="text-sm text-slate-600">
          Predictable pricing engineered for startups and established enterprises.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="space-y-1">
            <h2 className="text-lg font-bold text-slate-900">AI MVP Sprint</h2>
            <div className="text-2xl font-extrabold text-indigo-600">$4,500 <span className="text-xs font-normal text-slate-400">/ project</span></div>
          </div>
          <p className="text-xs text-slate-600">Working prototype delivered in 3 weeks with full code ownership.</p>
          <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
            <li>Custom LLM integration</li>
            <li>Production Next.js frontend</li>
            <li>Cloud database setup</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl border-2 border-indigo-600 shadow-md space-y-4 relative">
          <span className="absolute -top-3 right-6 bg-indigo-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
            Most Popular
          </span>
          <div className="space-y-1">
            <h2 className="text-lg font-bold text-slate-900">Virtual CTO Retainer</h2>
            <div className="text-2xl font-extrabold text-indigo-600">$3,200 <span className="text-xs font-normal text-slate-400">/ month</span></div>
          </div>
          <p className="text-xs text-slate-600">Fractional tech leadership, architectural audits, and code review.</p>
          <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
            <li>Weekly architecture syncs</li>
            <li>Team hiring assistance</li>
            <li>Vendor &amp; cloud negotiation</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="space-y-1">
            <h2 className="text-lg font-bold text-slate-900">Enterprise Custom</h2>
            <div className="text-2xl font-extrabold text-slate-900">Custom <span className="text-xs font-normal text-slate-400">quote</span></div>
          </div>
          <p className="text-xs text-slate-600">Dedicated engineering squads for complex scale requirements.</p>
          <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
            <li>Dedicated engineers</li>
            <li>Custom SLA agreements</li>
            <li>On-premise deployment</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
