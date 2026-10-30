export const siteConfig = {
	name: "NEEV Additive Manufacturing",
	shortName: "NEEV",
	tagline: "Ideas, Made Real.",
	domain: "neevadditivemanufacturing.com.au",
	url: "https://neevadditivemanufacturing.com.au",
	description:
		"Australian additive manufacturing studio based on the Central Coast, NSW. Specialising in high-detail devotional art, optical diffusion lamps, Smart NFC business stands, fidget clickers, and precision B2B prototypes using Bambu Lab technology.",

	location: "Central Coast, NSW, Australia",

	exhibition: {
		event: "Mega Diwali Event",
		stall: "Stall 16",
		city: "Newcastle, NSW",
		offer: "Follow us on Instagram @neev_au, leave a comment on one of our reels, and grab 10% OFF!",
	},

	contact: {
		phone: "+61 491 600 869",
		whatsapp: {
			number: "+61491600869",
			message:
				"Hi NEEV team! I saw your exhibition stall at the Mega Diwali Event (Stall 16) and I'd like to ask about your 3D printed models.",
		},
		email: "Neev.additivemanufacturing@gmail.com",
		instagram: "https://www.instagram.com/neev_au?psln=MTI3ZGxjZWdwNXZwZQ==",
		instagramHandle: "@neev_au",
	},

	socials: {
		instagram: "https://www.instagram.com/neev_au?psln=MTI3ZGxjZWdwNXZwZQ==",
		email: "mailto:Neev.additivemanufacturing@gmail.com",
		whatsapp: "https://wa.me/61491600869",
	},

	navLinks: [
		{ label: "Home", href: "/" },
		{ label: "Catalogue", href: "/catalogue" },
		{ label: "About", href: "/about" },
		{ label: "Contact", href: "/contact" },
	],

	categories: [
		"All",
		"Home & Pooja Decor",
		"Lamps & Lighting",
		"Fidget Clickers & Keychains",
		"Smart NFC & Custom Prints",
		"Prototypes & Models",
	],

	process: [
		{
			step: 1,
			title: "Share Your File or Idea",
			description:
				"Bring your own STL, OBJ, CAD file, Thingiverse link, or custom sketch. We inspect geometry and slice for optimal layer bonding.",
			icon: "Pencil",
		},
		{
			step: 2,
			title: "Select Finish & Filament",
			description:
				"Choose from Silk Dual-Tone & Rainbow, real Wood & Copper composites, or velvety Matte Pastels printed with 0.08–0.28mm resolution stacks.",
			icon: "Printer",
		},
		{
			step: 3,
			title: "24-48hr Turnaround",
			description:
				"Printed on our high-speed Bambu Lab farm. Pick up directly at Stall 16, arrange Central Coast local pickup, or get tracked Australia-wide courier.",
			icon: "Package",
		},
	],
} as const;
