import AnimatedText from '@/components/framer-motion/AnimatedText';
import Counter from '@/components/framer-motion/Counter';
import Image from 'next/image';

async function getListProfile() {
	const res = await fetch(`${process.env.API_URL}/api/advantages`, { cache: 'no-store' });
	const data = await res.json();

	return data;
}

export default async function ProfileSection() {
	const data = await getListProfile();

	return (
		<section className="px-[108px] py-20 min-h-screen flex flex-row justify-between items-center">
			<div>
				<div className="bg-gray-800 w-[454px] h-[426px] absolute -z-10"></div>
				<Image
					className="mt-16 ml-16"
					src="/images/profile-image.png"
					alt="profile-image"
					width={454}
					height={426}
					priority
				/>
			</div>
			<div className="max-w-[465px] flex flex-col gap-8">
				<div className="p-10 bg-gray-800 text-white flex flex-col gap-5">
					<AnimatedText
						as="h2"
						className="font-semibold text-3xl uppercase"
						text="Tentang Kami"
					></AnimatedText>
					<p className="text-base text-justify">
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
							<p>{item.description}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
