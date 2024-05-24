import AnimatedText from '@/components/framer-motion/AnimatedText';
import Link from 'next/link';

export default function BannerSection() {
	return (
		<section className="bg-gray-800 text-white py-[30px] text-center flex flex-col gap-[10px]">
			<AnimatedText
				as="h2"
				text="Kontak"
				staggerDuration={0.1}
				className="font-semibold text-3xl"
			/>
			<div>
				<Link href="/">Home</Link> / <Link href="/kontak">Kontak</Link>
			</div>
		</section>
	);
}
