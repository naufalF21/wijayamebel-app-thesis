'use client';

import { BiHomeSmile } from 'react-icons/bi';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Search from '@/components/Search';

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
		<header className="w-full lg:px-[108px] py-10 px-5 hidden lg:block">
			<div className="flex flex-row w-full justify-between">
				<div className="flex w-full ">
					<Link
						href="/"
						className={`cursor-pointer hover-link ${pathname === '/' && 'active-link'}`}
					>
						<BiHomeSmile className="w-6 h-6" />
					</Link>
				</div>
				<ul className="flex flex-row gap-10 w-full justify-center">
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
				<div className="w-full flex justify-end">
					<Search />
				</div>
			</div>
		</header>
	);
}
