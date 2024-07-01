'use client';

import { Suspense, useEffect, useState } from 'react';
import ListProduct from '@/containers/Produk/ListProduct';
import Banner from '@/components/Banner';
import Loading from '../loading';
import Pagination from '@/components/Pagination';

export default function Produk() {
	const [page, setPage] = useState(1);
	const [produk, setProduk] = useState([]);

	const fetchData = async () => {
		const res = await fetch(`/api/products?page=${page}`, {
			cache: 'no-store',
		});
		const data = await res.json();

		return setProduk(data);
	};

	useEffect(() => {
		fetchData();
	}, [page]);

	return (
		<main>
			<Banner name="Produk" link="/produk" />
			<Suspense fallback={<Loading />}>
				<ListProduct data={produk} filter={true} />
			</Suspense>
			<Pagination data={produk.meta} setPage={setPage} />
		</main>
	);
}
