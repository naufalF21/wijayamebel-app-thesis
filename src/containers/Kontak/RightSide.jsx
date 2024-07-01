'use client';

import { Icon } from '@iconify/react';

export default function RightSide() {
	return (
		<section className="w-full flex">
			<ul className="text-white bg-gray-800 p-8 rounded-3xl flex flex-col justify-between">
				<li className="flex flex-col gap-2">
					<h5 className="text-2xl font-medium">Alamat</h5>
					<p className="text-base font-normal">
						Jl. Urip Sumoharjo No.20, Bukir, Kec. Gadingrejo, Kota Pasuruan, Jawa Timur
						67138
					</p>
				</li>
				<li className="flex flex-col gap-2">
					<h5 className="text-2xl font-medium">Kontak</h5>
					<ul>
						<li>
							<p className="text-base font-normal">Telepon : +62 813-2659-3923</p>
						</li>
						<li>
							<p className="text-base font-normal">Email : wijayamebel19@gmail.com</p>
						</li>
					</ul>
				</li>
				<li className="flex flex-col gap-2">
					<h5 className="text-2xl font-medium">Jam Buka</h5>
					<ul>
						<li>
							<p className="text-base font-normal">Senin - Sabtu : 07:00 - 16:00</p>
						</li>
						<li>
							<p className="text-base font-normal">Minggu : 07:00 - 15:00</p>
						</li>
					</ul>
				</li>
				<li className="flex flex-col gap-2">
					<h5 className="text-2xl font-medium">Tetap Terhubung</h5>
					<ul className="flex flex-row gap-5">
						<li className="bg-white text-gray-800 p-2 rounded-full cursor-pointer">
							<Icon icon="iconoir:instagram" height="34px" width="34px" />
						</li>
						<li className="bg-white text-gray-800 p-2 rounded-full cursor-pointer">
							<Icon icon="iconoir:mail" height="34px" width="34px" />
						</li>
					</ul>
				</li>
			</ul>
		</section>
	);
}
