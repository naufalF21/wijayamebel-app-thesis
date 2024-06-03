'use client';

import { BiHomeSmile } from 'react-icons/bi';
import { BiSearch } from 'react-icons/bi';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
	const pathname = usePathname();
	const navs = [
		{
			nama: 'Produk',
			link: '/produk',
		},
		{
			nama: 'FAQ',
			link: '/faq',
		},
		{
			nama: 'Kontak',
			link: '/kontak',
		},
	];

	return (
		<header className="w-full px-[108px] py-10">
			<div className="flex flex-row w-full justify-between">
				<Link
					href="/"
					className={`cursor-pointer hover-link ${pathname === '/' && 'active-link'}`}
				>
					<BiHomeSmile className="w-6 h-6" />
				</Link>
				<ul className="flex flex-row gap-10">
					{navs.map((nav, index) => (
						<Link href={nav.link} key={index}>
							<li
								className={`cursor-pointer hover-link ${
									pathname === nav.link && 'active-link'
								}`}
							>
								{nav.nama}
							</li>
						</Link>
					))}
				</ul>
				<span className="cursor-pointer hover-link">
					<BiSearch className="w-6 h-6" />
				</span>
			</div>
		</header>
	);
}
