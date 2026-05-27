"use client";

import { Suspense } from "react";
import { Button } from "@/components/checkout/FormPrimitives";
import {
	Container,
	SectionLabel,
	WireframeSection,
} from "@/components/wireframe";
import { ScopePage } from "@/providers/ScopeProvider";

function JoinLandingContent() {
	return (
		<ScopePage id="join">
			<div className="min-h-screen bg-white">
				<Container size="md">
					<div className="py-12">
						<SectionLabel>Become a member</SectionLabel>
						<h1 className="mt-2 font-mono text-page font-semibold leading-[1.15] tracking-tight">
							Join the National Trust for Scotland
						</h1>
						<p className="mt-4 max-w-prose font-mono text-body text-gray-600">
							Members get free access to over 100 places, support our work
							protecting Scotland's heritage, and receive our magazine three
							times a year.
						</p>

						<SectionLabel className="mt-10 mb-4">
							Individual memberships
						</SectionLabel>
						<WireframeSection
							label="Plan"
							className="border border-gray-300 p-6"
						>
							<div className="text-center">
								<h2 className="font-mono text-section font-medium">Adult</h2>
								<p className="mt-1 font-mono text-meta text-gray-600">
									1 adult
								</p>
								<p className="mt-6 font-mono text-page font-semibold tabular-nums text-gray-900">
									£6.60{" "}
									<span className="font-mono text-meta font-normal text-gray-600">
										/ month
									</span>
								</p>
								<p className="font-mono text-meta text-gray-600">
									(£79.20 / annual)
								</p>
								<div className="mt-6 flex flex-col gap-3">
									<Button primary href="/join/payment-method">
										Buy for myself
									</Button>
									<Button>Buy as a gift</Button>
								</div>
							</div>
						</WireframeSection>

						<p className="mt-6 font-mono text-meta text-gray-500">
							Wireframe simplification. Adult plan only. Real page also shows
							Senior, Young, Joint, Family, Life.
						</p>
					</div>
				</Container>
			</div>
		</ScopePage>
	);
}

export default function JoinLandingPage() {
	return (
		<Suspense>
			<JoinLandingContent />
		</Suspense>
	);
}
