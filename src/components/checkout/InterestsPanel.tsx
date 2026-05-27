import { t } from "@/lib/strings";
import { Checkbox } from "./FormPrimitives";

const INTERESTS = [
	"interests.item1",
	"interests.item2",
	"interests.item3",
	"interests.item4",
	"interests.item5",
	"interests.item6",
	"interests.item7",
	"interests.item8",
	"interests.item9",
];

export function InterestsPanel({
	introKey = "interests.intro",
	preselected = [],
	disabled,
}: {
	introKey?: string;
	preselected?: number[];
	disabled?: boolean;
}) {
	return (
		<div
			className={`flex flex-col gap-4 ${disabled ? "pointer-events-none opacity-40" : ""}`}
		>
			<div>
				<h3 className="font-mono text-card font-medium">
					{t("interests.optional")}
				</h3>
				<p className="mt-1 font-mono text-meta text-gray-600">{t(introKey)}</p>
			</div>
			<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
				{INTERESTS.map((key, i) => (
					<Checkbox
						key={key}
						label={t(key)}
						checked={preselected.includes(i)}
					/>
				))}
			</div>
			{disabled ? (
				<p className="border border-dashed border-gray-300 px-3 py-2 font-mono text-label uppercase tracking-[0.08em] text-gray-500">
					{t("interests.gatedHint")}
				</p>
			) : null}
		</div>
	);
}

export function InterestsAlreadySetNotice() {
	return (
		<div className="border border-gray-200 bg-gray-50 px-4 py-3 font-mono text-meta text-gray-600">
			{t("interests.alreadySetNotice")}
		</div>
	);
}
