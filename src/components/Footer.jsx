import Image from 'next/image';
import { BiLogoInstagram } from 'react-icons/bi';
import { IoMailOutline } from 'react-icons/io5';

export default function Footer(params) {
	const navs = ['Beranda', 'Produk', 'FAQ', 'Kontak'];

	return (
		<footer className="lg:px-[108px] lg:pt-20 lg:pb-10 py-10 flex lg:flex-row w-full justify-between gap-16 px-5 flex-col">
			<div className="lg:flex flex-col justify-between w-full hidden">
				<Image
					src="/images/logo.png"
					alt="logo-image"
					width={200}
					height={0}
					quality={100}
					priority
				/>
				<div className="flex flex-row w-full justify-between items-center">
					<ul className="text-gray-400 flex flex-row gap-5">
						<li className="hover:text-gray-800 cursor-pointer">
							<BiLogoInstagram className="w-8 h-8" />
						</li>
						<li className="hover:text-gray-800 cursor-pointer">
							<IoMailOutline className="w-8 h-8" />
						</li>
					</ul>
					<p className="text-sm text-gray-400">©2024 Copyright All rights reserved</p>
				</div>
			</div>
			<div className="flex flex-col gap-5">
				<Image
					className="lg:hidden"
					src="/images/logo.png"
					alt="logo-image"
					width={200}
					height={0}
					quality={100}
					priority
				/>
				<ul className="flex flex-row justify-between mb-5">
					{navs.map((nav, index) => (
						<li
							key={index}
							className="text-base font-medium text-gray-400 hover:text-gray-800 cursor-pointer"
						>
							{nav}
						</li>
					))}
				</ul>
				<div className="flex flex-col gap-3">
					<p className="text-lg font-medium">Kontak Kami</p>
					<ul className="text-base text-gray-400">
						<li>+62 813-2659-3923</li>
						<li>@wijayamebel</li>
						<li>wijayamebel19@gmail.com</li>
					</ul>
				</div>
				<div className="flex flex-col gap-3">
					<p className="text-lg font-medium">Lokasi</p>
					<ul className="text-base text-gray-400">
						<li>
							Jl. Urip Sumoharjo No.20, Bukir, Kec. Gadingrejo, <br /> Kota Pasuruan,
							Jawa Timur 67138
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}
