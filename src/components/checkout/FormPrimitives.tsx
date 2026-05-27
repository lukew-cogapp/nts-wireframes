import type { ReactNode } from "react";

export function Field({
	label,
	required,
	children,
	hint,
	className,
}: {
	label: string;
	required?: boolean;
	children: ReactNode;
	hint?: ReactNode;
	className?: string;
}) {
	return (
		// biome-ignore lint/a11y/noLabelWithoutControl: nested input via children
		<label className={`flex flex-col gap-1 ${className ?? ""}`}>
			<span className="font-mono text-meta text-gray-700">
				{label}
				{required ? null : (
					<span className="ml-1 text-gray-400">(optional)</span>
				)}
			</span>
			{children}
			{hint ? (
				<span className="font-mono text-label text-gray-500">{hint}</span>
			) : null}
		</label>
	);
}

export function Input({
	value,
	placeholder,
	type = "text",
}: {
	value?: string;
	placeholder?: string;
	type?: string;
}) {
	return (
		<input
			readOnly
			type={type}
			defaultValue={value}
			placeholder={placeholder}
			className="border border-gray-300 bg-white px-3 py-2 font-mono text-body focus:border-gray-500 focus:outline-none"
		/>
	);
}

export function Select({
	value,
	options,
}: {
	value?: string;
	options: string[];
}) {
	return (
		<select
			defaultValue={value}
			className="border border-gray-300 bg-white px-3 py-2 font-mono text-body"
		>
			{options.map((o) => (
				<option key={o}>{o}</option>
			))}
		</select>
	);
}

export function DobInput() {
	return (
		<div className="flex gap-2">
			<Input placeholder="DD" />
			<Input placeholder="MM" />
			<Input placeholder="YYYY" />
		</div>
	);
}

export function Checkbox({
	label,
	checked,
}: {
	label: ReactNode;
	checked?: boolean;
}) {
	return (
		<label className="flex items-start gap-2">
			<input
				type="checkbox"
				defaultChecked={checked}
				className="mt-1 h-4 w-4 border-gray-400"
			/>
			<span className="font-mono text-body text-gray-800">{label}</span>
		</label>
	);
}

export function Button({
	children,
	primary,
	href,
}: {
	children: ReactNode;
	primary?: boolean;
	href?: string;
}) {
	const cls = `inline-block border px-5 py-2 text-center font-mono text-body ${
		primary
			? "border-gray-800 bg-gray-800 text-white hover:bg-gray-700"
			: "border-gray-400 bg-white text-gray-800 hover:bg-gray-50"
	}`;
	if (href) {
		return (
			<a href={href} className={cls}>
				{children}
			</a>
		);
	}
	return (
		<button
			type="button"
			className={`border px-5 py-2 font-mono text-body ${
				primary
					? "border-gray-800 bg-gray-800 text-white hover:bg-gray-700"
					: "border-gray-400 bg-white text-gray-800 hover:bg-gray-50"
			}`}
		>
			{children}
		</button>
	);
}

export function RadioCard({
	label,
	sub,
	price,
	checked,
	name,
}: {
	label: string;
	sub?: string;
	price?: string;
	checked?: boolean;
	name: string;
}) {
	return (
		<label
			className={`flex cursor-pointer items-start gap-3 border p-4 ${
				checked ? "border-gray-800 bg-gray-50" : "border-gray-300"
			}`}
		>
			<input
				type="radio"
				name={name}
				defaultChecked={checked}
				className="mt-1 h-4 w-4"
			/>
			<span className="flex-1">
				<span className="font-mono text-body font-medium text-gray-900">
					{label}
				</span>
				{sub ? (
					<span className="mt-1 block font-mono text-meta text-gray-600">
						{sub}
					</span>
				) : null}
			</span>
			{price ? (
				<span className="font-mono text-body tabular-nums text-gray-900">
					{price}
				</span>
			) : null}
		</label>
	);
}

export function AmountChip({
	value,
	checked,
}: {
	value: string;
	checked?: boolean;
}) {
	return (
		<label
			className={`flex cursor-pointer items-center justify-center border px-4 py-3 font-mono text-body ${
				checked
					? "border-gray-800 bg-gray-50 text-gray-900"
					: "border-gray-300 text-gray-700"
			}`}
		>
			<input
				type="radio"
				name="amount"
				defaultChecked={checked}
				className="sr-only"
			/>
			{value}
		</label>
	);
}

export function OrderSummary({
	rows,
	total,
}: {
	rows: { label: string; value: string }[];
	total: string;
}) {
	return (
		<div className="border border-gray-300 p-4">
			<h3 className="font-mono text-card font-medium">Order summary</h3>
			<dl className="mt-3 flex flex-col gap-2">
				{rows.map((r) => (
					<div
						key={r.label}
						className="flex justify-between font-mono text-meta"
					>
						<dt className="text-gray-600">{r.label}</dt>
						<dd className="tabular-nums text-gray-900">{r.value}</dd>
					</div>
				))}
			</dl>
			<div className="mt-3 flex justify-between border-t border-gray-200 pt-3 font-mono text-body font-medium">
				<span>Total</span>
				<span className="tabular-nums">{total}</span>
			</div>
		</div>
	);
}

export function CheckoutProgress({
	steps,
	current,
}: {
	steps: string[];
	current: number;
}) {
	return (
		<ol className="flex flex-wrap items-center gap-2 font-mono text-meta">
			{steps.map((s, i) => {
				const active = i === current;
				const done = i < current;
				return (
					<li key={s} className="flex items-center gap-2">
						<span
							className={`border px-2 py-0.5 ${
								active
									? "border-gray-800 text-gray-900"
									: done
										? "border-gray-300 text-gray-500"
										: "border-gray-200 text-gray-400"
							}`}
						>
							{i + 1}. {s}
						</span>
						{i < steps.length - 1 ? (
							<span className="text-gray-300">/</span>
						) : null}
					</li>
				);
			})}
		</ol>
	);
}
