"use client";

import { Suspense } from "react";
import { Button, CheckoutProgress } from "@/components/checkout/FormPrimitives";
import { JOIN_STEPS } from "@/components/checkout/steps";
import { Container, WireframeSection } from "@/components/wireframe";
import { t } from "@/lib/strings";
import { ScopePage } from "@/providers/ScopeProvider";

type Option = {
	key: string;
	title: string;
	method: string;
	price: string;
	cadence: string;
};

const OPTIONS: Option[] = [
	{
		key: "monthly-dd",
		title: "Monthly",
		method: "Direct Debit *",
		price: "£6.60",
		cadence: "per month",
	},
	{
		key: "annual-dd",
		title: "Annual",
		method: "Direct Debit *",
		price: "£79.20",
		cadence: "per year",
	},
	{
		key: "annual-card",
		title: "One year",
		method: "Credit or debit card",
		price: "£79.20",
		cadence: "",
	},
];

function OptionCard({ opt, selected }: { opt: Option; selected?: boolean }) {
	return (
		<div className="flex flex-col gap-6 border border-gray-300 bg-white p-6">
			<div>
				<h3 className="font-mono text-card font-medium">{opt.title}</h3>
				<p className="font-mono text-body text-gray-700">{opt.method}</p>
			</div>
			<div>
				<p className="font-mono text-section font-semibold tabular-nums">
					{opt.price}
				</p>
				{opt.cadence ? (
					<p className="font-mono text-label uppercase tracking-[0.08em] text-gray-500">
						{opt.cadence}
					</p>
				) : null}
			</div>
			<button
				type="button"
				className={`mt-auto border px-4 py-2 font-mono text-meta uppercase tracking-[0.08em] ${
					selected
						? "border-gray-400 border-gray-400"
						: "border-gray-400 bg-white border-gray-400 hover:border-gray-400"
				}`}
			>
				Select{selected ? " ✓" : ""}
			</button>
		</div>
	);
}

function JoinPaymentMethodContent() {
	return (
		<ScopePage id="join/payment-method">
			<div className="min-h-screen bg-white">
				<WireframeSection
					label="Progress"
					className="border-b border-gray-300 py-6"
				>
					<Container>
						<CheckoutProgress steps={JOIN_STEPS} current={0} />
					</Container>
				</WireframeSection>

				<Container>
					<div className="py-10">
						<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
							<WireframeSection label="Purchasing summary">
								<h2 className="font-mono text-section font-semibold">
									You are purchasing:
								</h2>
								<p className="mt-4 font-mono text-body text-gray-700">
									Membership
								</p>
								<p className="font-mono text-card font-semibold">Adult</p>
								<p className="font-mono text-meta text-gray-600">1 adult</p>
								<p className="mt-6 font-mono text-body text-gray-700">
									All memberships include:
								</p>
								<ul className="mt-2 list-disc pl-5 font-mono text-body text-gray-700">
									<li>Free access to all of our places</li>
									<li>Free parking at our Trust-owned car parks</li>
								</ul>
							</WireframeSection>

							<WireframeSection
								label="Gift toggle"
								className="border border-gray-200 bg-gray-50 p-6"
							>
								<h2 className="font-mono text-card font-semibold">
									ⓘ Do you want to buy a gift membership?
								</h2>
								<p className="mt-3 font-mono text-body font-medium text-gray-900">
									You're buying this membership to use yourself.
								</p>
								<p className="mt-2 font-mono text-meta text-gray-700">
									If you intended like to buy a membership for someone else to
									enjoy, please select the button below.
								</p>
								<div className="mt-4">
									<button
										type="button"
										className="border border-gray-800 bg-white px-5 py-2 font-mono text-meta uppercase tracking-[0.08em] text-gray-900 hover:bg-gray-100"
									>
										Purchase as gift
									</button>
								</div>
							</WireframeSection>
						</div>

						<hr className="my-12 border-gray-200" />

						<WireframeSection label="Options">
							<h2 className="font-mono text-section font-semibold">
								How would you like to pay?
							</h2>
							<div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
								{OPTIONS.map((o) => (
									<OptionCard
										key={o.key}
										opt={o}
										selected={o.key === "annual-dd"}
									/>
								))}
							</div>
							<p className="mt-6 max-w-prose font-mono text-meta text-gray-600">
								* Direct Debit can only be set up with a UK based bank account.
								Monthly Direct Debit prices are per month for 12 instalments.
							</p>
							<p className="mt-4 max-w-prose font-mono text-meta text-gray-700">
								You can view the membership status in your My Trust account once
								you have purchased this membership.
							</p>
						</WireframeSection>

						<div className="mt-12 flex items-center justify-between">
							<Button href="/join">{t("checkout.back")}</Button>
							<Button primary href="/join/your-details">
								Your details →
							</Button>
						</div>
					</div>
				</Container>
			</div>
		</ScopePage>
	);
}

export default function JoinPaymentMethodPage() {
	return (
		<Suspense>
			<JoinPaymentMethodContent />
		</Suspense>
	);
}
