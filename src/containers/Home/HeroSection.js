'use client';

import AnimatedText from '@/components/framer-motion/AnimatedText';
import Button from '@/components/Button';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
	const imageVariants = {
		offscreen: {
			x: 300,
			opacity: 0,
		},
		onscreen: {
			x: 100,
			opacity: 1,
			transition: {
				duration: 0.8,
			},
		},
	};

	return (
		<section className="flex flex-row w-full justify-between px-[108px] py-14 gap-20 overflow-hidden">
			<div className="flex flex-col gap-10 py-5 pr-80">
				<AnimatedText
					as="h1"
					staggerDuration={0.03}
					className="font-semibold text-5xl uppercase leading-[60px]"
					text={['Ciptakan Kenyamanan', 'Dengan Keindahan', 'Ruangan']}
				></AnimatedText>
				<p className="text-xl font-normal text-gray-400">
					Dengan penuh perhatian terhadap detail, ciptakan suasana yang memeluk dan
					merangkul, dimana keindahan tak hanya terlihat, tetapi juga terasa.
				</p>
				<div className="flex flex-row gap-16">
					<Button text="Pesan Sekarang" variant="fill" />
					<button className="border-b border-gray-800 self-center text-lg">
						Jelajahi
					</button>
				</div>
			</div>
			<div className="w-[463px] h-[380px]">
				<div className="w-[324px] h-[324px] rounded-full bg-gray-800 absolute top-[222px] right-[247px] -z-10"></div>
				<motion.div
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true, amount: 0.3 }}
					className="w-[370px]"
				>
					<motion.div variants={imageVariants}>
						<Image
							className="absolute right-[108px]"
							src="/images/hero-image.png"
							alt="hero-image"
							width={370}
							height={368}
							priority
						/>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
