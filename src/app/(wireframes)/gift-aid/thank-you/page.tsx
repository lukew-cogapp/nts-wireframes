"use client";

import { Suspense } from "react";
import { Button } from "@/components/checkout/FormPrimitives";
import {
	Container,
	SectionLabel,
	usePageVariations,
	WireframeSection,
} from "@/components/wireframe";
import { ScopePage } from "@/providers/ScopeProvider";

const VARIATIONS = [
	{ key: "opted-in", label: "Opted in" },
	{ key: "opted-out", label: "Opted out" },
] as const;

function GiftAidThankYouContent() {
	const variation = usePageVariations(VARIATIONS);
	const optedIn = variation === "opted-in";

	return (
		<ScopePage id="gift-aid/thank-you">
			<div className="min-h-screen bg-white">
				<Container size="md">
					<div className="py-12">
						<WireframeSection label="Confirmation">
							<SectionLabel>Gift Aid</SectionLabel>
							<h1 className="mt-2 font-mono text-page font-semibold leading-[1.15] tracking-tight">
								Thank you
							</h1>
							<p className="mt-3 max-w-prose font-mono text-body leading-[1.7] text-gray-700">
								{optedIn
									? "[NTS to supply copy] Your Gift Aid declaration has been recorded. Every £1 you give is now worth £1.25 to us."
									: "[NTS to supply copy] We've recorded that you don't want to Gift Aid your payments. You can change this at any time."}
							</p>
							<p className="mt-3 font-mono text-meta text-gray-600">
								We've sent a copy of your declaration to jane@example.com.
							</p>
						</WireframeSection>

						<WireframeSection
							label="Next steps"
							className="mt-10 border border-gray-300 p-6"
						>
							<h2 className="font-mono text-section font-medium">
								Keep your details up to date
							</h2>
							<p className="mt-3 max-w-prose font-mono text-body text-gray-700">
								Sign in to My Trust to check your Gift Aid status and update
								your address if you move.
							</p>
							<div className="mt-6 flex gap-3">
								<Button primary href="/sign-up">
									Go to My Trust
								</Button>
								<Button href="/">Back to wireframes</Button>
							</div>
						</WireframeSection>
					</div>
				</Container>
			</div>
		</ScopePage>
	);
}

export default function GiftAidThankYouPage() {
	return (
		<Suspense>
			<GiftAidThankYouContent />
		</Suspense>
	);
}
