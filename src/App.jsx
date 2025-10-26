import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';

function Divider() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <Services />
        <section id="work" className="py-20 sm:py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Selected work</h2>
              <p className="mt-3 text-gray-600">A quick peek at the problems we’ve solved recently.</p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {['Fintech Dashboard', 'Healthcare Portal', 'E‑commerce Platform', 'SaaS Analytics', 'Learning App', 'Crypto Wallet'].map((title, i) => (
                <article key={title} className="group rounded-2xl border border-black/5 bg-white overflow-hidden shadow-sm hover:shadow transition">
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200" />
                  <div className="p-5">
                    <h3 className="font-semibold text-gray-900">{title}</h3>
                    <p className="mt-1 text-sm text-gray-600">High‑performance UI with rock‑solid backend and clean UX.</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
