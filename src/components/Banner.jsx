import Link from 'next/link';
import AnimatedText from './framer-motion/AnimatedText';

export default function Banner({ name, link, slug }) {
	return (
		<section className="bg-gray-800 text-white py-[30px] text-center flex flex-col gap-[10px]">
			<AnimatedText
				as="h2"
				text={name}
				staggerDuration={0.1}
				className="font-semibold text-3xl"
			/>
			<div>
				<Link href="/">Home</Link> / <Link href={link}>{name}</Link>{' '}
				{slug && <span> / {slug}</span>}
			</div>
		</section>
	);
}
