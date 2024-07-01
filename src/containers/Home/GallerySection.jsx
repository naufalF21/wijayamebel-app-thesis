import AnimatedLayout from '@/components/framer-motion/AnimatedLayout';
import AnimatedText from '@/components/framer-motion/AnimatedText';
import Image from 'next/image';

async function getProducts() {
	const res = await fetch(`${process.env.API_URL}/api/products`, { cache: 'no-store' });
	const data = await res.json();

	return data;
}

export default async function GallerySection() {
	const products = await getProducts();
	const { data } = products;

	return (
		<section className="lg:px-[108px] lg:min-h-screen lg:py-16 px-5">
			<div className="text-center flex flex-col gap-5">
				<AnimatedText
					as="h2"
					className="font-semibold text-3xl uppercase"
					text="Produk Kami"
				></AnimatedText>
				<p className="text-base text-gray-400">
					Jelajahi koleksi lengkap kami dengan tampilan visual yang menarik dari semua
					produk furnitur yang tersedia, <br /> dan temukan inspirasi untuk mengubah ruang
					Anda menjadi tempat yang indah dan fungsional.
				</p>
			</div>
			<div className="mt-10">
				<AnimatedLayout>
					<ul className="grid grid-cols-4">
						{data.map((product, index) => {
							if (product.id <= 8) {
								return (
									<li
										key={index}
										className="w-full relative overflow-hidden bg-cover bg-no-repeat"
									>
										<Image
											className="w-full transition duration-300 ease-in-out hover:scale-110"
											src={`/images/products/${product.image}`}
											alt={product.name}
											width={400}
											height={0}
											quality={100}
											priority
										/>
									</li>
								);
							}
						})}
					</ul>
				</AnimatedLayout>
			</div>
		</section>
	);
}
