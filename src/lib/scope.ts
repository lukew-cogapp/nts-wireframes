/**
 * Centralised scope annotations for wireframe sections and components.
 *
 * Each entry maps a "pageId/label" key to its MVP status, optional notes,
 * and an optional issue tracker URL. WireframeSection and ScopeMark look
 * up their annotations automatically via the ScopePage context.
 */

export interface ScopeEntry {
	mvp: boolean;
	note?: string;
	issueUrl?: string;
}

/**
 * Which issue tracker this project uses. Drives the icon rendered next to
 * issue links and the `issue()` URL helper below. Change to `"jira"` if
 * you track work in Atlassian Jira.
 */
export type IssueTracker = "linear" | "jira";
export const issueTracker: IssueTracker = "linear";

/**
 * Helpers to build issue tracker URLs. Uncomment the one you use and
 * replace the placeholders. The exported `issue` symbol below drives
 * every `issueUrl` in this file.
 */
const linear = (id: string) => `https://linear.app/team/issue/${id}`;
// const jira = (id: string) => `https://yourorg.atlassian.net/browse/${id}`;

const issue = linear;

/**
 * Keys use the format "pageId/label" where:
 * - pageId matches the ScopePage id prop (usually the route segment)
 * - label matches the WireframeSection or ScopeMark label prop
 *
 * Example: "homepage/Hero" annotates <WireframeSection label="Hero">
 * inside <ScopePage id="homepage">.
 */
export const scope: Record<string, ScopeEntry> = {
	// ── Join step pages ────────────────────────────────────────────────
	"join/Plan": { mvp: true },
	"join/payment-method/Progress": { mvp: true },
	"join/payment-method/Purchasing summary": { mvp: true },
	"join/payment-method/Benefits": { mvp: true },
	"join/payment-method/Gift toggle": { mvp: true },
	"join/payment-method/Options": { mvp: true },
	"join/address/Progress": { mvp: true },
	"join/address/Address heading": { mvp: true },
	"join/address/Your address": { mvp: true },
	"join/address/Subscribe to emails": { mvp: true },
	"join/address/Terms": { mvp: true },
	"join/payment/Progress": { mvp: true },
	"join/payment/Payment fields": { mvp: true },
	"join/payment/Gift Aid": { mvp: true },
	"join/payment/Order summary": { mvp: true },
	"join/thank-you/Progress": { mvp: true },
	"join/thank-you/Order summary": { mvp: true },
	"join/thank-you/Next steps": { mvp: true },

	// ── Donate step pages ──────────────────────────────────────────────
	"donate/general/amount/Progress": { mvp: true },
	"donate/general/amount/Amount": { mvp: true },
	"donate/general/address/Progress": { mvp: true },
	"donate/general/address/Address": { mvp: true },
	"donate/general/address/Consents": { mvp: true },
	"donate/general/payment/Progress": { mvp: true },
	"donate/general/payment/Payment fields": { mvp: true },
	"donate/general/payment/Order summary": { mvp: true },

	// ── Join checkout ──────────────────────────────────────────────────
	"join/your-details/Progress": { mvp: true },
	"join/your-details/Your details": { mvp: true, issueUrl: issue("NTS-201") },
	"join/your-details/My Trust account": {
		mvp: true,
		note: "Password block. Guest only.",
		issueUrl: issue("NTS-202"),
	},
	"join/your-details/Interests panel": {
		mvp: true,
		note: "New block. Hidden when logged-in user already has interests set. Reuses _interests.twig.",
		issueUrl: issue("NTS-203"),
	},

	// ── Donate checkout ────────────────────────────────────────────────
	"donate/general/your-details/Progress": { mvp: true },
	"donate/general/your-details/Your details": {
		mvp: true,
		issueUrl: issue("NTS-211"),
	},
	"donate/general/your-details/My Trust account": {
		mvp: true,
		note: "Optional on donate. Marked (optional).",
		issueUrl: issue("NTS-212"),
	},
	"donate/general/your-details/Interests panel": {
		mvp: true,
		note: "Revealed once password entered, or shown standalone when logged in without interests. Skipped for guest-only donors per brief.",
		issueUrl: issue("NTS-213"),
	},

	// ── My Trust registration ──────────────────────────────────────────
	"sign-up/Account details": { mvp: true },
	"sign-up/Interests panel": {
		mvp: true,
		note: "Reference. Existing implementation. Join and Donate match this pattern.",
	},
	"sign-up/Consents": { mvp: true },
};

export function getAnnotation(
	pageId: string | undefined,
	label: string,
): ScopeEntry | undefined {
	if (!pageId) return undefined;
	return scope[`${pageId}/${label}`];
}

/** A page is MVP if it has at least one section marked mvp: true. */
export function isPageMvp(pageId: string): boolean {
	const prefix = `${pageId}/`;
	return Object.entries(scope).some(([key, entry]) => {
		if (!key.startsWith(prefix)) return false;
		const label = key.slice(prefix.length);
		if (label.includes("/")) return false;
		return entry.mvp;
	});
}

/** Flat scope row, derived from the keyed `scope` map. */
export interface ScopeRow extends ScopeEntry {
	pageId: string;
	label: string;
	key: string;
}

/** All scope entries as flat rows, parsing the `pageId/label` key. */
export function listScopeRows(): ScopeRow[] {
	return Object.entries(scope).map(([key, entry]) => {
		const slash = key.lastIndexOf("/");
		return {
			pageId: slash >= 0 ? key.slice(0, slash) : key,
			label: slash >= 0 ? key.slice(slash + 1) : "",
			key,
			...entry,
		};
	});
}
