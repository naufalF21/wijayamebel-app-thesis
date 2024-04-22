'use client';

import { BiHomeSmile } from 'react-icons/bi';
import { BiSearch } from 'react-icons/bi';
import { usePathname } from 'next/navigation';

export default function Header() {
	const pathname = usePathname();
	const navs = ['Galeri', 'FAQ', 'Kontak'];

	return (
		<header className="w-full px-[108px] py-10">
			<div className="flex flex-row w-full justify-between">
				<span className={`cursor-pointer hover-link ${pathname === '/' && 'active-link'}`}>
					<BiHomeSmile className="w-6 h-6" />
				</span>
				<ul className="flex flex-row gap-10">
					{navs.map((nav, index) => (
						<li key={index} className="cursor-pointer hover-link">
							{nav}
						</li>
					))}
				</ul>
				<span className="cursor-pointer hover-link">
					<BiSearch className="w-6 h-6" />
				</span>
			</div>
		</header>
	);
}
