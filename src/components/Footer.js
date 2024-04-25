import Image from 'next/image';
import { BiLogoInstagram } from 'react-icons/bi';
import { IoMailOutline } from 'react-icons/io5';

export default function Footer(params) {
	const navs = ['Beranda', 'Galeri', 'FAQ', 'Kontak'];

	return (
		<footer className="px-[108px] pt-20 pb-10 flex flex-row w-full justify-between gap-16">
			<div className="flex flex-col justify-between w-full">
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
				<ul className="flex flex-row gap-20 mb-5">
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
