import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { GITHUB_ORG_URL, NAV_LINKS } from '../data/cairnData';
import { CairnLogo } from './CairnLogo';
import { GitHubIcon } from './TechIcons';

interface NavbarProps {
	activeSection: string;
}

export function Navbar({ activeSection }: NavbarProps) {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const navRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 12);
		};

		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		if (!mobileOpen) return;

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				setMobileOpen(false);
			}
		};

		const handlePointerDown = (event: PointerEvent) => {
			if (navRef.current && !navRef.current.contains(event.target as Node)) {
				setMobileOpen(false);
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		document.addEventListener('pointerdown', handlePointerDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
			document.removeEventListener('pointerdown', handlePointerDown);
		};
	}, [mobileOpen]);

	return (
		<header
			className={`sticky top-0 z-50 w-full transition-colors duration-200 ${
				scrolled
					? 'border-b border-[var(--border-subtle)] bg-[var(--bg-glass)] backdrop-blur-xl'
					: 'border-b border-transparent bg-transparent'
			}`}
		>
			<nav
				ref={navRef}
				aria-label="Primary"
				className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
			>
				{/* Brand Logo */}
				<a
					href="#home"
					className="inline-flex items-center rounded-md py-1 focus-visible:outline-2 focus-visible:outline-offset-4"
					aria-label="CairnOSS Home"
					onClick={() => setMobileOpen(false)}
				>
					<CairnLogo markSize={32} showTag />
				</a>

				{/* Desktop Navigation Links */}
				<ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
					{NAV_LINKS.map((link) => {
						const isActive = activeSection === link.id;
						return (
							<li key={link.id}>
								<a
									href={link.href}
									aria-current={isActive ? 'location' : undefined}
									className={`relative inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
										isActive
											? 'text-[var(--text-primary)]'
											: 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
									}`}
								>
									{link.label}
									{isActive && (
										<motion.span
											layoutId="cairn-nav-indicator"
											transition={{ type: 'spring', stiffness: 420, damping: 34 }}
											className="absolute inset-x-2.5 -bottom-[3px] h-[2px] rounded-full bg-[var(--accent)]"
											aria-hidden="true"
										/>
									)}
								</a>
							</li>
						);
					})}
				</ul>

				{/* Actions: GitHub CTA & Mobile Menu Button */}
				<div className="flex items-center gap-2 sm:gap-2.5">
					<a
						href={GITHUB_ORG_URL}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex h-9 items-center gap-2 rounded-lg bg-[var(--text-primary)] px-3.5 text-xs sm:text-sm font-medium text-[var(--bg-primary)] transition-opacity hover:opacity-90"
					>
						<GitHubIcon size={15} />
						<span>GitHub</span>
					</a>

					<button
						type="button"
						className="inline-flex md:hidden h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--text-primary)] transition-colors hover:border-[var(--border-strong)] cursor-pointer"
						aria-expanded={mobileOpen}
						aria-controls="mobile-nav"
						aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
						onClick={() => setMobileOpen((prev) => !prev)}
					>
						{mobileOpen ? (
							<X className="h-4 w-4" aria-hidden="true" />
						) : (
							<Menu className="h-4 w-4" aria-hidden="true" />
						)}
					</button>
				</div>

				{/* Mobile Navigation Drawer */}
				<AnimatePresence>
					{mobileOpen && (
						<motion.div
							id="mobile-nav"
							initial={{ opacity: 0, y: -8 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -8 }}
							transition={{ duration: 0.18, ease: 'easeOut' }}
							className="md:hidden fixed inset-x-4 top-[4.25rem] rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-3 shadow-2xl"
						>
							<ul className="flex flex-col gap-1 list-none m-0 p-0">
								{NAV_LINKS.map((link) => {
									const isActive = activeSection === link.id;
									return (
										<li key={link.id}>
											<a
												href={link.href}
												aria-current={isActive ? 'location' : undefined}
												onClick={() => setMobileOpen(false)}
												className={`flex items-center justify-between rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors ${
													isActive
														? 'bg-[var(--accent-soft)] text-[var(--text-primary)]'
														: 'text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)]'
												}`}
											>
												<span>{link.label}</span>
												{isActive && (
													<span
														className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
														aria-hidden="true"
													/>
												)}
											</a>
										</li>
									);
								})}
							</ul>
							<div className="mt-3 border-t border-[var(--border-subtle)] pt-3">
								<a
									href={GITHUB_ORG_URL}
									target="_blank"
									rel="noopener noreferrer"
									onClick={() => setMobileOpen(false)}
									className="flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--text-primary)] px-4 py-2.5 text-sm font-medium text-[var(--bg-primary)]"
								>
									<GitHubIcon size={16} />
									<span>View CairnOSS on GitHub</span>
								</a>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</nav>
		</header>
	);
}
