"use client";

import { Suspense } from "react";
import {
	Button,
	CheckoutProgress,
	Field,
	Input,
	OrderSummary,
} from "@/components/checkout/FormPrimitives";
import { DONATE_STEPS } from "@/components/checkout/steps";
import { Container, WireframeSection } from "@/components/wireframe";
import { t } from "@/lib/strings";
import { ScopePage } from "@/providers/ScopeProvider";

function DonatePaymentContent() {
	return (
		<ScopePage id="donate/general/payment">
			<div className="min-h-screen bg-white">
				<WireframeSection
					label="Progress"
					className="border-b border-gray-300 py-6"
				>
					<Container>
						<CheckoutProgress steps={DONATE_STEPS} current={3} />
					</Container>
				</WireframeSection>

				<Container size="md">
					<div className="py-10">
						<h1 className="font-mono text-page font-semibold leading-[1.15] tracking-tight">
							{t("donate.pay.heading")}
						</h1>

						<div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
							<div>
								<WireframeSection
									label="Payment fields"
									className="border border-gray-300 p-6"
								>
									<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
										<Field
											label={t("join.pay.cardNumber")}
											required
											className="sm:col-span-2"
										>
											<Input placeholder="•••• •••• •••• ••••" />
										</Field>
										<Field label={t("join.pay.expiry")} required>
											<Input placeholder="MM / YY" />
										</Field>
										<Field label={t("join.pay.cvc")} required>
											<Input placeholder="123" />
										</Field>
										<Field
											label={t("join.pay.nameOnCard")}
											required
											className="sm:col-span-2"
										>
											<Input />
										</Field>
									</div>
								</WireframeSection>
							</div>
							<div>
								<WireframeSection label="Order summary">
									<OrderSummary
										rows={[{ label: "Donation (one-off)", value: "£25.00" }]}
										total="£25.00"
									/>
								</WireframeSection>
							</div>
						</div>

						<div className="mt-10 flex items-center justify-between">
							<Button href="/donate/general/address">
								{t("checkout.back")}
							</Button>
							<Button primary href="/">
								Pay £25.00
							</Button>
						</div>
					</div>
				</Container>
			</div>
		</ScopePage>
	);
}

export default function DonatePaymentPage() {
	return (
		<Suspense>
			<DonatePaymentContent />
		</Suspense>
	);
}
