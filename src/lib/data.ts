/**
 * Central wireframe data layer.
 *
 * All wireframe metadata lives here: the page registry, review statuses,
 * and navigation structure. The index, top bar, footer, and scope system
 * all derive from this file.
 *
 * To add a new wireframe:
 * 1. Add an entry to `pages` below
 * 2. Add scope entries to `scope.ts`
 * 3. Create `app/(wireframes)/<id>/page.tsx`
 */

// ── Review status ────────────────────────────────────────────────────

export type ReviewStatus = "wip" | "review" | "with-client" | "approved";

export const STATUS_LABELS: Record<ReviewStatus, string> = {
	wip: "WIP",
	review: "Review",
	"with-client": "With client",
	approved: "Approved",
};

export const STATUS_STYLES: Record<ReviewStatus, string> = {
	wip: "border-gray-300 text-gray-400",
	review: "border-amber-400 text-amber-600",
	"with-client": "border-blue-400 text-blue-600",
	approved: "border-green-400 text-green-600",
};

// ── Page registry ────────────────────────────────────────────────────

export interface WireframePage {
	id: string;
	title: string;
	description: string;
	status: ReviewStatus;
}

export const pages: WireframePage[] = [
	{
		id: "join",
		title: "/join",
		description: "Plan + gift picker. Simplified to Adult plan only.",
		status: "review",
	},
	{
		id: "join/payment-method",
		title: "/join/payment-method",
		description: "Annual card, Annual DD, Monthly DD.",
		status: "review",
	},
	{
		id: "join/your-details",
		title: "/join/your-details",
		description: "Your details + interests panel (new).",
		status: "review",
	},
	{
		id: "join/address",
		title: "/join/address",
		description: "Address, consents, T&Cs.",
		status: "review",
	},
	{
		id: "join/payment",
		title: "/join/payment",
		description: "Card or Direct Debit, Gift Aid.",
		status: "review",
	},
	{
		id: "join/thank-you",
		title: "/join/thank-you",
		description: "Order confirmation and next steps.",
		status: "review",
	},
	{
		id: "donate/general/amount",
		title: "/donate/general/amount",
		description: "Amount picker and frequency.",
		status: "review",
	},
	{
		id: "donate/general/your-details",
		title: "/donate/general/your-details",
		description:
			"Your details + optional My Trust account creation + interests panel (new).",
		status: "review",
	},
	{
		id: "donate/general/address",
		title: "/donate/general/address",
		description: "Address and consents.",
		status: "review",
	},
	{
		id: "donate/general/payment",
		title: "/donate/general/payment",
		description: "Card or Direct Debit.",
		status: "review",
	},
	{
		id: "sign-up",
		title: "/sign-up",
		description:
			"Standalone My Trust account signup with interests panel (current state).",
		status: "review",
	},
	{
		id: "feature-status",
		title: "Feature Status",
		description:
			"Cross-page MVP / post-MVP feature inventory derived from scope annotations",
		status: "wip",
	},
	{
		id: "sitemap",
		title: "Site Map",
		description:
			"Information architecture, page hierarchy and navigation structure",
		status: "wip",
	},
];

// ── Navigation tree ──────────────────────────────────────────────────

export interface NavNode {
	label: string;
	href: string;
	children?: NavNode[];
}

export const navigation: NavNode[] = [
	{ label: "Home", href: "/" },
	{
		label: "Checkout flows",
		href: "",
		children: [
			{ label: "/join", href: "/join" },
			{ label: "/join/payment-method", href: "/join/payment-method" },
			{ label: "/join/your-details", href: "/join/your-details" },
			{ label: "/join/address", href: "/join/address" },
			{ label: "/join/payment", href: "/join/payment" },
			{
				label: "/donate/general/amount",
				href: "/donate/general/amount",
			},
			{
				label: "/donate/general/your-details",
				href: "/donate/general/your-details",
			},
			{
				label: "/donate/general/address",
				href: "/donate/general/address",
			},
			{
				label: "/donate/general/payment",
				href: "/donate/general/payment",
			},
			{ label: "/sign-up", href: "/sign-up" },
		],
	},
	{ label: "Feature Status", href: "/feature-status" },
	{ label: "Site Map", href: "/sitemap" },
];

// ── Footer link groups ───────────────────────────────────────────────

export interface FooterGroup {
	heading: string;
	links: { label: string; href: string }[];
}

export const footerGroups: FooterGroup[] = [
	{
		heading: "Pages",
		links: pages.map((p) => ({ label: p.title, href: `/${p.id}` })),
	},
];
