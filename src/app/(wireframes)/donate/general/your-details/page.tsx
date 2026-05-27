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
import { InterestsPanel } from "@/components/checkout/InterestsPanel";
import { DONATE_STEPS } from "@/components/checkout/steps";
import {
	Container,
	SectionLabel,
	usePageVariations,
	WireframeSection,
} from "@/components/wireframe";
import { ScopePage } from "@/providers/ScopeProvider";

const VARIATIONS = [
	{ key: "guest", label: "Guest (no My Trust)" },
	{ key: "logged-in-empty", label: "Logged in, no interests" },
	{ key: "logged-in-set", label: "Logged in, interests set" },
] as const;

function DonatingPanel() {
	return (
		<aside className="border border-gray-200 bg-gray-50 p-6">
			<h2 className="font-mono text-section font-semibold">
				You are donating:
			</h2>
			<div className="mt-4 border border-gray-200 bg-white p-4">
				<p className="font-mono text-body text-gray-700">Recurring donation</p>
				<p className="font-mono text-card font-semibold">£15.00 donation</p>
				<p className="mt-2 font-mono text-meta text-gray-700">Direct Debit</p>
			</div>
		</aside>
	);
}

function DonateContent() {
	const variation = usePageVariations(VARIATIONS);
	const loggedIn = variation.startsWith("logged-in");
	const interestsAlreadySet = variation === "logged-in-set";

	return (
		<ScopePage id="donate/general/your-details">
			<div className="min-h-screen bg-white">
				<WireframeSection
					label="Progress"
					className="border-b border-gray-300 py-6"
				>
					<Container>
						<CheckoutProgress steps={DONATE_STEPS} current={1} />
					</Container>
				</WireframeSection>

				<Container>
					<div className="py-10">
						<div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">
							<WireframeSection label="Your details">
								<h1 className="font-mono text-page font-semibold leading-[1.15] tracking-tight">
									Your details
								</h1>
								{loggedIn ? (
									<p className="mt-4 max-w-prose font-mono text-body text-gray-700">
										Your My Trust account will be updated with the information
										you enter here.
									</p>
								) : (
									<>
										<p className="mt-4 max-w-prose font-mono text-body text-gray-700">
											If you already have a{" "}
											<span className="font-semibold">My Trust</span> account,
											please sign in so we can retrieve your details.
										</p>
										<div className="mt-4">
											<Button>Sign in</Button>
										</div>
									</>
								)}
							</WireframeSection>
							<div>
								<DonatingPanel />
							</div>
						</div>

						<hr className="my-10 border-gray-200" />

						<WireframeSection label="Personal details">
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
										value={loggedIn ? "Mr" : "Please select..."}
									/>
								</Field>
								<Field label="First name" required>
									<Input value={loggedIn ? "Luke" : ""} />
								</Field>
								<Field label="Last name" required>
									<Input value={loggedIn ? "Watson-Davies" : ""} />
								</Field>
								<Field
									label="Email address"
									required
									hint={
										loggedIn
											? "Your email address is the same as your My Trust login."
											: undefined
									}
								>
									{loggedIn ? (
										<input
											readOnly
											defaultValue="lukew@cogapp.com"
											className="border border-gray-300 bg-gray-200 px-3 py-2 font-mono text-body text-gray-700"
										/>
									) : (
										<Input type="email" />
									)}
								</Field>
								{!loggedIn ? (
									<Field label="Confirm email address" required>
										<Input type="email" />
									</Field>
								) : null}
							</div>
						</WireframeSection>

						{!loggedIn ? (
							<>
								<hr className="my-10 border-gray-200" />
								<WireframeSection label="My Trust account">
									<h2 className="font-mono text-section font-semibold">
										Create a My Trust account{" "}
										<span className="font-normal">(optional)</span>
									</h2>
									<p className="mt-2 max-w-prose font-mono text-body text-gray-700">
										You can create a My Trust account by entering a password
										below.
									</p>
									<p className="mt-2 max-w-prose font-mono text-body text-gray-700">
										You can manage your information through your My Trust
										account.
									</p>
									<div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
										<div className="flex flex-col gap-3">
											<Field label="Password">
												<Input type="password" />
											</Field>
											<Checkbox label="Show password" />
										</div>
										<div>
											<p className="font-mono text-meta text-gray-700">
												Passwords must have
											</p>
											<ul className="mt-2 list-disc pl-5 font-mono text-meta text-gray-600">
												<li>at least 8 characters</li>
												<li>letters and numbers</li>
												<li>lower and uppercase characters</li>
											</ul>
										</div>
									</div>
									<p className="mt-4 max-w-prose font-mono text-label uppercase tracking-[0.08em] text-gray-500">
										Interests collection: only when user has a My Trust account
										and is signed in. Guests without My Trust will not see
										interests here (per latest product decision).
									</p>
								</WireframeSection>
							</>
						) : interestsAlreadySet ? null : (
							<>
								<hr className="my-10 border-gray-200" />
								<WireframeSection
									label="Interests panel"
									className="border-2 border-dashed border-gray-400 p-6"
								>
									<SectionLabel className="mb-3">New addition</SectionLabel>
									<InterestsPanel introKey="interests.introDonate" />
								</WireframeSection>
							</>
						)}

						<hr className="my-10 border-gray-200" />

						<p className="max-w-prose font-mono text-meta text-gray-700">
							The National Trust for Scotland, as a data controller, is
							committed to protecting your personal data. We will process the
							personal data provided on this form for the purposes of
							administering and retaining a record of your donation. We will
							retain your data for a period of 6 years from the date of
							donation. To find out more, please view our{" "}
							<a className="underline" href="#x">
								privacy policy
							</a>
							.
						</p>

						<div className="mt-10 flex items-center justify-between">
							<Button href="/donate/general/amount">Back</Button>
							<Button primary href="/donate/general/address">
								Address →
							</Button>
						</div>
					</div>
				</Container>
			</div>
		</ScopePage>
	);
}

export default function DonateCheckoutPage() {
	return (
		<Suspense>
			<DonateContent />
		</Suspense>
	);
}
