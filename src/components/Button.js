'use client';

import { motion } from 'framer-motion';

export default function Button({ text, variant }) {
	const outline = 'px-6 py-3 text-gray-800 bg-white border-2 border-gray-800 font-medium text-lg';
	const fill = 'px-6 py-3 text-white bg-gray-800 font-medium text-lg';

	return (
		<motion.button
			className={variant === 'outline' ? outline : fill}
			whileTap={{ scale: 0.85 }}
		>
			{text}
		</motion.button>
	);
}
