export interface NavLink {
	id: string;
	label: string;
	href: string;
}

export type ProjectCategory =
	| 'All'
	| 'Web & Platform'
	| 'Developer Tools'
	| 'Infrastructure'
	| 'Desktop Applications'
	| 'Automation'
	| 'Open Source Libraries';

export type ProjectStatus = 'Under Development' | 'Active' | 'Experimental' | 'Archived';

export type ProjectIconKey =
	| 'globe'
	| 'terminal'
	| 'layers'
	| 'app-window'
	| 'workflow'
	| 'package'
	| 'cpu';

export interface Project {
	id: string;
	name: string;
	fullName: string;
	category: Exclude<ProjectCategory, 'All'>;
	status: ProjectStatus;
	description: string;
	stack: string[];
	stars: number;
	isPrivate?: boolean;
	githubUrl: string;
	homepageUrl?: string;
	docsUrl?: string;
	icon: ProjectIconKey;
}

export interface Principle {
	number: string;
	title: string;
	description: string;
	iconKey: 'lock-open' | 'code' | 'users';
}

export type TechIconKey =
	| 'go'
	| 'rust'
	| 'cpp'
	| 'flutter'
	| 'typescript'
	| 'python'
	| 'docker'
	| 'linux';

export interface TechItem {
	id: TechIconKey;
	name: string;
	role: string;
}

export interface CommunityResource {
	id: string;
	title: string;
	description: string;
	label: string;
	href: string;
	external: boolean;
	iconKey: 'github' | 'message-square' | 'git-pull-request' | 'shield-check';
}

export interface SamplePost {
	id: string;
	date: string;
	category: 'Project Announcement' | 'Technical Article' | 'Development Update';
	title: string;
	excerpt: string;
	readingTime: string;
	placeholderBody: string[];
}

export const GITHUB_PROFILE_HANDLE = 'cairnoss';
export const GITHUB_ORG_URL = 'https://github.com/cairnoss';

export const NAV_LINKS: NavLink[] = [
	{ id: 'home', label: 'Home', href: '#home' },
	{ id: 'projects', label: 'Projects', href: '#projects' },
	{ id: 'about', label: 'About', href: '#about' },
	{ id: 'community', label: 'Community', href: '#community' },
	{ id: 'blog', label: 'Blog', href: '#blog' },
];

export const PROJECT_CATEGORIES: ProjectCategory[] = [
	'All',
	'Web & Platform',
	'Developer Tools',
	'Infrastructure',
	'Desktop Applications',
	'Automation',
	'Open Source Libraries',
];

/**
 * Statically reflects the three repositories from https://github.com/cairnoss,
 * keeping all projects marked as "Under Development" until dynamic GitHub API
 * integration is added.
 */
export const PROJECTS: Project[] = [
	{
		id: 'visnex',
		name: 'Visnex',
		fullName: 'cairnoss/Visnex',
		category: 'Developer Tools',
		status: 'Under Development',
		description:
			'Python project currently in pre-release development at CairnOSS. Repository details will open up here once publicly released.',
		stack: ['Python'],
		stars: 0,
		isPrivate: true,
		githubUrl: 'https://github.com/cairnoss',
		icon: 'cpu',
	},
	{
		id: 'cairnoss-org',
		name: 'CairnOSS-org',
		fullName: 'cairnoss/CairnOSS-org',
		category: 'Web & Platform',
		status: 'Under Development',
		description:
			'Official CairnOSS open-source portal built with Astro, React, TypeScript, and Tailwind CSS to showcase our projects and community.',
		stack: ['TypeScript', 'Astro', 'CSS'],
		stars: 0,
		isPrivate: false,
		githubUrl: 'https://github.com/cairnoss/CairnOSS-org',
		homepageUrl: 'https://cairnoss.github.io/CairnOSS-org/',
		icon: 'globe',
	},
	{
		id: 'trueshh',
		name: 'TrueShh',
		fullName: 'cairnoss/TrueShh',
		category: 'Developer Tools',
		status: 'Under Development',
		description:
			'A modern, lightning-fast SSH client. Secure connections, beautiful UI, and effortless server management.',
		stack: ['TypeScript'],
		stars: 0,
		isPrivate: true,
		githubUrl: 'https://github.com/cairnoss',
		icon: 'terminal',
	},
];

export const PRINCIPLES: Principle[] = [
	{
		number: '01',
		title: 'Open by Default',
		description:
			'Building transparent, accessible, and community-driven software where architecture decisions and roadmaps live in the open.',
		iconKey: 'lock-open',
	},
	{
		number: '02',
		title: 'Developer First',
		description:
			'Prioritizing usability, performance, and great developer experiences—from thoughtful CLI defaults to clean documentation.',
		iconKey: 'code',
	},
	{
		number: '03',
		title: 'Built Together',
		description:
			'Encouraging collaboration, contributions, and shared innovation across maintainers, contributors, and everyday practitioners.',
		iconKey: 'users',
	},
];

export const TECH_STACK: TechItem[] = [
	{ id: 'go', name: 'Go', role: 'Services & CLIs' },
	{ id: 'rust', name: 'Rust', role: 'Systems & Tooling' },
	{ id: 'cpp', name: 'C++', role: 'Core Engines' },
	{ id: 'flutter', name: 'Flutter', role: 'Desktop UI' },
	{ id: 'typescript', name: 'TypeScript', role: 'Web & SDKs' },
	{ id: 'python', name: 'Python', role: 'Automation & Scripting' },
	{ id: 'docker', name: 'Docker', role: 'Containers' },
	{ id: 'linux', name: 'Linux', role: 'Runtime Foundation' },
];

export const COMMUNITY_RESOURCES: CommunityResource[] = [
	{
		id: 'github',
		title: 'GitHub Organization',
		description:
			'Browse repositories, inspect RFCs, review open issues, and follow active engineering work across CairnOSS.',
		label: 'github.com/cairnoss',
		href: 'https://github.com/cairnoss',
		external: true,
		iconKey: 'github',
	},
	{
		id: 'discussions',
		title: 'Discussions',
		description:
			'Propose new ideas, ask architectural questions, and share feedback directly with maintainers and contributors.',
		label: 'Open Discussions',
		href: 'https://github.com/cairnoss/CairnOSS-org/discussions',
		external: true,
		iconKey: 'message-square',
	},
	{
		id: 'contributing',
		title: 'Contribution Guidelines',
		description:
			'Learn how pull requests, issue triage, local setups, and code reviews work across our repositories.',
		label: 'Read Guidelines',
		href: 'https://github.com/cairnoss',
		external: true,
		iconKey: 'git-pull-request',
	},
	{
		id: 'code-of-conduct',
		title: 'Community Guidelines',
		description:
			'Our shared standards for constructive, respectful, and inclusive collaboration across every CairnOSS space.',
		label: 'View Standards',
		href: 'https://github.com/cairnoss',
		external: true,
		iconKey: 'shield-check',
	},
];

export const SAMPLE_POSTS: SamplePost[] = [
	{
		id: 'cairnoss-charter-placeholder',
		date: 'Sample Date · Draft',
		category: 'Project Announcement',
		title: 'Introducing the CairnOSS Open Source Initiative (Sample)',
		excerpt:
			'Placeholder announcement outlining our vision for building dependable, thoughtfully crafted open-source developer tooling.',
		readingTime: '4 min read',
		placeholderBody: [
			'This is placeholder editorial content designed to demonstrate how CairnOSS project announcements will appear once published.',
			'When real articles are authored, this space will share release milestones, roadmap updates, and architectural notes directly from the maintainers.',
		],
	},
	{
		id: 'ergonomic-cli-design-placeholder',
		date: 'Sample Date · Draft',
		category: 'Technical Article',
		title: 'Designing Predictable Developer Workflows at Scale (Sample)',
		excerpt:
			'Placeholder technical deep-dive exploring composable primitives, clear terminal diagnostics, and low-friction defaults.',
		readingTime: '6 min read',
		placeholderBody: [
			'This is placeholder technical article content showing the editorial layout for deep engineering write-ups and benchmarks.',
			'Future articles in this category can be wired to Markdown/MDX Astro Content Collections without altering the page structure.',
		],
	},
	{
		id: 'ecosystem-roadmap-placeholder',
		date: 'Sample Date · Draft',
		category: 'Development Update',
		title: 'Quarterly Ecosystem & Maintainer Notes (Sample)',
		excerpt:
			'Placeholder development update covering community feedback, repository templates, and upcoming contributor onboarding.',
		readingTime: '3 min read',
		placeholderBody: [
			'This is placeholder development update content intended to showcase recurring changelog summaries and community highlights.',
			'Replace these entries in src/data/cairnData.ts or connect an Astro content collection when launching your first official release notes.',
		],
	},
];
