import Counter from '@/components/framer-motion/Counter';
import AnimatedLayout from '@/components/framer-motion/AnimatedLayout';
import Image from 'next/image';
import AnimatedText from '@/components/framer-motion/AnimatedText';

async function getListProfile() {
	const res = await fetch(`${process.env.API_URL}/api/advantages`, { cache: 'no-store' });
	const data = await res.json();

	return data;
}

export default async function ProfileSection() {
	const data = await getListProfile();

	return (
		<section className="lg:px-[108px] py-20 lg:min-h-screen flex lg:flex-row flex-col justify-between items-center px-5">
			<div className="hidden lg:block">
				<AnimatedLayout>
					<Image
						className="mt-16 ml-16 absolute"
						src="/images/profile-image.png"
						alt="profile-image"
						width={454}
						height={426}
						priority
					/>
				</AnimatedLayout>
				<div className="bg-gray-800 w-[454px] h-[426px]"></div>
			</div>
			<div className="lg:hidden">
				<Image
					src="/images/profile-image.png"
					alt="profile-image"
					width={1000}
					height={426}
					priority
				/>
			</div>
			<div className="lg:max-w-[465px] flex flex-col gap-8">
				<div className="p-10 bg-gray-800 text-white flex flex-col gap-5">
					<AnimatedText
						as="h2"
						className="font-semibold text-3xl uppercase"
						text="Tentang Kami"
					></AnimatedText>
					<p className="text-base text-justify text-gray-400">
						Mebel Wijaya merupakan perusahaan mebel yang berkomitmen untuk memberikan
						sentuhan istimewa dan kenyamanan dalam setiap rumah. Sejak berdiri, kami
						telah memegang teguh misi untuk mengubah ruang hidup menjadi karya seni
						fungsional yang mencerminkan keunikan setiap individu.
					</p>
				</div>
				<ul className="flex flex-row gap-8">
					{data.map((item, index) => (
						<li key={index} className="flex flex-col gap-2">
							<p className="text-2xl font-medium">
								<Counter value={item.amount} />+
							</p>
							<p className="text-base text-gray-400">{item.description}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
