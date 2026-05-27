import Link from "next/link";
import ImagePlaceholder from "./ImagePlaceholder";

interface StoryCardProps {
	title: string;
	category: string;
	subtitle?: string;
	meta?: string;
	href: string;
	imageLabel?: string;
	children?: React.ReactNode;
}

/**
 * Editorial card: image + category badge + title + subtitle + meta line.
 * Use for story / article / feature listings.
 */
export default function StoryCard({
	title,
	category,
	subtitle,
	meta,
	href,
	imageLabel,
	children,
}: StoryCardProps) {
	return (
		<Link
			href={href}
			className="flex flex-col border border-gray-300 text-left transition-colors hover:border-gray-500 hover:bg-gray-50"
		>
			<ImagePlaceholder label={imageLabel ?? "[Image]"} />
			<div className="flex flex-col gap-2 p-4">
				<span className="inline-block self-start border border-gray-400 bg-gray-100 px-1.5 py-0.5 font-mono text-label uppercase tracking-[0.08em]">
					{category}
				</span>
				<h3 className="font-mono text-card font-medium leading-snug">
					{title}
				</h3>
				{subtitle && (
					<p className="font-mono text-meta text-gray-500">{subtitle}</p>
				)}
				{meta && <p className="font-mono text-meta text-gray-500">{meta}</p>}
				{children}
			</div>
		</Link>
	);
}
