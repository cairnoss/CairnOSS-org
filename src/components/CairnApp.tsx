import React, { useEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import { About } from './About';
import { Blog } from './Blog';
import { Community } from './Community';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Navbar } from './Navbar';
import { Projects } from './Projects';
import { TechStack } from './TechStack';

const OBSERVED_SECTION_IDS = ['home', 'projects', 'about', 'community', 'blog'];

export function CairnApp() {
	const [activeSection, setActiveSection] = useState<string>('home');

	useEffect(() => {
		const sections = OBSERVED_SECTION_IDS.map((id) => document.getElementById(id)).filter(
			(el): el is HTMLElement => el !== null
		);

		if (sections.length === 0) return;

		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio);

				if (visible.length > 0 && visible[0].target.id) {
					setActiveSection(visible[0].target.id);
				}
			},
			{
				rootMargin: '-25% 0px -55% 0px',
				threshold: [0.1, 0.25, 0.5],
			}
		);

		sections.forEach((section) => observer.observe(section));
		return () => observer.disconnect();
	}, []);

	return (
		<MotionConfig reducedMotion="user">
			<div className="min-h-dvh flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)]">
				<Navbar activeSection={activeSection} />
				<main id="main-content" className="flex-1">
					<Hero />
					<Projects />
					<About />
					<TechStack />
					<Community />
					<Blog />
				</main>
				<Footer />
			</div>
		</MotionConfig>
	);
}
