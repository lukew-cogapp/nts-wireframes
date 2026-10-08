"use client";

import { Suspense } from "react";
import {
	Button,
	Field,
	Input,
	RadioCard,
	Select,
} from "@/components/checkout/FormPrimitives";
import {
	Breadcrumb,
	Container,
	ScopeMark,
	SectionLabel,
	usePageVariations,
	WireframeSection,
} from "@/components/wireframe";
import { ScopePage } from "@/providers/ScopeProvider";

const VARIATIONS = [
	{ key: "email-link", label: "From email link" },
	{ key: "blank", label: "Blank" },
	{ key: "signed-in", label: "Signed in" },
] as const;

const PREFILL = {
	title: "Mrs",
	firstName: "Jane",
	lastName: "Smith",
	email: "jane@example.com",
	house: "12",
	postcode: "EH2 4ET",
	address: "12 Charlotte Square, Edinburgh",
	contactId: "1234567",
};

function GiftAidContent() {
	const variation = usePageVariations(VARIATIONS);
	const prefilled = variation !== "blank";
	const signedIn = variation === "signed-in";
	const v = (value: string) => (prefilled ? value : undefined);

	return (
		<ScopePage id="gift-aid">
			<div className="min-h-screen bg-white">
				<WireframeSection
					label="Hero"
					className="border-b border-gray-300 py-10"
				>
					<Container size="md">
						<Breadcrumb
							items={[{ label: "Home", href: "/" }, { label: "Gift Aid" }]}
						/>
						<p className="mt-6 font-mono text-section italic text-gray-900">
							giftaid it
						</p>
						<h1 className="mt-4 font-mono text-page font-semibold leading-[1.15] tracking-tight">
							Confirm your Gift Aid declaration
						</h1>
						<p className="mt-4 max-w-prose font-mono text-body leading-[1.7] text-gray-700">
							[NTS to supply copy] Gift Aid lets us claim an extra 25p for every
							£1 you give, at no extra cost to you. We need you to confirm your
							choice so we can keep our records up to date.
						</p>
					</Container>
				</WireframeSection>

				<Container size="md">
					<div className="py-10">
						<WireframeSection label="Your details">
							<h2 className="font-mono text-section font-medium">
								Your details
							</h2>

							{signedIn ? (
								<p className="mt-3 font-mono text-meta text-gray-600">
									Signed in as{" "}
									<span className="text-gray-900">{PREFILL.email}</span>.{" "}
									<a className="underline" href="#x">
										Not you?
									</a>
								</p>
							) : prefilled ? (
								<div className="mt-3">
									<ScopeMark label="Prefill notice">
										<p className="border border-gray-300 bg-gray-50 p-4 font-mono text-meta text-gray-700">
											We've filled in the details we hold for you. Please check
											they're correct and update anything that has changed.
										</p>
									</ScopeMark>
								</div>
							) : (
								<p className="mt-3 font-mono text-body text-gray-700">
									Have a <span className="font-semibold">My Trust</span>{" "}
									account?{" "}
									<a className="underline" href="?variation=signed-in">
										Sign in
									</a>{" "}
									to fill in your details automatically.
								</p>
							)}

							<div className="mt-6 grid max-w-md grid-cols-1 gap-5">
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
										value={v(PREFILL.title)}
									/>
								</Field>
								<Field label="First name" required>
									<Input value={v(PREFILL.firstName)} />
								</Field>
								<Field label="Last name" required>
									<Input value={v(PREFILL.lastName)} />
								</Field>
								<Field label="Email address" required>
									<Input type="email" value={v(PREFILL.email)} />
								</Field>
								<ScopeMark label="Home address">
									<div className="grid grid-cols-1 gap-5">
										<Field
											label="House name or number"
											required
											hint="HMRC needs your home address, not a work or PO box address."
										>
											<Input value={v(PREFILL.house)} />
										</Field>
										<Field label="Postcode" required>
											<div className="flex gap-2">
												<Input value={v(PREFILL.postcode)} />
												<Button>Find address</Button>
											</div>
										</Field>
										{prefilled ? (
											<p className="font-mono text-meta text-gray-600">
												{PREFILL.address}
											</p>
										) : null}
									</div>
								</ScopeMark>
							</div>

							{prefilled ? (
								<div className="mt-6">
									<ScopeMark label="Contact reference">
										<p className="font-mono text-label uppercase tracking-[0.08em] text-gray-400">
											Hidden field: contactId={PREFILL.contactId}
										</p>
									</ScopeMark>
								</div>
							) : null}
						</WireframeSection>

						<hr className="my-10 border-gray-200" />

						<WireframeSection label="Declaration">
							<SectionLabel>Gift Aid declaration</SectionLabel>
							<h2 className="font-mono text-section font-medium">
								Can we claim Gift Aid on your donations and membership?
							</h2>
							<div className="mt-6 grid max-w-xl grid-cols-1 gap-3">
								<RadioCard
									name="gift-aid"
									label="Yes, I want to Gift Aid my donations and membership"
									sub="Past four years and all future payments until I tell you otherwise."
								/>
								<RadioCard
									name="gift-aid"
									label="No, I do not want to Gift Aid"
									sub="We will stop claiming Gift Aid on your payments."
								/>
							</div>
							<p className="mt-6 max-w-prose font-mono text-meta leading-[1.7] text-gray-600">
								I would like the National Trust for Scotland to reclaim the tax
								on any eligible donations or membership subscriptions that I
								have already made in the last four years or will make until
								further notice. I am a UK taxpayer and understand that if I pay
								less Income Tax and/or Capital Gains Tax than the amount of Gift
								Aid claimed on all my donations and membership subscriptions in
								that tax year it is my responsibility to pay any difference.
							</p>
							<p className="mt-4 max-w-prose font-mono text-meta text-gray-600">
								Please tell us if you change your name or address, or no longer
								pay enough tax.{" "}
								<a className="underline" href="#x">
									Read more about Gift Aid
								</a>
							</p>
						</WireframeSection>

						<div className="mt-10 flex justify-end">
							<Button primary href="/gift-aid/thank-you">
								Submit declaration
							</Button>
						</div>
					</div>
				</Container>
			</div>
		</ScopePage>
	);
}

export default function GiftAidPage() {
	return (
		<Suspense>
			<GiftAidContent />
		</Suspense>
	);
}
