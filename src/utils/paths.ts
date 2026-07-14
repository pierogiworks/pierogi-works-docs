/** Join the Astro/Vite base with a site-absolute path (e.g. `/brand`). */
export function withBase(path = "/") {
	const base = import.meta.env.BASE_URL.replace(/\/$/, "");
	if (!path || path === "/") return `${base}/`;

	const hashIndex = path.indexOf("#");
	const pathname = hashIndex === -1 ? path : path.slice(0, hashIndex);
	const hash = hashIndex === -1 ? "" : path.slice(hashIndex);
	const clean = pathname.replace(/^\//, "");

	return `${base}/${clean}${hash}`;
}

/** Strip the site base so path comparisons stay repo-relative (`/brand`). */
export function stripBase(pathname: string) {
	const base = import.meta.env.BASE_URL.replace(/\/$/, "");
	let path = pathname;
	if (base && path.startsWith(base)) {
		path = path.slice(base.length) || "/";
	}
	return path.replace(/\/$/, "") || "/";
}
