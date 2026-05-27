"use client";

import { Suspense } from "react";
import { Button, CheckoutProgress } from "@/components/checkout/FormPrimitives";
import { DONATE_STEPS } from "@/components/checkout/steps";
import {
	Container,
	ImagePlaceholder,
	WireframeSection,
} from "@/components/wireframe";
import { ScopePage } from "@/providers/ScopeProvider";

function FreqChip({ label, selected }: { label: string; selected?: boolean }) {
	return (
		<button
			type="button"
			className={`flex items-center justify-between gap-3 border px-5 py-3 font-mono text-meta uppercase tracking-[0.08em] ${
				selected
					? "border-gray-400 border-gray-400"
					: "border-gray-400 bg-white border-gray-400"
			}`}
		>
			<span>{label}</span>
			{selected ? <span>✓</span> : null}
		</button>
	);
}

function AmountBox({ value, selected }: { value: string; selected?: boolean }) {
	return (
		<button
			type="button"
			className={`flex items-center justify-between border px-5 py-3 font-mono text-body ${
				selected
					? "border-gray-400 border-gray-400"
					: "border-gray-400 bg-white text-gray-900"
			}`}
		>
			<span>{value}</span>
			{selected ? <span>✓</span> : null}
		</button>
	);
}

function DonateAmountContent() {
	return (
		<ScopePage id="donate/general/amount">
			<div className="min-h-screen bg-white">
				<WireframeSection
					label="Progress"
					className="border-b border-gray-300 py-6"
				>
					<Container>
						<CheckoutProgress steps={DONATE_STEPS} current={0} />
					</Container>
				</WireframeSection>

				<Container>
					<div className="py-10">
						<WireframeSection label="Heading">
							<h1 className="font-mono text-page font-semibold leading-[1.15] tracking-tight">
								Thank you for choosing to support our work
							</h1>
						</WireframeSection>

						<WireframeSection label="Amount" className="mt-8">
							<h2 className="font-mono text-section font-semibold">
								Choose a donation frequency and amount:
							</h2>

							<div className="mt-6 grid max-w-xl grid-cols-2 gap-4">
								<FreqChip label="Monthly *" selected />
								<FreqChip label="One-off" />
							</div>

							<div className="mt-4 grid max-w-xl grid-cols-3 gap-4">
								<AmountBox value="£5" />
								<AmountBox value="£15" selected />
								<AmountBox value="£30" />
							</div>

							<div className="mt-4 max-w-xl border border-gray-400 p-4">
								<div className="flex gap-4">
									<ImagePlaceholder
										aspect="1/1"
										label="[image]"
										className="w-24 shrink-0"
									/>
									<p className="font-mono text-body text-gray-800">
										£15 can help us protect the precious wildlife in our care -
										from bird counting to wildcat breeding programmes.
									</p>
								</div>
							</div>

							<div className="mt-4 max-w-xl">
								<button
									type="button"
									className="w-full border border-gray-400 bg-white px-5 py-3 font-mono text-meta uppercase tracking-[0.08em] text-gray-900"
								>
									Other amount
								</button>
							</div>

							<p className="mt-4 max-w-prose font-mono text-meta text-gray-600">
								* Monthly donations are set up as a direct debit, and can only
								be done with a UK-based bank account.
							</p>
						</WireframeSection>

						<div className="mt-12 flex items-center justify-between">
							<Button href="/">Back</Button>
							<Button primary href="/donate/general/your-details">
								Your details →
							</Button>
						</div>
					</div>
				</Container>
			</div>
		</ScopePage>
	);
}

export default function DonateAmountPage() {
	return (
		<Suspense>
			<DonateAmountContent />
		</Suspense>
	);
}
