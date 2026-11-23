// DELIBERATE SEO FLAW #5: Multiple H1 tags on the same page
// Triggers Heading Structure Audit Gap in SEO Crawlers
export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-8">
      <h1 className="text-3xl font-bold text-slate-900">About PulseAI Labs</h1>
      <p className="text-sm text-slate-600 leading-relaxed">
        Founded in Nagercoil, Kanyakumari District, PulseAI Labs was created to bring world-class machine learning engineering and scalable software architectures to high-growth startups across India and abroad.
      </p>

      {/* Deliberate Bad SEO: Second H1 tag! */}
      <h1 className="text-2xl font-bold text-slate-900 pt-4">Our Engineering Philosophy</h1>
      <p className="text-sm text-slate-600 leading-relaxed">
        We reject bloated agency models. We build lean, deterministic LLM pipelines and high-concurrency cloud microservices. Our engineers operate out of Court Road, Nagercoil, collaborating with founders globally.
      </p>

      {/* Deliberate Bad SEO: Third H1 tag! */}
      <h1 className="text-2xl font-bold text-slate-900 pt-4">Why Nagercoil?</h1>
      <p className="text-sm text-slate-600 leading-relaxed">
        Nagercoil offers high technical talent density, close proximity to Trivandrum Technopark, and a focused engineering environment free from metro overheads.
      </p>
    </div>
  );
}
