import Banner from '@/components/Banner';
import Button from '@/components/Button';
import Image from 'next/image';

async function getProduct(id) {
	const res = await fetch(`${process.env.API_URL}/api/products/${id}`);
	return res.json();
}

export default async function Page({ params: { id } }) {
	const product = await getProduct(id);
	const { data } = product;

	return (
		<>
			<Banner name="Produk" link="/produk" slug="Kursi Jati" />
			<div className="flex flex-row px-[108px] py-16 justify-between w-full gap-20">
				<div>
					<Image
						className="w-full"
						src={`/images/products/${data.image}`}
						alt="gambar"
						width={500}
						height={0}
						quality={100}
					/>
				</div>
				<div className="w-full flex flex-col gap-5 basis-2/3">
					<div className="text-xl text-gray-400">{data.category}</div>
					<div className="text-3xl font-medium">{data.name}</div>
					<div>{data.description}</div>
					<div>
						<Button text="Pesan Via Whatsapp" />
					</div>
					<ul>
						<li>
							SKU : <span className="text-gray-400">LAKSO83KD0891</span>
						</li>
						<li>
							Kategori : <span className="text-gray-400">{data.category}</span>
						</li>
						<li>
							Tag : <span className="text-gray-400">Kursi, Furnitur, Jati</span>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
