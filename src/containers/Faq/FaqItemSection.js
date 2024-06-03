'use client';

import { useState } from 'react';
import Questions from './Questions';

export default function FaqItemSection() {
	const [value, setValue] = useState(1);

	const categories = [
		{
			category: 1,
			name: 'Informasi Umum',
		},
		{
			category: 2,
			name: 'Pemesanan & Pengiriman',
		},
		{
			category: 3,
			name: 'Pembayaran',
		},
	];

	return (
		<section className="px-[108px] py-12 flex flex-row justify-between w-full gap-10">
			<ul className="w-[50%] flex flex-col gap-5">
				{categories.map((item, index) => {
					return (
						<li key={index}>
							<button
								className={`p-4 rounded-xl w-full text-left text-lg font-medium ${
									item.category === value
										? 'bg-gray-800 text-white'
										: 'border border-gray-800'
								} `}
								onClick={() => setValue(item.category)}
							>
								{item.name}
							</button>
						</li>
					);
				})}
			</ul>
			<div className="w-full">
				<Questions value={value} />
			</div>
		</section>
	);
}
