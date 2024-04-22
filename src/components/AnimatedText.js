'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function AnimatedText({ as: Component = 'h1', text, className }) {
	const controls = useAnimation();
	const textArray = Array.isArray(text) ? text : [text];
	const ref = useRef(null);
	const isInView = useInView(ref, { amount: 0.5, once: true });

	const defaultAnimation = {
		hidden: {
			opacity: 0,
			y: 20,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.1,
			},
		},
	};

	useEffect(() => {
		let timeout;

		if (isInView) {
			controls.start('visible');
		} else {
			controls.start('hidden');
		}

		return () => clearTimeout(timeout);
	}, [isInView]);

	return (
		<Component className={className}>
			<span className="sr-only">{text}</span>
			<motion.span
				ref={ref}
				initial="hidden"
				animate={controls}
				variants={{
					visible: { transition: { staggerChildren: 0.05 } },
					hidden: {},
				}}
				aria-hidden
			>
				{textArray.map((line, lineIndex) => (
					<span className="block" key={`${line}-${lineIndex}`}>
						{line.split(' ').map((word, wordIndex) => (
							<span className="inline-block" key={`${word}-${wordIndex}`}>
								{word.split('').map((char, charIndex) => (
									<motion.span
										key={`${char}-${charIndex}`}
										className="inline-block"
										variants={defaultAnimation}
									>
										{char}
									</motion.span>
								))}
								<span className="inline-block">&nbsp;</span>
							</span>
						))}
					</span>
				))}
			</motion.span>
		</Component>
	);
}
