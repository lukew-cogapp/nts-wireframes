"use client";

import { Suspense } from "react";
import {
	Button,
	Checkbox,
	CheckoutProgress,
	Field,
	Input,
	Select,
} from "@/components/checkout/FormPrimitives";
import { JOIN_STEPS } from "@/components/checkout/steps";
import { Container, WireframeSection } from "@/components/wireframe";
import { ScopePage } from "@/providers/ScopeProvider";

function PurchasingPanel() {
	return (
		<aside className="border border-gray-200 bg-gray-50 p-6">
			<h2 className="font-mono text-section font-semibold">
				You are purchasing:
			</h2>
			<div className="mt-4 border border-gray-200 bg-white p-4">
				<p className="font-mono text-body text-gray-700">Membership</p>
				<p className="font-mono text-card font-semibold">Adult</p>
				<p className="font-mono text-meta text-gray-600">1 adult</p>
				<p className="mt-4 font-mono text-meta text-gray-800">
					Direct Debit: <span className="font-semibold">£79.20 per year</span>
				</p>
			</div>
		</aside>
	);
}

function JoinAddressContent() {
	return (
		<ScopePage id="join/address">
			<div className="min-h-screen bg-white">
				<WireframeSection
					label="Progress"
					className="border-b border-gray-300 py-6"
				>
					<Container>
						<CheckoutProgress steps={JOIN_STEPS} current={2} />
					</Container>
				</WireframeSection>

				<Container>
					<div className="py-10">
						<div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">
							<WireframeSection label="Address heading">
								<h1 className="font-mono text-page font-semibold leading-[1.15] tracking-tight">
									Address
								</h1>
							</WireframeSection>
							<div>
								<PurchasingPanel />
							</div>
						</div>

						<hr className="my-10 border-gray-200" />

						<WireframeSection label="Your address">
							<h2 className="font-mono text-section font-semibold">
								Your address
							</h2>
							<div className="mt-6 grid max-w-md grid-cols-1 gap-5">
								<Field
									label="Search"
									required
									hint="Type a part of address or postcode to begin"
								>
									<div className="flex">
										<Input placeholder="Type an address or what3words" />
									</div>
								</Field>
								<Field
									label="Address line 1"
									required
									hint="Example: 221b Baker Street"
								>
									<Input />
								</Field>
								<Field
									label="Address line 2"
									required={false}
									hint="Example: Flat 2"
								>
									<Input />
								</Field>
								<Field label="Town" required>
									<Input />
								</Field>
								<Field label="Region / county / US state code" required={false}>
									<Input />
								</Field>
								<Field label="Country" required>
									<Select
										options={["United Kingdom", "Ireland", "Other"]}
										value="United Kingdom"
									/>
								</Field>
								<Field label="Postcode / zip" required>
									<Input />
								</Field>
							</div>

							<div className="mt-6 max-w-2xl border-l-4 border-gray-400 border-gray-400 p-4">
								<p className="font-mono text-meta">
									⚠ We will send essential membership information to this
									address. Please ensure the above information is correct before
									moving to the next step.
								</p>
							</div>
						</WireframeSection>

						<hr className="my-10 border-gray-200" />

						<WireframeSection label="Subscribe to emails">
							<h2 className="font-mono text-section font-semibold">
								Subscribe to emails
							</h2>
							<p className="mt-3 max-w-prose font-mono text-body text-gray-700">
								Sign up to our e-newsletter to stay up to date with news about
								our work, events and offers; receive ideas for places to visit;
								and hear about ways to support the Trust and get involved. We'd
								love to share with you how your support makes a difference to
								Scotland's special places.
							</p>
							<div className="mt-4">
								<Checkbox label="I'd like to receive emails" />
							</div>
							<p className="mt-3 max-w-prose font-mono text-meta text-gray-600">
								You can opt out of these communications at any time by using the
								Unsubscribe link in the emails you receive. If you want to
								change what we send you, either{" "}
								<a className="underline" href="#x">
									contact us
								</a>{" "}
								or edit your preferences in your{" "}
								<a className="underline" href="#x">
									My Trust
								</a>{" "}
								account.
							</p>
						</WireframeSection>

						<hr className="my-10 border-gray-200" />

						<WireframeSection label="Terms">
							<h2 className="font-mono text-section font-semibold">
								Terms and conditions
							</h2>
							<div className="mt-4">
								<Checkbox label="I accept the terms and conditions of membership" />
							</div>
							<p className="mt-3">
								<a className="font-mono text-meta underline" href="#x">
									Terms and conditions of membership
								</a>
							</p>
						</WireframeSection>

						<div className="mt-10 flex items-center justify-between">
							<Button href="/join/your-details">Back</Button>
							<Button primary href="/join/payment">
								Payment →
							</Button>
						</div>
					</div>
				</Container>
			</div>
		</ScopePage>
	);
}

export default function JoinAddressPage() {
	return (
		<Suspense>
			<JoinAddressContent />
		</Suspense>
	);
}
