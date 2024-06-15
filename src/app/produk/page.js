import Banner from '@/components/Banner';
import { Suspense } from 'react';
import ListProduct from '@/containers/Produk/ListProduct';
import Loading from '../loading';

async function getProducts() {
	const res = await fetch(`${process.env.API_URL}/api/products`, { cache: 'no-store' });
	const data = await res.json();

	return data;
}

export default async function Produk() {
	const data = await getProducts();

	return (
		<main>
			<Banner name="Produk" link="/produk" />
			<Suspense fallback={<Loading />}>
				<ListProduct data={data} />
			</Suspense>
		</main>
	);
}
