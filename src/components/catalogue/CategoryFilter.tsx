"use client";

import { cn } from "cn";

interface CategoryFilterProps {
	categories: readonly string[] | string[];
	selectedCategory: string;
	onSelectCategory: (category: string) => void;
}

export function CategoryFilter({
	categories,
	selectedCategory,
	onSelectCategory,
}: CategoryFilterProps) {
	return (
		<div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
			{categories.map((category) => {
				const isSelected = selectedCategory === category;
				return (
					<button
						key={category}
						onClick={() => onSelectCategory(category)}
						className={cn(
							"whitespace-nowrap rounded-xl px-5 py-2.5 text-sm font-semibold transition-all cursor-pointer",
							isSelected
								? "bg-aubergine text-white shadow-md ring-2 ring-amber/70 scale-102"
								: "bg-white text-foreground/80 border border-mist-dark/70 hover:bg-mist hover:text-aubergine"
						)}
					>
						{category}
					</button>
				);
			})}
		</div>
	);
}
