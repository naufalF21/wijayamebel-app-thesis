'use client';

import { motion } from 'framer-motion';

export default function AnimatedLayout({ children }) {
	const imageVariants = {
		offscreen: {
			y: 100,
			opacity: 0,
		},
		onscreen: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
			},
		},
	};

	return (
		<motion.div
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: true, amount: 0.3 }}
		>
			<motion.div variants={imageVariants}>{children}</motion.div>
		</motion.div>
	);
}
