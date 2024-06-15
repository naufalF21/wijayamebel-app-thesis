import Banner from '@/components/Banner';

export async function generateStaticParams() {
	const posts = await fetch(`${process.env.API_URL}/api/products`).then((res) => res.json());
	return posts.map((post) => ({
		id: post.id.toString(),
		name: post.name,
	}));
}

export default function Page({ params }) {
	const { id } = params;
	return (
		<>
			<Banner name="Produk" link="/produk" slug="Kursi Jati" />
			<div>My Post: {id}</div>
		</>
	);
}
