import Button from '@/components/Button';
import AnimatedText from '@/components/framer-motion/AnimatedText';

export default function InviteSection() {
	return (
		<section className="lg:px-[108px] lg:py-16 py-20 flex flex-col items-center gap-10">
			<div className="text-center flex flex-col gap-5">
				<AnimatedText
					as="h2"
					staggerDuration={0.02}
					className="font-semibold text-3xl"
					text={[
						'Tingkatkan pengalaman Anda dengan menggunakan',
						'karya profesional kami.',
					]}
				/>
				<p className="text-base text-gray-400">
					Bagaimana pendapat Anda tentang hal ini, sudah tertarik untuk <br /> bekerja
					sama secara professional dengan kami?
				</p>
			</div>
			<Button variant="outline" text="Jelajahi Sekarang" />
		</section>
	);
}
