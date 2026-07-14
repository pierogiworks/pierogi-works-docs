export type NavItem = {
	label: string;
	href: string;
	icon: NavIconName;
};

export type NavIconName =
	| "overview"
	| "brand"
	| "voice"
	| "visuals"
	| "assets"
	| "templates"
	| "guidelines"
	| "resources"
	| "changelog"
	| "contact";

export const navItems: NavItem[] = [
	{ label: "Overview", href: "/", icon: "overview" },
	{ label: "Brand", href: "/brand", icon: "brand" },
	{ label: "Voice & Tone", href: "/voice", icon: "voice" },
	{ label: "Visuals", href: "/visuals", icon: "visuals" },
	{ label: "Assets", href: "/assets", icon: "assets" },
	{ label: "Templates", href: "/templates", icon: "templates" },
	{ label: "Guidelines", href: "/guidelines", icon: "guidelines" },
	{ label: "Resources", href: "/resources", icon: "resources" },
	{ label: "Changelog", href: "/changelog", icon: "changelog" },
	{ label: "Contact", href: "/contact", icon: "contact" },
];

export const brandColors = [
	{ name: "Red", hex: "#D94B3D" },
	{ name: "Cream", hex: "#F6F1E7" },
	{ name: "Dark Gray", hex: "#2F2F2F" },
	{ name: "Muted Green", hex: "#8FA68D" },
] as const;
