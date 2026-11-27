import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
	AppWindow,
	ArrowUpRight,
	BookOpen,
	Cpu,
	Globe,
	Layers,
	Lock,
	Package,
	Star,
	Terminal,
	Workflow,
} from 'lucide-react';
import {
	GITHUB_ORG_URL,
	PROJECT_CATEGORIES,
	PROJECTS,
	type ProjectCategory,
	type ProjectIconKey,
	type ProjectStatus,
} from '../data/cairnData';
import { GitHubIcon } from './TechIcons';

function ProjectIcon({ icon }: { icon: ProjectIconKey }) {
	const cls = 'h-4 w-4 text-[var(--accent)]';
	switch (icon) {
		case 'globe':
			return <Globe className={cls} aria-hidden="true" />;
		case 'terminal':
			return <Terminal className={cls} aria-hidden="true" />;
		case 'layers':
			return <Layers className={cls} aria-hidden="true" />;
		case 'app-window':
			return <AppWindow className={cls} aria-hidden="true" />;
		case 'workflow':
			return <Workflow className={cls} aria-hidden="true" />;
		case 'package':
			return <Package className={cls} aria-hidden="true" />;
		case 'cpu':
			return <Cpu className={cls} aria-hidden="true" />;
	}
}

function StatusBadge({ status }: { status: ProjectStatus }) {
	if (status === 'Under Development') {
		return (
			<span
				className="inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[11px] font-medium"
				style={{
					color: 'var(--status-dev-text)',
					backgroundColor: 'var(--status-dev-bg)',
					borderColor: 'var(--status-dev-border)',
				}}
			>
				<span className="h-1.5 w-1.5 rounded-full bg-amber-500" aria-hidden="true" />
				{status}
			</span>
		);
	}

	const styles: Record<Exclude<ProjectStatus, 'Under Development'>, { dot: string; badge: string }> =
		{
			Active: {
				dot: 'bg-emerald-400',
				badge: 'border-emerald-500/25 bg-emerald-500/10 text-emerald-400',
			},
			Experimental: {
				dot: 'bg-violet-400',
				badge: 'border-violet-500/25 bg-violet-500/10 text-violet-400',
			},
			Archived: {
				dot: 'bg-zinc-400',
				badge: 'border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-[var(--text-muted)]',
			},
		};

	const current = styles[status];
	return (
		<span
			className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[11px] font-medium ${current.badge}`}
		>
			<span className={`h-1.5 w-1.5 rounded-full ${current.dot}`} aria-hidden="true" />
			{status}
		</span>
	);
}

export function Projects() {
	const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');

	const filteredProjects =
		selectedCategory === 'All'
			? PROJECTS
			: PROJECTS.filter((project) => project.category === selectedCategory);

	return (
		<section id="projects" className="border-b border-[var(--border-subtle)] py-20 sm:py-24">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
					<div className="max-w-2xl">
						<p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
							01 / Projects
						</p>
						<h2 className="mt-2.5 text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">
							Featured Projects
						</h2>
						<p className="mt-3 text-base text-[var(--text-secondary)]">
							Repositories from{' '}
							<a
								href={GITHUB_ORG_URL}
								target="_blank"
								rel="noopener noreferrer"
								className="font-mono text-sm text-[var(--text-primary)] underline decoration-[var(--border-strong)] underline-offset-4 transition-colors hover:text-[var(--accent)]"
							>
								github.com/cairnoss
							</a>
							, currently under active development.
						</p>
					</div>

					<a
						href={GITHUB_ORG_URL}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 self-start rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-3 py-1.5 font-mono text-xs text-[var(--text-muted)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
					>
						<span className="h-1.5 w-1.5 rounded-full bg-amber-500" aria-hidden="true" />
						<span>github.com/cairnoss · All projects under development</span>
					</a>
				</div>

				{/* Category Filter Tabs */}
				<div
					className="mt-8 flex flex-wrap gap-2"
					role="group"
					aria-label="Filter projects by category"
				>
					{PROJECT_CATEGORIES.map((category) => {
						const active = selectedCategory === category;
						return (
							<button
								key={category}
								type="button"
								aria-pressed={active}
								onClick={() => setSelectedCategory(category)}
								className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
									active
										? 'border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--text-primary)]'
										: 'border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]'
								}`}
							>
								{category}
							</button>
						);
					})}
				</div>

				{/* Project Cards Grid */}
				<div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
					{filteredProjects.map((project, idx) => (
						<motion.article
							key={project.id}
							layout
							initial={{ y: 12 }}
							whileInView={{ y: 0 }}
							viewport={{ once: true, amount: 0.15 }}
							transition={{ duration: 0.3, delay: idx * 0.04, ease: 'easeOut' }}
							whileHover={{ y: -3 }}
							className="cairn-card group flex flex-col justify-between rounded-xl p-5"
						>
							<div>
								{/* Top Row: Icon, Title, Status */}
								<div className="flex items-start justify-between gap-3">
									<div className="flex min-w-0 items-center gap-3">
										<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)]">
											<ProjectIcon icon={project.icon} />
										</div>
										<div className="min-w-0">
											<h3 className="truncate font-mono text-sm font-semibold text-[var(--text-primary)]">
												{project.name}
											</h3>
											<p className="truncate text-xs text-[var(--text-muted)]">
												{project.category}
											</p>
										</div>
									</div>

									<StatusBadge status={project.status} />
								</div>

								{/* Description */}
								<p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
									{project.description}
								</p>

								{/* Tech Stack */}
								<div className="mt-4 flex flex-wrap gap-1.5">
									{project.stack.map((tech) => (
										<span
											key={tech}
											className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-2 py-0.5 font-mono text-[11px] text-[var(--text-secondary)]"
										>
											{tech}
										</span>
									))}
								</div>
							</div>

							{/* Bottom Row: Stars + Links */}
							<div className="mt-6 flex items-center justify-between border-t border-[var(--border-subtle)] pt-3.5 text-xs">
								<span
									className="inline-flex items-center gap-1.5 font-mono text-[var(--text-muted)]"
									title={`${project.stars} GitHub stars`}
								>
									<Star className="h-3.5 w-3.5" aria-hidden="true" />
									<span>{project.stars}</span>
									<span className="sr-only">GitHub stars</span>
								</span>

								<div className="flex items-center gap-3">
									{project.isPrivate ? (
										<span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[var(--text-muted)]">
											<Lock className="h-3 w-3" aria-hidden="true" />
											<span>Private · Pre-release</span>
										</span>
									) : (
										<>
											{project.homepageUrl ? (
												<a
													href={project.homepageUrl}
													target="_blank"
													rel="noopener noreferrer"
													className="inline-flex items-center gap-1 font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
												>
													<Globe className="h-3.5 w-3.5" aria-hidden="true" />
													<span>Live</span>
													<ArrowUpRight className="h-3 w-3" aria-hidden="true" />
												</a>
											) : project.docsUrl ? (
												<a
													href={project.docsUrl}
													className="inline-flex items-center gap-1 font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
												>
													<BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
													<span>Docs</span>
												</a>
											) : null}
											<a
												href={project.githubUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center gap-1 font-medium text-[var(--text-primary)] transition-colors hover:text-[var(--accent)]"
											>
												<GitHubIcon size={13} />
												<span>Repo</span>
												<ArrowUpRight className="h-3 w-3" aria-hidden="true" />
											</a>
										</>
									)}
								</div>
							</div>
						</motion.article>
					))}

					{/* Empty State for Filtered Categories Without Repos Yet */}
					{filteredProjects.length === 0 && (
						<div className="cairn-card sm:col-span-2 lg:col-span-3 flex flex-col items-start justify-between gap-4 rounded-xl border-dashed p-6 sm:flex-row sm:items-center">
							<div>
								<p className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">
									{selectedCategory}
								</p>
								<h3 className="mt-1 text-base font-semibold text-[var(--text-primary)]">
									No repositories in this category yet
								</h3>
								<p className="mt-1 text-sm text-[var(--text-secondary)]">
									Upcoming {selectedCategory.toLowerCase()} repositories will appear here as they are
									added under{' '}
									<span className="font-mono text-[var(--text-primary)]">github.com/cairnoss</span>.
								</p>
							</div>
							<a
								href={GITHUB_ORG_URL}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-4 py-2 text-xs font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-strong)]"
							>
								<GitHubIcon size={14} />
								<span>Follow @cairnoss</span>
								<ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
							</a>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
