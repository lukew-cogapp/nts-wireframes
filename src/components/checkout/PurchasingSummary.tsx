import { SectionLabel, WireframeSection } from "@/components/wireframe";

export function PurchasingSummary({
	subline,
	className,
}: {
	subline?: string;
	className?: string;
}) {
	return (
		<WireframeSection
			label="Purchasing summary"
			className={`border border-gray-300 p-6 ${className ?? ""}`}
		>
			<SectionLabel>You are purchasing</SectionLabel>
			<h2 className="mt-2 font-mono text-section font-medium">
				Membership — Adult
			</h2>
			<p className="mt-1 font-mono text-meta text-gray-600">
				1 adult{subline ? ` · ${subline}` : ""}
			</p>
		</WireframeSection>
	);
}
