"use client";

import { Suspense } from "react";
import {
	Button,
	Checkbox,
	CheckoutProgress,
	Field,
	Input,
} from "@/components/checkout/FormPrimitives";
import { JOIN_STEPS } from "@/components/checkout/steps";
import { Container, WireframeSection } from "@/components/wireframe";
import { ScopePage } from "@/providers/ScopeProvider";

function PurchasingPanel() {
	return (
		<aside className="border border-gray-200 bg-gray-50 p-6">
			<p className="font-mono text-body text-gray-700">Membership</p>
			<p className="font-mono text-card font-semibold">Adult</p>
			<p className="font-mono text-meta text-gray-600">1 adult</p>
			<p className="mt-4 font-mono text-meta text-gray-800">
				Direct Debit: <span className="font-semibold">£79.20 per year</span>
			</p>
		</aside>
	);
}

function JoinPaymentContent() {
	return (
		<ScopePage id="join/payment">
			<div className="min-h-screen bg-white">
				<WireframeSection
					label="Progress"
					className="border-b border-gray-300 py-6"
				>
					<Container>
						<CheckoutProgress steps={JOIN_STEPS} current={3} />
					</Container>
				</WireframeSection>

				<Container>
					<div className="py-10">
						<div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">
							<WireframeSection label="Payment fields">
								<h1 className="font-mono text-page font-semibold leading-[1.15] tracking-tight">
									Direct debit (annual)
								</h1>
								<p className="mt-4 max-w-prose font-mono text-body text-gray-700">
									In order to set up a Direct Debit instruction online, you must
									be the account holder of a personal UK bank or building
									society account. If you are not the account holder or only
									required signatory on your account, please stop this online
									donation.
								</p>

								<div className="mt-8 grid max-w-md grid-cols-1 gap-5">
									<Field label="Name(s) of account holder(s)" required>
										<Input />
									</Field>
									<Field
										label="Bank / Building Society Account number"
										required
									>
										<Input />
									</Field>
									<Field label="Sort code" required>
										<Input placeholder="XX-XX-XX" />
									</Field>
								</div>

								<div className="mt-6 flex flex-col gap-3">
									<Checkbox label="I have read and understand the Direct Debit Guarantee and Collection Dates." />
									<p className="ml-6">
										<a className="font-mono text-meta underline" href="#x">
											Direct Debit Guarantee and Collection Dates
										</a>
									</p>
									<Checkbox label="I am the account holder and the only required signatory on this account." />
								</div>
							</WireframeSection>
							<div>
								<PurchasingPanel />
							</div>
						</div>

						<hr className="my-10 border-gray-200" />

						<WireframeSection label="Gift Aid">
							<p className="font-mono text-section italic text-gray-900">
								giftaid it
							</p>
							<p className="mt-6 font-mono text-meta text-gray-600">
								Add{" "}
								<span className="font-mono text-section font-semibold text-gray-900">
									£19.80
								</span>{" "}
								Gift Aid
							</p>
							<p className="mt-4 max-w-prose font-mono text-body text-gray-700">
								We treat your membership as a donation. With Gift Aid we get an
								extra 25p for every £1 you give us at{" "}
								<span className="font-semibold">no extra cost</span> to you.
							</p>
							<div className="mt-4">
								<Checkbox label="Yes, add Gift Aid at no extra cost" />
							</div>
							<p className="mt-4 max-w-prose font-mono text-meta text-gray-600">
								I would like the National Trust for Scotland to reclaim the tax
								on any eligible donations or membership subscriptions that I
								have already made in the last four years or will make until
								further notice. I am a UK taxpayer and understand that if I pay
								less Income Tax and/or Capital Gains Tax than the amount of Gift
								Aid claimed on all my donations and membership subscriptions in
								that tax year it is my responsibility to pay any difference.
							</p>
						</WireframeSection>

						<div className="mt-10 flex items-center justify-between">
							<Button href="/join/address">Back</Button>
							<Button primary href="/join/thank-you">
								Complete order →
							</Button>
						</div>
					</div>
				</Container>
			</div>
		</ScopePage>
	);
}

export default function JoinPaymentPage() {
	return (
		<Suspense>
			<JoinPaymentContent />
		</Suspense>
	);
}
