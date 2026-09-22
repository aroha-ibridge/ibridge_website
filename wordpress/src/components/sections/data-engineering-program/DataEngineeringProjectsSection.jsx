import { Container, Section, cn } from '../../ui';
import dataEngineeringProjects from './dataEngineeringProjects';

function ProjectCard({ project, index }) {
  return (
    <article
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-[22px]',
        'border border-surface-border bg-white',
        'shadow-[0_8px_24px_-16px_rgba(15,23,42,0.12)]',
        'transition-all duration-300 ease-out',
        'hover:-translate-y-1.5 hover:border-brand/25',
        'hover:shadow-[0_22px_44px_-22px_rgba(24,71,159,0.28),0_8px_20px_-12px_rgba(15,23,42,0.12)]',
      )}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-brand-800 via-brand to-accent transition-transform duration-300 group-hover:scale-x-100"
      />

      <div className="relative mx-4 mt-4 flex h-[140px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-brand/[0.05] via-surface-soft to-accent/[0.04]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              'radial-gradient(circle at 30% 20%, rgba(24,71,159,0.08), transparent 55%)',
          }}
        />
        <span className="absolute left-3 top-3 inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-white/90 px-2 text-[11px] font-bold tracking-wide text-brand shadow-sm">
          {String(index + 1).padStart(2, '0')}
        </span>
        <img
          src={project.image}
          alt=""
          loading="lazy"
          decoding="async"
          className="relative z-[1] max-h-[88px] w-auto max-w-[70%] object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <h3 className="m-0 mb-2 text-[16px] font-semibold leading-snug tracking-tight text-ink">
          {project.title}
        </h3>

        <p className="m-0 mb-5 flex-1 text-[14px] leading-relaxed text-ink-muted">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-1.5 border-t border-surface-border/80 pt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border border-brand/10 bg-brand/[0.04] px-2.5 py-1 text-[11px] font-semibold text-brand"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function DataEngineeringProjectsSection({
  eyebrow = 'Hands-On Learning',
  title = 'Industry',
  titleAccent = 'Projects',
  description = 'Build portfolio-ready pipelines that mirror real business scenarios — from ingestion and transformation to cloud deployment and reporting.',
  projects = dataEngineeringProjects,
} = {}) {
  return (
    <Section
      tone="transparent"
      spacing="flow"
      className="relative overflow-hidden program-page-flow__section"
      id="projects"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          background:
            'radial-gradient(900px 400px at 100% 0%, rgba(24, 71, 159, 0.06), transparent 60%), radial-gradient(700px 320px at 0% 100%, rgba(45, 116, 217, 0.05), transparent 55%)',
        }}
      />

      <Container className="relative">
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-11">
          {eyebrow ? (
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
              <span className="h-px w-8 bg-brand/40" aria-hidden="true" />
              {eyebrow}
              <span className="h-px w-8 bg-brand/40" aria-hidden="true" />
            </div>
          ) : null}
          <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-ink md:text-[40px]">
            {title}
            {titleAccent ? <span className="text-brand"> {titleAccent}</span> : null}
          </h2>
          <p className="mt-5 text-[15px] leading-[1.7] text-ink-muted md:text-base">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default DataEngineeringProjectsSection;
