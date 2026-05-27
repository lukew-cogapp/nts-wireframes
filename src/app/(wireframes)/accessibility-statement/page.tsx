"use client";

import {
	Container,
	SectionLabel,
	WireframeSection,
} from "@/components/wireframe";
import { t } from "@/lib/strings";
import { ScopePage } from "@/providers/ScopeProvider";

const FEATURES = [
	"Keyboard-only navigation across all pages",
	"Visible focus indicators on every interactive element",
	"Alt text on every meaningful image",
	"Captions and transcripts on audio and video media",
	"Semantic landmarks and heading hierarchy on every page",
	"Sufficient colour contrast (WCAG 2.2 AA)",
	"Resizable text up to 200% without loss of content",
	"Screen-reader friendly form controls and dynamic content",
];

const KNOWN_GAPS = [
	"Some legacy content awaits accessibility review",
	"Embedded third-party widgets may have partial keyboard support",
];

export default function AccessibilityStatementPage() {
	return (
		<ScopePage id="accessibility-statement">
			<div className="min-h-screen bg-white">
				<WireframeSection
					label="Statement"
					className="border-b border-gray-300 py-12"
				>
					<Container size="md">
						<SectionLabel>{t("accessibility.label")}</SectionLabel>
						<h1 className="mt-2 font-mono text-page font-semibold leading-[1.15] tracking-tight">
							{t("accessibility.heading")}
						</h1>
						<p className="mt-4 font-mono text-body text-gray-700">
							{t("accessibility.conformance")}
						</p>
						<p className="mt-2 font-mono text-label text-gray-500">
							{t("accessibility.lastReviewed")}
						</p>
					</Container>
				</WireframeSection>

				<WireframeSection
					label="Features"
					className="border-b border-gray-300 py-8"
				>
					<Container size="md">
						<SectionLabel className="mb-4">
							{t("accessibility.featuresHeading")}
						</SectionLabel>
						<ul className="flex flex-col gap-2">
							{FEATURES.map((f) => (
								<li
									key={f}
									className="flex items-start gap-2 font-mono text-meta text-gray-700"
								>
									<span className="mt-0.5 text-green-600">✓</span>
									<span>{f}</span>
								</li>
							))}
						</ul>
					</Container>
				</WireframeSection>

				<WireframeSection
					label="Known gaps"
					className="border-b border-gray-300 py-8"
				>
					<Container size="md">
						<SectionLabel className="mb-4">
							{t("accessibility.knownGaps")}
						</SectionLabel>
						<ul className="flex flex-col gap-2">
							{KNOWN_GAPS.map((g) => (
								<li
									key={g}
									className="flex items-start gap-2 font-mono text-meta text-gray-700"
								>
									<span className="mt-0.5 text-amber-600">!</span>
									<span>{g}</span>
								</li>
							))}
						</ul>
					</Container>
				</WireframeSection>

				<WireframeSection label="Feedback" className="py-8">
					<Container size="md">
						<SectionLabel className="mb-4">
							{t("accessibility.feedback")}
						</SectionLabel>
						<p className="font-mono text-meta text-gray-700">
							{t("accessibility.feedbackText")}
						</p>
						<p className="mt-3 font-mono text-meta">
							<a
								href={`mailto:${t("accessibility.contactEmail")}`}
								className="border border-gray-300 px-3 py-1.5 inline-block hover:border-gray-500"
							>
								{t("accessibility.contact")}
							</a>
						</p>
					</Container>
				</WireframeSection>
			</div>
		</ScopePage>
	);
}
