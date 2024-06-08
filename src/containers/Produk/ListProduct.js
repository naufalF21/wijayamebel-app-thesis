'use client';

import Card from '@/components/Card';
import Loading from '@/components/Loading';
import Pagination from '@/components/Pagination';
import { paginate } from '@/helpers/paginate';
import { useState, useEffect } from 'react';

export default function ListProduct() {
	const [data, setData] = useState(null);
	const [isLoading, setLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 8;

	useEffect(() => {
		fetch(`/api/products`)
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				setLoading(false);
			});
	}, []);

	if (isLoading) return <Loading />;
	if (!data) return <p>No data</p>;

	const paginatedPosts = paginate(data, currentPage, pageSize);

	const onPageChange = (page) => {
		setCurrentPage(page);
	};

	const handlePrevClick = () => {
		onPageChange(currentPage - 1);
	};

	const handleNextClick = () => {
		onPageChange(currentPage + 1);
	};

	return (
		<section className="px-[108px] py-12 flex flex-col gap-8">
			<div className="flex flex-row justify-between items-center">
				<span className="w-full">
					Menampilkan 1-{paginatedPosts.length} dari {data.length} hasil
				</span>
				<div className="flex flex-row w-full items-center gap-1 justify-end">
					<span>Urutkan berdasarkan :</span>
					<select className="select select-bordered w-full max-w-xs rounded-full">
						<option defaultValue>Default</option>
						<option>Terbaru</option>
						<option>Harga Minimum</option>
						<option>Harga Maksimum</option>
					</select>
				</div>
			</div>
			<div className={`grid grid-cols-4 gap-8`}>
				{paginatedPosts.map((product, index) => (
					<Card
						key={index}
						category={product.category}
						name={product.name}
						description={product.description}
						image={product.image}
					/>
				))}
			</div>
			<div className="flex flex-row w-full justify-center">
				<Pagination
					items={data.length}
					currentPage={currentPage} // 1
					pageSize={pageSize} // 10
					onPageChange={onPageChange}
					handleNext={handleNextClick}
					handlePrev={handlePrevClick}
				/>
			</div>
		</section>
	);
}
