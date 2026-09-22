import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="tw-scope mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-6 py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand">404</p>
      <h1 className="mt-3 text-3xl font-bold text-ink md:text-4xl">Page not found</h1>
      <p className="mt-4 text-base text-ink-muted">
        The page you are looking for does not exist or has moved. Explore our programs,
        products, or get in touch.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          to="/"
          className="inline-flex rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90"
        >
          Go to Home
        </Link>
        <Link
          to="/programs"
          className="inline-flex rounded-xl border border-brand/30 px-5 py-2.5 text-sm font-semibold text-brand hover:bg-brand/5"
        >
          View Programs
        </Link>
        <Link
          to="/contact-us"
          className="inline-flex rounded-xl border border-brand/30 px-5 py-2.5 text-sm font-semibold text-brand hover:bg-brand/5"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
