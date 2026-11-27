import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { COMMUNITY_RESOURCES, GITHUB_ORG_URL, NAV_LINKS } from '../data/cairnData';
import { CairnLogo } from './CairnLogo';
import { GitHubIcon } from './TechIcons';

export function Footer() {
	return (
		<footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]/50">
			<div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
				<div className="grid gap-10 md:grid-cols-12">
					{/* Organization Brand & Summary */}
					<div className="md:col-span-5">
						<a href="#home" aria-label="CairnOSS Home" className="inline-flex">
							<CairnLogo markSize={28} />
						</a>
						<p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--text-secondary)]">
							CairnOSS (Cairn + Open Source Software) builds and maintains open, accessible, and
							thoughtfully designed tools that simplify developer workflows.
						</p>
						<p className="mt-4 font-mono text-xs text-[var(--text-muted)]">
							&ldquo;Built with passion. Shared with everyone.&rdquo;
						</p>
					</div>

					{/* Navigation Column */}
					<div className="md:col-span-2">
						<h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)]">
							Navigation
						</h3>
						<ul className="mt-4 space-y-2.5 list-none p-0 m-0">
							{NAV_LINKS.map((link) => (
								<li key={link.id}>
									<a
										href={link.href}
										className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
									>
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Community Column */}
					<div className="md:col-span-3">
						<h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)]">
							Community
						</h3>
						<ul className="mt-4 space-y-2.5 list-none p-0 m-0">
							{COMMUNITY_RESOURCES.map((item) => (
								<li key={item.id}>
									<a
										href={item.href}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-1 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
									>
										<span>{item.title}</span>
										<ArrowUpRight className="h-3 w-3 opacity-60" aria-hidden="true" />
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Contact Column */}
					<div className="md:col-span-2">
						<h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)]">
							Connect
						</h3>
						<div className="mt-4 space-y-3">
							<a
								href="mailto:cairnoss21@gmail.com"
								className="inline-flex items-center gap-2 font-mono text-xs text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
							>
								<Mail className="h-3.5 w-3.5 text-[var(--accent)] shrink-0" aria-hidden="true" />
								<span>cairnoss21@gmail.com</span>
							</a>
							<div>
								<a
									href={GITHUB_ORG_URL}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-3 py-1.5 text-xs font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-strong)]"
								>
									<GitHubIcon size={14} />
									<span>@CairnOSS</span>
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Legal & Tagline Bar */}
				<div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[var(--border-subtle)] pt-6 text-xs text-[var(--text-muted)] sm:flex-row sm:items-center">
					<p>&copy; 2026 CairnOSS. Open Source Software Organization.</p>
					<p className="font-mono">Building Open. Building Better.</p>
				</div>
			</div>
		</footer>
	);
}
