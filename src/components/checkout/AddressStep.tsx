import {
	Checkbox,
	Field,
	Input,
	Select,
} from "@/components/checkout/FormPrimitives";
import { WireframeSection } from "@/components/wireframe";
import { t } from "@/lib/strings";

export function AddressBlock() {
	return (
		<WireframeSection
			label="Address"
			className="mt-10 border border-gray-300 p-6"
		>
			<Field label={t("address.lookup")} hint="Powered by Data-8 lookup.">
				<Input placeholder={t("address.lookupPlaceholder")} />
			</Field>
			<div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
				<Field label={t("address.line1")} required>
					<Input />
				</Field>
				<Field label={t("address.line2")} required>
					<Input />
				</Field>
				<Field label={t("address.town")} required>
					<Input />
				</Field>
				<Field label={t("address.county")} required={false}>
					<Input />
				</Field>
				<Field label={t("address.country")} required>
					<Select options={["United Kingdom", "Ireland", "Other"]} />
				</Field>
				<Field label={t("address.postcode")} required>
					<Input />
				</Field>
			</div>
		</WireframeSection>
	);
}

export function ConsentsBlock() {
	return (
		<WireframeSection
			label="Consents"
			className="mt-6 border border-gray-300 p-6"
		>
			<h2 className="font-mono text-section font-medium">
				{t("consents.heading")}
			</h2>
			<p className="mt-1 max-w-prose font-mono text-meta text-gray-600">
				{t("consents.intro")}
			</p>
			<div className="mt-4 flex flex-col gap-3">
				<Checkbox label={t("consents.email")} />
				<Checkbox label={t("consents.post")} />
				<Checkbox label={t("consents.sms")} />
				<Checkbox label={t("consents.phone")} />
			</div>
		</WireframeSection>
	);
}
