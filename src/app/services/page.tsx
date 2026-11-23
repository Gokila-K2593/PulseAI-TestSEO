// DELIBERATE SEO FLAW #4: Thin Content (< 100 words total!)
// Triggers APEX Crawler "Thin Pages Alert"
export default function ServicesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-6">
      <h1 className="text-3xl font-bold text-slate-900">Our Services</h1>
      <p className="text-sm text-slate-600">
        We provide custom software engineering and AI services in Nagercoil.
      </p>

      <ul className="list-disc pl-5 text-xs text-slate-600 space-y-2">
        <li>Custom AI Development</li>
        <li>Cloud System Architecture</li>
        <li>Full Stack Web Applications</li>
      </ul>

      <p className="text-xs text-slate-500">
        Contact us today for custom pricing and consultations.
      </p>
    </div>
  );
}
