import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Pause, Play, Users } from 'lucide-react';
import { CairnMark } from './CairnLogo';

export function Hero() {
	const [motionPaused, setMotionPaused] = useState(false);

	return (
		<section
			id="home"
			className={`relative overflow-hidden border-b border-[var(--border-subtle)] ${
				motionPaused ? 'cairn-motion-paused' : ''
			}`}
		>
			{/* Architectural Grid + Radial Mask */}
			<div
				className="pointer-events-none absolute inset-0 cairn-grid-bg opacity-80"
				style={{
					maskImage:
						'radial-gradient(ellipse 80% 70% at 50% 35%, black 35%, transparent 100%)',
					WebkitMaskImage:
						'radial-gradient(ellipse 80% 70% at 50% 35%, black 35%, transparent 100%)',
				}}
				aria-hidden="true"
			/>

			{/* Ambient Lighting Gradients */}
			<div
				className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[760px] -translate-x-1/2 rounded-full blur-3xl"
				style={{
					background:
						'radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.16), rgba(139, 92, 246, 0.10) 50%, transparent 75%)',
				}}
				aria-hidden="true"
			/>

			{/* Interconnected Nodes & Floating Geometric Cairn Shapes */}
			<div className="pointer-events-none absolute inset-0 mx-auto max-w-6xl" aria-hidden="true">
				<svg
					className="h-full w-full opacity-75"
					viewBox="0 0 1200 640"
					fill="none"
					preserveAspectRatio="xMidYMid slice"
				>
					{/* Interconnected node edges */}
					<g stroke="var(--node-stroke)" strokeWidth="1" strokeDasharray="4 4">
						<line x1="140" y1="150" x2="290" y2="230" />
						<line x1="290" y1="230" x2="205" y2="395" />
						<line x1="290" y1="230" x2="465" y2="120" />
						<line x1="910" y1="145" x2="1055" y2="235" />
						<line x1="1055" y1="235" x2="965" y2="410" />
						<line x1="910" y1="145" x2="775" y2="105" />
						<line x1="965" y1="410" x2="825" y2="480" />
					</g>

					{/* Nodes */}
					<g>
						<circle cx="140" cy="150" r="3.5" fill="var(--accent)" fillOpacity="0.6" />
						<circle cx="290" cy="230" r="4" fill="var(--text-muted)" fillOpacity="0.55" />
						<circle cx="205" cy="395" r="3" fill="var(--accent-violet)" fillOpacity="0.6" />
						<circle cx="465" cy="120" r="2.5" fill="var(--text-muted)" fillOpacity="0.45" />
						<circle cx="910" cy="145" r="4" fill="var(--accent)" fillOpacity="0.65" />
						<circle cx="1055" cy="235" r="3.5" fill="var(--text-muted)" fillOpacity="0.55" />
						<circle cx="965" cy="410" r="4" fill="var(--accent-violet)" fillOpacity="0.65" />
						<circle cx="775" cy="105" r="2.5" fill="var(--text-muted)" fillOpacity="0.45" />
						<circle cx="825" cy="480" r="3" fill="var(--accent)" fillOpacity="0.5" />

						<circle
							cx="910"
							cy="145"
							r="11"
							stroke="var(--accent)"
							strokeOpacity="0.32"
							className="cairn-ambient-pulse"
						/>
						<circle
							cx="290"
							cy="230"
							r="10"
							stroke="var(--accent-violet)"
							strokeOpacity="0.28"
							className="cairn-ambient-pulse"
						/>
					</g>
				</svg>

				{/* Floating geometric cairn-inspired monoliths */}
				<div className="cairn-ambient-float hidden lg:flex absolute left-10 top-28 flex-col items-center gap-1.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/75 p-3 backdrop-blur-md">
					<span className="h-1.5 w-6 rounded-full bg-[var(--accent)]/80" />
					<span className="h-2 w-10 rounded-full bg-[var(--border-strong)]" />
					<span className="h-2 w-14 rounded-full bg-[var(--border-subtle)]" />
				</div>

				<div className="cairn-ambient-float-reverse hidden lg:flex absolute right-12 bottom-24 flex-col gap-1.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/75 px-3.5 py-2.5 backdrop-blur-md">
					<span className="font-mono text-[10px] text-[var(--text-muted)]">org.status</span>
					<span className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--text-primary)]">
						<span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
						open-by-design
					</span>
				</div>
			</div>

			{/* Hero Content */}
			<div className="relative mx-auto max-w-6xl px-4 pt-20 pb-20 sm:px-6 sm:pt-28 sm:pb-28 lg:px-8 lg:pt-32 lg:pb-32">
				<div className="mx-auto max-w-3xl text-center">
					{/* Status Indicator */}
					<motion.div
						initial={{ y: 8 }}
						animate={{ y: 0 }}
						transition={{ duration: 0.4, ease: 'easeOut' }}
						className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/90 px-3.5 py-1.5 text-xs text-[var(--text-secondary)] shadow-sm backdrop-blur-sm"
					>
						<span className="relative flex h-2 w-2" aria-hidden="true">
							<span className="cairn-ambient-pulse absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75" />
							<span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
						</span>
						<span className="font-mono tracking-tight">
							Building the future, one commit at a time.
						</span>
					</motion.div>

					{/* Headline */}
					<motion.h1
						initial={{ y: 10 }}
						animate={{ y: 0 }}
						transition={{ duration: 0.45, delay: 0.04, ease: 'easeOut' }}
						className="text-4xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-6xl lg:text-[4.125rem] lg:leading-[1.06]"
					>
						Open Source.{' '}
						<span className="bg-gradient-to-r from-[var(--text-primary)] via-[var(--accent)] to-[var(--accent-violet)] bg-clip-text text-transparent">
							Without Limits.
						</span>
					</motion.h1>

					{/* Supporting Description */}
					<motion.p
						initial={{ y: 10 }}
						animate={{ y: 0 }}
						transition={{ duration: 0.45, delay: 0.08, ease: 'easeOut' }}
						className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg"
					>
						We build thoughtful, powerful, and accessible software that empowers developers to do
						more. Open by design. Built for everyone.
					</motion.p>

					{/* Primary & Secondary CTAs */}
					<motion.div
						initial={{ y: 10 }}
						animate={{ y: 0 }}
						transition={{ duration: 0.45, delay: 0.12, ease: 'easeOut' }}
						className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row"
					>
						<a
							href="#projects"
							className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[var(--accent-hover)]"
						>
							<span>Explore Projects</span>
							<ArrowRight className="h-4 w-4" aria-hidden="true" />
						</a>

						<a
							href="#community"
							className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-5 py-2.5 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--bg-elevated)]"
						>
							<Users className="h-4 w-4 text-[var(--text-secondary)]" aria-hidden="true" />
							<span>Join the Community</span>
						</a>
					</motion.div>

					{/* Organization Tagline Strip */}
					<motion.div
						initial={{ y: 8 }}
						animate={{ y: 0 }}
						transition={{ duration: 0.45, delay: 0.16, ease: 'easeOut' }}
						className="mt-14 inline-flex flex-wrap items-center justify-center gap-x-5 gap-y-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/70 px-4 py-2.5 text-xs text-[var(--text-muted)] backdrop-blur-sm"
					>
						<span className="inline-flex items-center gap-2 font-medium text-[var(--text-secondary)]">
							<CairnMark size={20} />
							CairnOSS
						</span>
						<span aria-hidden="true" className="text-[var(--border-strong)]">
							/
						</span>
						<span className="font-mono">Cairn + Open Source Software</span>
						<span aria-hidden="true" className="text-[var(--border-strong)]">
							/
						</span>
						<span className="text-[var(--text-secondary)]">&ldquo;Building Open. Building Better.&rdquo;</span>
					</motion.div>
				</div>

				{/* Pause/Play Ambient Motion Control (WCAG 2.2.2) */}
				<div className="mt-8 flex justify-end lg:mt-0 lg:absolute lg:bottom-5 lg:right-8">
					<button
						type="button"
						onClick={() => setMotionPaused((prev) => !prev)}
						className="inline-flex items-center gap-1.5 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/85 px-2.5 py-1 font-mono text-[11px] text-[var(--text-muted)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text-primary)] cursor-pointer"
					>
						{motionPaused ? (
							<>
								<Play className="h-3 w-3" aria-hidden="true" />
								<span>Play motion</span>
							</>
						) : (
							<>
								<Pause className="h-3 w-3" aria-hidden="true" />
								<span>Pause motion</span>
							</>
						)}
					</button>
				</div>
			</div>
		</section>
	);
}
