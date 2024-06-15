'use client';

import Card from '@/components/Card';
import FilterProducts from '@/components/FilterProducts';
import Pagination from '@/components/Pagination';
import { paginate } from '@/helpers/paginate';
import { useState } from 'react';

export default function ListProduct({ data }) {
	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 8;

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
				<FilterProducts />
			</div>
			<div className={`grid grid-cols-4 gap-8`}>
				{paginatedPosts.map((product, index) => (
					<Card
						key={index}
						id={product.id}
						category={product.category}
						name={product.name}
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
