import { ArrowRight, Check } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-3 py-1 text-xs font-medium text-indigo-700">
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              Building bold digital products
            </div>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              We design, build, and scale modern web experiences
            </h1>
            <p className="mt-5 text-lg text-gray-600">
              From MVPs to enterprise platforms, our team blends strategy, design, and engineering to ship products that users love.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/90"
              >
                Start a Project
                <ArrowRight size={16} />
              </a>
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
              >
                View Our Work
              </a>
            </div>
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
              {[
                'Product strategy & UX research',
                'Full-stack web & mobile apps',
                'Branding & design systems',
                'Performance & SEO engineering',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-white">
                    <Check size={14} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl border border-black/5 bg-gradient-to-tr from-indigo-100 via-white to-violet-100 p-2 shadow-sm">
              <div className="h-full w-full rounded-lg bg-white p-6 shadow-sm ring-1 ring-black/5">
                <div className="grid grid-cols-3 gap-4">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-24 rounded-md bg-gradient-to-br from-gray-50 to-gray-100 ring-1 ring-black/5"
                    />
                  ))}
                </div>
                <div className="mt-6 h-3 w-1/2 rounded-full bg-gray-200" />
                <div className="mt-2 h-3 w-1/3 rounded-full bg-gray-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
