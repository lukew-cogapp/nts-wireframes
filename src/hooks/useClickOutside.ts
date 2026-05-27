"use client";

import { type RefObject, useEffect, useRef } from "react";

/**
 * Dismiss popovers, drawers, or floating UI on outside click + Escape.
 * Pass a ref to the root element and a callback to fire on dismiss.
 * Pass `active` (default true) to gate listener attachment, e.g. only when open.
 *
 * The callback is held in a ref, so passing an inline arrow function is fine.
 */
export function useClickOutside(
	ref: RefObject<HTMLElement | null>,
	onDismiss: () => void,
	active: boolean = true,
) {
	const callbackRef = useRef(onDismiss);
	useEffect(() => {
		callbackRef.current = onDismiss;
	}, [onDismiss]);

	useEffect(() => {
		if (!active) return;
		function onClick(e: MouseEvent) {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				callbackRef.current();
			}
		}
		function onKey(e: KeyboardEvent) {
			if (e.key === "Escape") callbackRef.current();
		}
		document.addEventListener("mousedown", onClick);
		document.addEventListener("keydown", onKey);
		return () => {
			document.removeEventListener("mousedown", onClick);
			document.removeEventListener("keydown", onKey);
		};
	}, [ref, active]);
}
