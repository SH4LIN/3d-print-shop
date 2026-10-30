"use client";

import { motion } from "framer-motion";
import { cn } from "cn";

interface AnimatedSectionProps {
	children: React.ReactNode;
	className?: string;
	delay?: number;
	direction?: "up" | "down" | "left" | "right" | "none";
}

export function AnimatedSection({
	children,
	className,
	delay = 0,
	direction = "up",
}: AnimatedSectionProps) {
	const getInitialPosition = () => {
		switch (direction) {
			case "up":
				return { opacity: 0, y: 30 };
			case "down":
				return { opacity: 0, y: -30 };
			case "left":
				return { opacity: 0, x: 30 };
			case "right":
				return { opacity: 0, x: -30 };
			case "none":
			default:
				return { opacity: 0 };
		}
	};

	return (
		<motion.div
			initial={getInitialPosition()}
			whileInView={{ opacity: 1, x: 0, y: 0 }}
			viewport={{ once: true, margin: "-60px" }}
			transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1.0] }}
			className={cn(className)}
		>
			{children}
		</motion.div>
	);
}
