"use client";

import { Suspense } from "react";
import { AddressBlock, ConsentsBlock } from "@/components/checkout/AddressStep";
import { Button, CheckoutProgress } from "@/components/checkout/FormPrimitives";
import { DONATE_STEPS } from "@/components/checkout/steps";
import { Container, WireframeSection } from "@/components/wireframe";
import { t } from "@/lib/strings";
import { ScopePage } from "@/providers/ScopeProvider";

function DonateAddressContent() {
	return (
		<ScopePage id="donate/general/address">
			<div className="min-h-screen bg-white">
				<WireframeSection
					label="Progress"
					className="border-b border-gray-300 py-6"
				>
					<Container>
						<CheckoutProgress steps={DONATE_STEPS} current={2} />
					</Container>
				</WireframeSection>

				<Container size="md">
					<div className="py-10">
						<h1 className="font-mono text-page font-semibold leading-[1.15] tracking-tight">
							Your address
						</h1>

						<AddressBlock />
						<ConsentsBlock />

						<div className="mt-10 flex items-center justify-between">
							<Button href="/donate/general/your-details">
								{t("checkout.back")}
							</Button>
							<Button primary href="/donate/general/payment">
								{t("checkout.continue")}
							</Button>
						</div>
					</div>
				</Container>
			</div>
		</ScopePage>
	);
}

export default function DonateAddressPage() {
	return (
		<Suspense>
			<DonateAddressContent />
		</Suspense>
	);
}
