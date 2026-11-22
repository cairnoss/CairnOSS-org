import React from 'react';
import { motion } from 'framer-motion';
import { Code2, LockOpen, Users } from 'lucide-react';
import { PRINCIPLES, type Principle } from '../data/cairnData';

function PrincipleIcon({ iconKey }: { iconKey: Principle['iconKey'] }) {
	const cls = 'h-4 w-4 text-[var(--accent)]';
	switch (iconKey) {
		case 'lock-open':
			return <LockOpen className={cls} aria-hidden="true" />;
		case 'code':
			return <Code2 className={cls} aria-hidden="true" />;
		case 'users':
			return <Users className={cls} aria-hidden="true" />;
	}
}

export function About() {
	return (
		<section id="about" className="border-b border-[var(--border-subtle)] py-20 sm:py-24">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="grid gap-12 lg:grid-cols-12 lg:items-start">
					{/* Left Column: Organization Philosophy */}
					<motion.div
						initial={{ y: 14 }}
						whileInView={{ y: 0 }}
						viewport={{ once: true, amount: 0.15 }}
						transition={{ duration: 0.4, ease: 'easeOut' }}
						className="lg:col-span-5"
					>
						<p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
							02 / About CairnOSS
						</p>
						<h2 className="mt-2.5 text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">
							Technology should be open to everyone. """"tduagdgad test"""
						</h2>
						<p className="mt-5 text-base leading-relaxed text-[var(--text-secondary)]">
							Named after the cairn—a carefully stacked stone marker that guides travelers across
							unfamiliar terrain—<strong className="font-medium text-[var(--text-primary)]">CairnOSS</strong>{' '}
							exists to build useful software, improve developer experiences, and contribute lasting
							value to the open-source ecosystem.
						</p>
						<p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
							We believe great software should be transparent, accessible, thoughtfully crafted,
							and shaped in collaboration with the community that relies on it every day.
						</p>

						<div className="mt-7 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-4">
							<p className="font-mono text-xs text-[var(--text-muted)]">mission.statement</p>
							<p className="mt-1.5 text-sm font-medium text-[var(--text-primary)]">
								&ldquo;Building Open. Building Better.&rdquo;
							</p>
						</div>
					</motion.div>

					{/* Right Column: Three Core Principles */}
					<div className="grid gap-4 lg:col-span-7">
						{PRINCIPLES.map((principle, idx) => (
							<motion.div
								key={principle.number}
								initial={{ y: 12 }}
								whileInView={{ y: 0 }}
								viewport={{ once: true, amount: 0.15 }}
								transition={{ duration: 0.35, delay: idx * 0.08, ease: 'easeOut' }}
								className="cairn-card flex flex-col gap-3 rounded-xl p-5 sm:flex-row sm:items-start sm:gap-5"
							>
								<div className="flex items-center gap-3 sm:pt-0.5">
									<span className="font-mono text-xs text-[var(--text-muted)]">
										{principle.number}
									</span>
									<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)]">
										<PrincipleIcon iconKey={principle.iconKey} />
									</div>
								</div>

								<div>
									<h3 className="text-base font-semibold text-[var(--text-primary)]">
										{principle.title}
									</h3>
									<p className="mt-1.5 text-sm leading-relaxed text-[var(--text-secondary)]">
										{principle.description}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
