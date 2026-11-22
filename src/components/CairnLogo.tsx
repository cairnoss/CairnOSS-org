import React from 'react';

interface CairnMarkProps {
	size?: number;
	className?: string;
}

/**
 * CairnOSS stacked-stone cairn emblem sourced from public/logo_transparent.png.
 */
export function CairnMark({ size = 30, className = '' }: CairnMarkProps) {
	return (
		<img
			src="/logo_transparent.png"
			width={size}
			height={size}
			alt=""
			aria-hidden="true"
			decoding="async"
			className={`object-contain shrink-0 select-none ${className}`}
		/>
	);
}

interface CairnLogoProps {
	markSize?: number;
	className?: string;
	showTag?: boolean;
}

export function CairnLogo({ markSize = 30, className = '', showTag = false }: CairnLogoProps) {
	return (
		<span className={`inline-flex items-center gap-2.5 select-none ${className}`}>
			<CairnMark size={markSize} />
			<span className="inline-flex items-baseline gap-0.5 tracking-tight">
				<span className="text-[1.0625rem] font-semibold text-[var(--text-primary)]">
					Cairn
				</span>
				<span className="font-mono text-[0.9375rem] font-medium text-[var(--accent)]">
					OSS
				</span>
			</span>
			{showTag && (
				<span className="hidden sm:inline-flex items-center rounded-md border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
					org
				</span>
			)}
		</span>
	);
}
