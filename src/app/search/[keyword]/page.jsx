import Banner from '@/components/Banner';
import { Suspense } from 'react';
import ListProduct from '@/containers/Produk/ListProduct';
import Loading from '../../loading';
import { getProductResponse } from '@/libs/api-libs';

export default async function Search({ params }) {
	const { keyword } = params;

	const decodedKeyword = decodeURI(keyword);
	const searchProducts = await getProductResponse('search', `query=${decodedKeyword}`);

	return (
		<div className="min-h-screen">
			<Banner name="Produk" link="/produk" />
			<Suspense fallback={<Loading />}>
				<ListProduct data={searchProducts} filter={false} params={decodedKeyword} />
			</Suspense>
		</div>
	);
}
