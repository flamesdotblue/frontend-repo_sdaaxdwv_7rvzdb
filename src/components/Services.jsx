import { Code2, Shield, Zap } from 'lucide-react';

const services = [
  {
    title: 'Product Engineering',
    description:
      'End-to-end development of robust, scalable applications using modern stacks. From MVPs to enterprise systems.',
    icon: Code2,
  },
  {
    title: 'Security & Compliance',
    description:
      'Best practices baked in: auth, RBAC, encryption, and audits to keep your data and users safe.',
    icon: Shield,
  },
  {
    title: 'Performance & Growth',
    description:
      'Speed matters. We tune Core Web Vitals, SEO, and analytics to turn traffic into traction.',
    icon: Zap,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What we do
          </h2>
          <p className="mt-3 text-gray-600">
            A multidisciplinary team delivering strategy, design, and engineering as one.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="group rounded-2xl border border-black/5 bg-white p-6 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow md:p-8"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-sm">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{description}</p>
              <div className="mt-4 h-0.5 w-16 bg-gradient-to-r from-indigo-600 to-violet-600" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
