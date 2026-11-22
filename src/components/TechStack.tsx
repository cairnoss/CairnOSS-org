import React from 'react';
import { motion } from 'framer-motion';
import { TECH_STACK } from '../data/cairnData';
import { TechIcon } from './TechIcons';

export function TechStack() {
	return (
		<section id="ecosystem" className="border-b border-[var(--border-subtle)] py-20 sm:py-24">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="max-w-2xl">
					<p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
						03 / Technology &amp; Ecosystem
					</p>
					<h2 className="mt-2.5 text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">
						Right tool for every layer.
					</h2>
					<p className="mt-3 text-base text-[var(--text-secondary)]">
						Our projects span systems programming, cross-platform desktop interfaces, developer
						SDKs, and reproducible container infrastructure.
					</p>
				</div>

				<div className="mt-10 grid grid-cols-2 gap-3.5 sm:grid-cols-4">
					{TECH_STACK.map((item, idx) => (
						<motion.div
							key={item.id}
							initial={{ y: 10 }}
							whileInView={{ y: 0 }}
							viewport={{ once: true, amount: 0.15 }}
							transition={{ duration: 0.28, delay: idx * 0.03, ease: 'easeOut' }}
							whileHover={{ y: -2 }}
							className="cairn-card flex items-center gap-3.5 rounded-xl p-4"
						>
							<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)]">
								<TechIcon tech={item.id} size={20} className="text-[var(--text-primary)]" />
							</div>
							<div className="min-w-0">
								<h3 className="text-sm font-semibold text-[var(--text-primary)]">{item.name}</h3>
								<p className="truncate font-mono text-[11px] text-[var(--text-muted)]">
									{item.role}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
