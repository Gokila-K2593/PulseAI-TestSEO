import './globals.css';
import Link from 'next/link';

// DELIBERATE SEO FLAW #1: Duplicate generic title on every page
// DELIBERATE SEO FLAW #2: Completely missing meta description
// DELIBERATE SEO FLAW #3: Zero Schema.org Organization / FAQ JSON-LD
export const metadata = {
  title: 'PulseAI Labs',
  // No description provided
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col justify-between">
        {/* Modern Header Navigation */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg text-slate-900 tracking-tight">
              <span className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-extrabold text-sm shadow-md">
                P
              </span>
              <span>PulseAI Labs</span>
            </Link>

            <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
              <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
              <Link href="/services" className="hover:text-indigo-600 transition-colors">Services</Link>
              <Link href="/about" className="hover:text-indigo-600 transition-colors">About</Link>
              <Link href="/contact" className="hover:text-indigo-600 transition-colors">Contact</Link>
            </nav>

            <Link 
              href="/contact" 
              className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-sm transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Professional Footer */}
        <footer className="bg-slate-900 text-slate-400 text-xs py-12 border-t border-slate-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="font-bold text-white text-sm flex items-center gap-1.5">
                <span className="w-5 h-5 rounded bg-indigo-600 flex items-center justify-center text-white font-bold text-[10px]">
                  P
                </span>
                PulseAI Labs
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Engineering intelligent software, LLM systems, and custom digital infrastructure in South India.
              </p>
            </div>

            <div>
              <div className="font-semibold text-white mb-2">Location</div>
              <p className="text-slate-400 leading-relaxed">
                Court Road, WCC Junction,<br />
                Nagercoil, Kanyakumari District,<br />
                Tamil Nadu, 629001
              </p>
            </div>

            <div>
              <div className="font-semibold text-white mb-2">Quick Links</div>
              <ul className="space-y-1">
                <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
              </ul>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 mt-8 border-t border-slate-800/80 text-center text-slate-500 text-[11px]">
            &copy; {new Date().getFullYear()} PulseAI Labs. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
