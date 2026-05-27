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
	// ── Example page ───────────────────────────────────────────────────
	"example/Hero": { mvp: true, issueUrl: issue("EX-1") },
	"example/Key stats": { mvp: true, issueUrl: issue("EX-2") },
	"example/Features": {
		mvp: true,
		note: "Content TBD",
		issueUrl: issue("EX-3"),
	},
	"example/Related links": { mvp: true, issueUrl: issue("EX-4") },
	"example/Contact form": {
		mvp: false,
		note: "Form integration TBD",
		issueUrl: issue("EX-5"),
	},

	// ── Content page ───────────────────────────────────────────────────
	"content-page/Page header": { mvp: true, issueUrl: issue("CP-1") },
	"content-page/Body": { mvp: true, issueUrl: issue("CP-2") },
	"content-page/Sidebar": {
		mvp: false,
		note: "Related content feed TBD",
		issueUrl: issue("CP-3"),
	},

	// ── Accessibility statement ────────────────────────────────────────
	"accessibility-statement/Statement": { mvp: true, issueUrl: issue("AS-1") },
	"accessibility-statement/Features": { mvp: true, issueUrl: issue("AS-2") },
	"accessibility-statement/Known gaps": { mvp: true, issueUrl: issue("AS-3") },
	"accessibility-statement/Feedback": { mvp: true, issueUrl: issue("AS-4") },
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
	return Object.entries(scope).some(
		([key, entry]) => key.startsWith(prefix) && entry.mvp,
	);
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
		const slash = key.indexOf("/");
		return {
			pageId: slash >= 0 ? key.slice(0, slash) : key,
			label: slash >= 0 ? key.slice(slash + 1) : "",
			key,
			...entry,
		};
	});
}
