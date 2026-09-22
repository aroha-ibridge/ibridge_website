import { Link } from 'react-router-dom';

const PRODUCT_CARDS = [
  {
    title: 'Online Assessment Platform',
    description:
      'AI-powered assessments to measure skills, readiness, and learning impact for teams and campuses.',
    to: '/online-assessment-platform',
    cta: 'Explore Assessment',
  },
  {
    title: 'Code Arena',
    description:
      'Hackathon-style coding assessments with Monaco editor, automated tests, AI scoring, and leaderboards.',
    to: '/code-arena',
    cta: 'Explore Code Arena',
  },
  {
    title: 'Training & Upskilling',
    description:
      'Custom technology and soft-skills programs for individuals, enterprises, and institutions.',
    to: '/training-upskilling',
    cta: 'Explore Training',
  },
  {
    title: 'LearnSmart LMS',
    description:
      'An AI learning ecosystem with labs, assessments, mentors, and career guidance in one platform.',
    to: '/learnsmart-lms',
    cta: 'Explore LMS',
  },
];

function Products() {
  return (
    <>
      <section className="tw-scope bg-surface-soft">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">Products</p>
          <h1 className="mt-3 max-w-2xl text-3xl font-bold text-ink md:text-4xl">
            Learning products built for skills outcomes
          </h1>
          <p className="mt-4 max-w-2xl text-base text-ink-muted md:text-lg">
            Assessment, coding contests, training delivery, and LMS. Choose the product that fits
            your learners and organization.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {PRODUCT_CARDS.map((card) => (
              <Link
                key={card.to}
                to={card.to}
                className="group flex flex-col rounded-2xl border border-surface-border bg-white p-6 transition hover:-translate-y-1 hover:border-brand/25"
              >
                <h2 className="text-xl font-semibold text-ink group-hover:text-brand">{card.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{card.description}</p>
                <span className="mt-6 text-sm font-semibold text-brand">{card.cta} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
