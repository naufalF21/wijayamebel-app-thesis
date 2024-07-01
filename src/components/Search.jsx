'use client';

import { useRouter } from 'next/navigation';
import { useRef } from 'react';

export default function Search() {
	const searchRef = useRef();
	const router = useRouter();

	const handleSearch = (event) => {
		const keyword = searchRef.current.value;

		if (event.key === 'Enter' || event.key === 'click') {
			event.preventDefault();
			if (!keyword) return;
			router.push(`/search/${keyword}`);
		}
	};

	return (
		<label className="input input-bordered flex items-center gap-2 h-full w-2/3 rounded-full">
			<input
				type="text"
				className="grow required"
				placeholder="Search"
				ref={searchRef}
				onKeyDown={handleSearch}
			/>
			<button onClick={handleSearch}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 16 16"
					fill="currentColor"
					className="h-6 w-6 opacity-70"
				>
					<path
						fillRule="evenodd"
						d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
						clipRule="evenodd"
					/>
				</svg>
			</button>
		</label>
	);
}
