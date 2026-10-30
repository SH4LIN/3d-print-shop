export interface Product {
	id: string;
	name: string;
	category: string;
	description: string;
	shortDescription: string;
	image: string;
	featured: boolean;
	specs: {
		material: string;
		dimensions: string;
		weight: string;
		printTime: string;
	};
}

export interface FAQItem {
	question: string;
	answer: string;
}

export interface NavLink {
	label: string;
	href: string;
}

export interface ProcessStep {
	step: number;
	title: string;
	description: string;
	icon: string;
}
