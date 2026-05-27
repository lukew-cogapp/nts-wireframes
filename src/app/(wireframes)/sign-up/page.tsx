"use client";

import { Suspense } from "react";
import {
	Button,
	Checkbox,
	Field,
	Input,
	Select,
} from "@/components/checkout/FormPrimitives";
import { InterestsPanel } from "@/components/checkout/InterestsPanel";
import {
	Breadcrumb,
	Container,
	WireframeSection,
} from "@/components/wireframe";
import { ScopePage } from "@/providers/ScopeProvider";

function BenefitTile({ label }: { label: string }) {
	return (
		<div className="flex flex-col items-center text-center">
			<div className="h-14 w-14 border border-gray-300 bg-gray-100" />
			<p className="mt-3 max-w-[10rem] font-mono text-meta text-gray-800">
				{label}
			</p>
		</div>
	);
}

function MyTrustSignUpContent() {
	return (
		<ScopePage id="sign-up">
			<div className="min-h-screen bg-white">
				<WireframeSection label="Hero" className="border-gray-400 px-6 py-10">
					<Container>
						<Breadcrumb
							items={[
								{ label: "Home", href: "/" },
								{ label: "My Trust Account" },
							]}
						/>
						<div className="mt-6 text-center">
							<p className="font-mono text-body">Sign up for a</p>
							<h1 className="mt-2 font-mono text-page font-semibold uppercase tracking-tight">
								My Trust Account
							</h1>
							<p className="mx-auto mt-4 max-w-prose font-mono text-body">
								Get the most from the National Trust for Scotland by registering
								and personalising your online account with us.
							</p>
						</div>
					</Container>
				</WireframeSection>

				<Container>
					<div className="grid grid-cols-1 gap-12 py-12 lg:grid-cols-2">
						<div>
							<WireframeSection label="Account details">
								<div className="grid max-w-md grid-cols-1 gap-5">
									<Field label="Title" required>
										<Select
											options={[
												"Please select...",
												"Mr",
												"Mrs",
												"Ms",
												"Miss",
												"Dr",
											]}
										/>
									</Field>
									<Field label="First name" required>
										<Input />
									</Field>
									<Field label="Last name" required>
										<Input />
									</Field>
									<Field label="Email address" required>
										<Input type="email" />
									</Field>
									<Field label="Re-enter email address" required>
										<Input type="email" />
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
									<Field label="Create password" required>
										<Input type="password" />
									</Field>
									<Field label="Confirm password" required>
										<Input type="password" />
									</Field>
								</div>
							</WireframeSection>

							<WireframeSection
								label="Interests panel"
								className="mt-8 max-w-md"
							>
								<InterestsPanel introKey="interests.introShort" />
							</WireframeSection>

							<hr className="my-8 max-w-md border-gray-200" />

							<WireframeSection
								label="Subscribe to emails"
								className="max-w-md"
							>
								<h3 className="font-mono text-card font-semibold">
									Subscribe to emails
								</h3>
								<p className="mt-3 font-mono text-body text-gray-700">
									Sign up to our e-newsletter to stay up to date with news about
									our work, events and offers; receive ideas for places to
									visit; and hear about ways to support the Trust and get
									involved. We'd love to share with you how your support makes a
									difference to Scotland's special places.
								</p>
								<div className="mt-4">
									<Checkbox label="I'd like to receive emails" />
								</div>
								<p className="mt-3 font-mono text-meta text-gray-600">
									You can opt out of these communications at any time by using
									the Unsubscribe link in the emails you receive. If you want to
									change what we send you, either{" "}
									<a className="underline" href="#x">
										contact us
									</a>{" "}
									or edit your preferences in your My Trust account.
								</p>
							</WireframeSection>

							<p className="mt-8 max-w-md font-mono text-meta text-gray-700">
								The National Trust for Scotland, as a data controller, is
								committed to protecting your personal data. We will process the
								personal data provided on this form for the purposes of creating
								your My Trust account. We will retain your data for as long as
								the My Trust account is active. If you wish to cancel your
								account, please{" "}
								<a className="underline" href="#x">
									contact us
								</a>
								. To find out more, please view our{" "}
								<a className="underline" href="#x">
									privacy policy
								</a>
								.
							</p>

							<div className="mt-8">
								<Button primary>Submit →</Button>
							</div>

							<p className="mt-4 font-mono text-meta text-gray-700">
								Already have a My Trust account?{" "}
								<a className="underline" href="#x">
									Log in
								</a>
							</p>
						</div>

						<div className="flex flex-col gap-10">
							<WireframeSection label="Account holder benefits">
								<h2 className="font-mono text-section font-semibold">
									Become a My Trust account holder and you can:
								</h2>
								<div className="mt-8 grid grid-cols-3 gap-6">
									<BenefitTile label="Receive and manage monthly newsletters" />
									<BenefitTile label="Manage your profile" />
									<BenefitTile label="Select your interests" />
								</div>
							</WireframeSection>

							<hr className="border-gray-200" />

							<WireframeSection label="Member benefits">
								<h2 className="font-mono text-section font-semibold">
									As a National Trust for Scotland member you can:
								</h2>
								<div className="mt-8 grid grid-cols-3 gap-6">
									<BenefitTile label="Manage your memberships" />
									<BenefitTile label="Download a digital membership card" />
									<BenefitTile label="Download a parking pass" />
									<BenefitTile label="Access exclusive content" />
								</div>
							</WireframeSection>
						</div>
					</div>
				</Container>
			</div>
		</ScopePage>
	);
}

export default function MyTrustSignUpPage() {
	return (
		<Suspense>
			<MyTrustSignUpContent />
		</Suspense>
	);
}
