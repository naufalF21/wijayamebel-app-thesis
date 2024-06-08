'use client';

import { Icon } from '@iconify/react';

export default function Pagination({
	items,
	pageSize,
	currentPage,
	onPageChange,
	handlePrev,
	handleNext,
}) {
	const active = 'px-3 py-1 bg-gray-800 text-white rounded-full';
	const pagesCount = Math.ceil(items / pageSize); // 100/10

	if (pagesCount === 1) return null;
	const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

	console.log(pages.length);

	return (
		<div className="flex flex-row items-center gap-4 text-gray-800">
			{currentPage > 1 && (
				<button onClick={handlePrev}>
					<Icon icon="iconoir:nav-arrow-left" width="24px" height="24px" />
				</button>
			)}

			<ul className="flex flex-row gap-4 items-center text-base">
				{pages.map((page, index) => (
					<li key={index}>
						<button
							className={page === currentPage ? active : ''}
							onClick={() => onPageChange(page)}
						>
							{page}
						</button>
					</li>
				))}
			</ul>
			{currentPage < pages.length && (
				<button onClick={handleNext}>
					<Icon icon="iconoir:nav-arrow-right" width="24px" height="24px" />
				</button>
			)}
		</div>
	);
}
