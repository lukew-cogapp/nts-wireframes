"use client";

import { Suspense } from "react";
import { Button, CheckoutProgress } from "@/components/checkout/FormPrimitives";
import { JOIN_STEPS } from "@/components/checkout/steps";
import {
	Container,
	SectionLabel,
	WireframeSection,
} from "@/components/wireframe";
import { ScopePage } from "@/providers/ScopeProvider";

function JoinThankYouContent() {
	return (
		<ScopePage id="join/thank-you">
			<div className="min-h-screen bg-white">
				<WireframeSection
					label="Progress"
					className="border-b border-gray-300 py-6"
				>
					<Container>
						<CheckoutProgress steps={JOIN_STEPS} current={4} />
					</Container>
				</WireframeSection>

				<Container size="md">
					<div className="py-12">
						<SectionLabel>Welcome</SectionLabel>
						<h1 className="mt-2 font-mono text-page font-semibold leading-[1.15] tracking-tight">
							Thank you
						</h1>
						<p className="mt-3 max-w-prose font-mono text-body text-gray-600">
							Thanks for deciding to join the National Trust for Scotland. We've
							sent a confirmation email to jane@example.com.
						</p>

						<WireframeSection
							label="Order summary"
							className="mt-10 border border-gray-300 p-6"
						>
							<h2 className="font-mono text-section font-medium">
								Membership — Adult
							</h2>
							<p className="mt-1 font-mono text-meta text-gray-600">
								Annual Direct Debit · £79.20 / year
							</p>
							<p className="mt-3 font-mono text-meta text-gray-600">
								Reference: NTS-MEM-9421
							</p>
						</WireframeSection>

						<WireframeSection
							label="Next steps"
							className="mt-6 border border-gray-300 p-6"
						>
							<h2 className="font-mono text-section font-medium">What next?</h2>
							<ul className="mt-3 list-disc pl-5 font-mono text-body text-gray-700">
								<li>
									Your welcome pack and membership cards will arrive in 7–10
									days.
								</li>
								<li>Manage your membership in My Trust.</li>
								<li>Plan your first visit.</li>
							</ul>
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

export default function JoinThankYouPage() {
	return (
		<Suspense>
			<JoinThankYouContent />
		</Suspense>
	);
}
