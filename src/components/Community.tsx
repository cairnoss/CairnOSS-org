import React from 'react';
import { motion } from 'framer-motion';
import {
	ArrowUpRight,
	GitPullRequest,
	MessageSquare,
	ShieldCheck,
} from 'lucide-react';
import {
	COMMUNITY_RESOURCES,
	GITHUB_ORG_URL,
	type CommunityResource,
} from '../data/cairnData';
import { GitHubIcon } from './TechIcons';

function CommunityIcon({ iconKey }: { iconKey: CommunityResource['iconKey'] }) {
	const cls = 'h-4 w-4 text-[var(--accent)]';
	switch (iconKey) {
		case 'github':
			return <GitHubIcon size={16} className="text-[var(--accent)]" />;
		case 'message-square':
			return <MessageSquare className={cls} aria-hidden="true" />;
		case 'git-pull-request':
			return <GitPullRequest className={cls} aria-hidden="true" />;
		case 'shield-check':
			return <ShieldCheck className={cls} aria-hidden="true" />;
	}
}

export function Community() {
	return (
		<section id="community" className="border-b border-[var(--border-subtle)] py-20 sm:py-24">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
					<div className="max-w-2xl">
						<p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
							04 / Community
						</p>
						<h2 className="mt-2.5 text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">
							Great software is built together.
						</h2>
						<p className="mt-3 text-base text-[var(--text-secondary)]">
							Whether you want to submit a pull request, report a bug, propose a feature, or refine
							documentation, every contribution helps shape the CairnOSS ecosystem.
						</p>
					</div>

					<a
						href={GITHUB_ORG_URL}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[var(--accent-hover)] md:self-auto"
					>
						<GitPullRequest className="h-4 w-4" aria-hidden="true" />
						<span>Become a Contributor</span>
					</a>
				</div>

				<div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{COMMUNITY_RESOURCES.map((item, idx) => (
						<motion.a
							key={item.id}
							href={item.href}
							target={item.external ? '_blank' : undefined}
							rel={item.external ? 'noopener noreferrer' : undefined}
							initial={{ y: 12 }}
							whileInView={{ y: 0 }}
							viewport={{ once: true, amount: 0.15 }}
							transition={{ duration: 0.3, delay: idx * 0.05, ease: 'easeOut' }}
							whileHover={{ y: -3 }}
							className="cairn-card group flex flex-col justify-between rounded-xl p-5"
						>
							<div>
								<div className="flex items-center justify-between">
									<div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)]">
										<CommunityIcon iconKey={item.iconKey} />
									</div>
									<ArrowUpRight
										className="h-4 w-4 text-[var(--text-muted)] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--text-primary)]"
										aria-hidden="true"
									/>
								</div>

								<h3 className="mt-4 text-base font-semibold text-[var(--text-primary)]">
									{item.title}
								</h3>
								<p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
									{item.description}
								</p>
							</div>

							<span className="mt-5 inline-flex items-center gap-1 font-mono text-xs text-[var(--accent)]">
								{item.label}
							</span>
						</motion.a>
					))}
				</div>
			</div>
		</section>
	);
}
