import React from 'react';
import type { TechIconKey } from '../data/cairnData';

interface IconProps {
	size?: number;
	className?: string;
}

export function GitHubIcon({ size = 16, className = '' }: IconProps) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="currentColor"
			className={className}
			aria-hidden="true"
		>
			<path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
		</svg>
	);
}

/**
 * Restrained, geometric 22px technology marks crafted to fit dark/light surfaces
 * without oversized logos or visual clutter.
 */
export function TechIcon({
	tech,
	size = 22,
	className = '',
}: {
	tech: TechIconKey;
	size?: number;
	className?: string;
}) {
	const common = {
		width: size,
		height: size,
		viewBox: '0 0 24 24',
		fill: 'none',
		xmlns: 'http://www.w3.org/2000/svg',
		className,
		'aria-hidden': true as const,
	};

	switch (tech) {
		case 'go':
			return (
				<svg {...common}>
					<path
						d="M3 9h5M2 12h4.5M4 15h4"
						stroke="currentColor"
						strokeWidth="1.7"
						strokeLinecap="round"
					/>
					<path
						d="M14.5 8.5a3.5 3.5 0 1 0 0 7h1.2a2.8 2.8 0 0 0 0-5.6h-1.8"
						stroke="#38BDF8"
						strokeWidth="1.8"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<circle cx="19" cy="12" r="2.7" stroke="currentColor" strokeWidth="1.7" />
				</svg>
			);
		case 'rust':
			return (
				<svg {...common}>
					<circle cx="12" cy="12" r="6.5" stroke="currentColor" strokeWidth="1.7" />
					<path
						d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M18.4 5.6l-1.8 1.8M7.4 16.6l-1.8 1.8"
						stroke="#F97316"
						strokeWidth="1.6"
						strokeLinecap="round"
					/>
					<path
						d="M9.7 15V9.2h3.1a1.7 1.7 0 0 1 0 3.4H9.7m2.4 0 2.1 2.4"
						stroke="currentColor"
						strokeWidth="1.6"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			);
		case 'cpp':
			return (
				<svg {...common}>
					<path
						d="M12 3.2 19.6 7.6v8.8L12 20.8l-7.6-4.4V7.6L12 3.2Z"
						stroke="currentColor"
						strokeWidth="1.6"
						strokeLinejoin="round"
					/>
					<path
						d="M11.2 9.4a3 3 0 1 0 0 5.2M13.5 12h2.5m-1.25-1.25v2.5M16.9 12h2.5m-1.25-1.25v2.5"
						stroke="#60A5FA"
						strokeWidth="1.6"
						strokeLinecap="round"
					/>
				</svg>
			);
		case 'flutter':
			return (
				<svg {...common}>
					<path
						d="M13.8 3.5 5.2 12l2.7 2.7 11.2-11.2h-5.3Z"
						stroke="#38BDF8"
						strokeWidth="1.7"
						strokeLinejoin="round"
					/>
					<path
						d="m13.8 11.5-4.3 4.3 4.3 4.7h5.3l-4.5-4.6 4.5-4.4h-5.3Z"
						stroke="currentColor"
						strokeWidth="1.7"
						strokeLinejoin="round"
					/>
				</svg>
			);
		case 'typescript':
			return (
				<svg {...common}>
					<rect
						x="3.5"
						y="3.5"
						width="17"
						height="17"
						rx="3"
						stroke="currentColor"
						strokeWidth="1.6"
					/>
					<path
						d="M7.5 10.5h4.4M9.7 10.5v6.2M17 11.2c-.6-.5-1.3-.7-2-.7-1 0-1.7.5-1.7 1.3 0 1.9 3.8 1.1 3.8 3.2 0 .9-.8 1.6-2 1.6-.9 0-1.6-.3-2.2-.8"
						stroke="#3B82F6"
						strokeWidth="1.6"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			);
		case 'python':
			return (
				<svg {...common}>
					<path
						d="M11.8 4h-2a2.3 2.3 0 0 0-2.3 2.3v2.2h4.7a1.8 1.8 0 0 1 1.8 1.8v1.7H6.8A2.3 2.3 0 0 0 4.5 14.3v1.9A2.3 2.3 0 0 0 6.8 18.5H9"
						stroke="#60A5FA"
						strokeWidth="1.65"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M12.2 20h2a2.3 2.3 0 0 0 2.3-2.3v-2.2h-4.7A1.8 1.8 0 0 1 10 13.7V12h7.2a2.3 2.3 0 0 0 2.3-2.3V7.8a2.3 2.3 0 0 0-2.3-2.3H15"
						stroke="#FACC15"
						strokeWidth="1.65"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<circle cx="9.5" cy="6.2" r="0.8" fill="currentColor" />
					<circle cx="14.5" cy="17.8" r="0.8" fill="currentColor" />
				</svg>
			);
		case 'docker':
			return (
				<svg {...common}>
					<path
						d="M6.5 9.5h3v2.5h-3zm3.5 0h3v2.5h-3zm3.5 0h3v2.5h-3zm-3.5-3h3v2.5h-3z"
						stroke="#38BDF8"
						strokeWidth="1.45"
						strokeLinejoin="round"
					/>
					<path
						d="M3.5 13h14.7c1.6 0 2.5-.9 2.9-2-.5-.4-1.3-.5-2-.2-.2-1-.9-1.7-1.7-2.1-.6 1-.5 2.3.1 3.1M4 13c0 3.7 2.8 6.5 7.4 6.5 4.4 0 7.4-2.5 8.6-6.5"
						stroke="currentColor"
						strokeWidth="1.6"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			);
		case 'linux':
			return (
				<svg {...common}>
					<rect
						x="3.5"
						y="4.5"
						width="17"
						height="15"
						rx="3"
						stroke="currentColor"
						strokeWidth="1.6"
					/>
					<path
						d="m7.5 10 2.7 2.2-2.7 2.3M11.8 14.5h4.5"
						stroke="var(--accent)"
						strokeWidth="1.75"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			);
	}
}
