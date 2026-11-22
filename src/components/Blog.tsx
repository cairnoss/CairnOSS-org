import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, X } from 'lucide-react';
import { SAMPLE_POSTS, type SamplePost } from '../data/cairnData';

export function Blog() {
	const [activePost, setActivePost] = useState<SamplePost | null>(null);
	const dialogRef = useRef<HTMLDialogElement | null>(null);

	useEffect(() => {
		const dialog = dialogRef.current;
		if (!dialog) return;

		if (activePost) {
			if (!dialog.open) {
				dialog.showModal();
			}
		} else if (dialog.open) {
			dialog.close();
		}
	}, [activePost]);

	const handleBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
		if (event.target === dialogRef.current) {
			setActivePost(null);
		}
	};

	return (
		<section id="blog" className="py-20 sm:py-24">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
					<div className="max-w-2xl">
						<p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
							05 / Updates &amp; Journal
						</p>
						<h2 className="mt-2.5 text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">
							Latest Updates
						</h2>
						<p className="mt-3 text-base text-[var(--text-secondary)]">
							Project announcements, engineering deep-dives, development updates, and open-source
							notes from across CairnOSS.
						</p>
					</div>

					<p className="inline-flex items-center gap-2 self-start rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-3 py-1.5 font-mono text-xs text-[var(--text-muted)]">
						<span
							className="h-1.5 w-1.5 rounded-full bg-[var(--accent-violet)]"
							aria-hidden="true"
						/>
						Placeholder articles · Ready for content
					</p>
				</div>

				<div className="mt-10 grid gap-5 md:grid-cols-3">
					{SAMPLE_POSTS.map((post, idx) => (
						<motion.article
							key={post.id}
							initial={{ y: 12 }}
							whileInView={{ y: 0 }}
							viewport={{ once: true, amount: 0.15 }}
							transition={{ duration: 0.3, delay: idx * 0.06, ease: 'easeOut' }}
							whileHover={{ y: -3 }}
							className="cairn-card flex flex-col justify-between rounded-xl p-6"
						>
							<div>
								<div className="flex flex-wrap items-center justify-between gap-2">
									<span className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-2.5 py-0.5 font-mono text-[11px] font-medium text-[var(--accent)]">
										{post.category}
									</span>
									<span className="inline-flex items-center gap-1 font-mono text-[11px] text-[var(--text-muted)]">
										<Clock className="h-3 w-3" aria-hidden="true" />
										{post.readingTime}
									</span>
								</div>

								<h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight text-[var(--text-primary)]">
									{post.title}
								</h3>

								<p className="mt-2.5 text-sm leading-relaxed text-[var(--text-secondary)]">
									{post.excerpt}
								</p>
							</div>

							<div className="mt-6 flex items-center justify-between border-t border-[var(--border-subtle)] pt-4">
								<span className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--text-muted)]">
									<Calendar className="h-3.5 w-3.5" aria-hidden="true" />
									{post.date}
								</span>

								<button
									type="button"
									onClick={() => setActivePost(post)}
									className="inline-flex items-center gap-1 text-xs font-medium text-[var(--text-primary)] transition-colors hover:text-[var(--accent)] cursor-pointer"
								>
									<span>Preview</span>
									<ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
								</button>
							</div>
						</motion.article>
					))}
				</div>
			</div>

			{/* Accessible Native Dialog for Placeholder Article Preview */}
			<dialog
				ref={dialogRef}
				onCancel={(event) => {
					event.preventDefault();
					setActivePost(null);
				}}
				onClick={handleBackdropClick}
				aria-labelledby="blog-preview-title"
				className="cairn-dialog"
			>
				{activePost && (
					<div className="p-6 sm:p-8">
						<div className="flex items-start justify-between gap-4 border-b border-[var(--border-subtle)] pb-4">
							<div>
								<div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[var(--text-muted)]">
									<span className="text-[var(--accent)]">{activePost.category}</span>
									<span aria-hidden="true">·</span>
									<span>{activePost.date}</span>
									<span aria-hidden="true">·</span>
									<span>{activePost.readingTime}</span>
								</div>
								<h3
									id="blog-preview-title"
									className="mt-2 text-xl font-semibold tracking-tight text-[var(--text-primary)]"
								>
									{activePost.title}
								</h3>
							</div>

							<button
								type="button"
								onClick={() => setActivePost(null)}
								aria-label="Close article preview"
								className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] cursor-pointer"
							>
								<X className="h-4 w-4" aria-hidden="true" />
							</button>
						</div>

						<div className="mt-5 space-y-4 text-sm leading-relaxed text-[var(--text-secondary)]">
							<p className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-3.5 py-2.5 font-mono text-xs text-[var(--text-muted)]">
								Template Preview: This entry uses placeholder copy so no real published articles are
								fabricated.
							</p>
							{activePost.placeholderBody.map((paragraph, index) => (
								<p key={index}>{paragraph}</p>
							))}
						</div>

						<div className="mt-6 flex justify-end border-t border-[var(--border-subtle)] pt-4">
							<button
								type="button"
								onClick={() => setActivePost(null)}
								className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-4 py-2 text-xs font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-strong)] cursor-pointer"
							>
								Close Preview
							</button>
						</div>
					</div>
				)}
			</dialog>
		</section>
	);
}
