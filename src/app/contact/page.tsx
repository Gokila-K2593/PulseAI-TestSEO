export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Contact PulseAI Labs</h1>
        <p className="text-sm text-slate-600">
          Have an AI or software project in mind? Reach our engineering team in Nagercoil.
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <form className="space-y-4 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Your Name</label>
            <input 
              type="text" 
              placeholder="e.g. Arun Kumar" 
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-indigo-500" 
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Email Address</label>
            <input 
              type="email" 
              placeholder="you@company.com" 
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-indigo-500" 
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Project Details</label>
            <textarea 
              rows={4} 
              placeholder="Briefly describe your requirements..." 
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-indigo-500" 
            />
          </div>

          <button 
            type="button" 
            className="w-full py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-all shadow-sm"
          >
            Send Project Brief
          </button>
        </form>

        <div className="pt-4 border-t border-slate-100 text-slate-500 text-xs text-center space-y-1">
          <div>📍 Office: Court Road, Nagercoil, Kanyakumari, Tamil Nadu 629001</div>
          <div>✉️ Email: contact@pulseai-labs.com</div>
        </div>
      </div>
    </div>
  );
}
