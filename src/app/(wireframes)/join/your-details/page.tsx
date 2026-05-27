"use client";

import { Suspense } from "react";
import {
	Button,
	Checkbox,
	CheckoutProgress,
	DobInput,
	Field,
	Input,
	Select,
} from "@/components/checkout/FormPrimitives";
import { InterestsPanel } from "@/components/checkout/InterestsPanel";
import { JOIN_STEPS } from "@/components/checkout/steps";
import {
	Container,
	SectionLabel,
	usePageVariations,
	WireframeSection,
} from "@/components/wireframe";
import { t } from "@/lib/strings";
import { ScopePage } from "@/providers/ScopeProvider";

const VARIATIONS = [
	{ key: "guest", label: t("join.variation.guest") },
	{ key: "logged-in-empty", label: t("join.variation.loggedInEmpty") },
	{ key: "logged-in-set", label: t("join.variation.loggedInSet") },
] as const;

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

function JoinContent() {
	const variation = usePageVariations(VARIATIONS);
	const loggedIn = variation !== "guest";
	const interestsAlreadySet = variation === "logged-in-set";

	return (
		<ScopePage id="join/your-details">
			<div className="min-h-screen bg-white">
				<WireframeSection
					label="Progress"
					className="border-b border-gray-300 py-6"
				>
					<Container>
						<CheckoutProgress steps={JOIN_STEPS} current={1} />
					</Container>
				</WireframeSection>

				<Container>
					<div className="py-10">
						<div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">
							<div>
								<WireframeSection label="Your details">
									<h1 className="font-mono text-page font-semibold leading-[1.15] tracking-tight">
										Your details
									</h1>
									{loggedIn ? (
										<p className="mt-3 font-mono text-meta text-gray-600">
											{t("checkout.signedInAs")}{" "}
											<span className="text-gray-900">jane@example.com</span>{" "}
											<a className="underline" href="#x">
												{t("checkout.notYou")}
											</a>
										</p>
									) : (
										<>
											<p className="mt-4 font-mono text-body text-gray-700">
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
							</div>
							<div>
								<PurchasingPanel />
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
										value={loggedIn ? "Ms" : "Please select..."}
									/>
								</Field>
								<Field label="First name" required>
									<Input value={loggedIn ? "Jane" : ""} />
								</Field>
								<Field label="Last name" required>
									<Input value={loggedIn ? "Smith" : ""} />
								</Field>
								<Field label="Email address" required>
									<Input
										type="email"
										value={loggedIn ? "jane@example.com" : ""}
									/>
								</Field>
								<Field label="Confirm email address" required>
									<Input
										type="email"
										value={loggedIn ? "jane@example.com" : ""}
									/>
								</Field>
								<Field label="Phone number" required>
									<Input type="tel" value={loggedIn ? "07123 000000" : ""} />
								</Field>
								<Field
									label="Date of birth"
									required
									hint="We ask for this information to confirm that you are buying the most appropriate membership type."
								>
									<DobInput />
								</Field>
							</div>
						</WireframeSection>

						{!loggedIn ? (
							<>
								<hr className="my-10 border-gray-200" />
								<WireframeSection label="My Trust account">
									<h2 className="font-mono text-section font-semibold">
										Create a My Trust account
									</h2>
									<p className="mt-2 font-mono text-body text-gray-700">
										You can manage your information through your My Trust
										account.
									</p>
									<div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
										<div className="flex flex-col gap-3">
											<Field label="Password" required>
												<Input type="password" value="********" />
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
								</WireframeSection>
							</>
						) : null}

						{interestsAlreadySet ? null : (
							<>
								<hr className="my-10 border-gray-200" />
								<WireframeSection
									label="Interests panel"
									className="border-2 border-dashed border-gray-400 p-6"
								>
									<SectionLabel className="mb-3">New addition</SectionLabel>
									<InterestsPanel
										introKey={
											loggedIn ? "interests.introLoggedIn" : "interests.intro"
										}
									/>
								</WireframeSection>
							</>
						)}

						<hr className="my-10 border-gray-200" />

						<p className="max-w-prose font-mono text-meta text-gray-700">
							The National Trust for Scotland, as a data controller, is
							committed to protecting your personal data. We will process the
							personal data provided on this form for the purposes of creating
							your membership and supporting you as a member. We will retain
							your data for a period of 6 years from the date of the
							cancellation of your membership. To find out more, please view our{" "}
							<a className="underline" href="#x">
								privacy policy
							</a>
							.
						</p>

						<div className="mt-10 flex items-center justify-between">
							<Button href="/join/payment-method">Back</Button>
							<Button primary href="/join/address">
								Address →
							</Button>
						</div>
					</div>
				</Container>
			</div>
		</ScopePage>
	);
}

export default function JoinCheckoutPage() {
	return (
		<Suspense>
			<JoinContent />
		</Suspense>
	);
}
