import Button from '@/components/Button';
import Input from '@/components/Input';

export default function LeftSide() {
	return (
		<section className="w-full flex flex-col gap-6">
			<div className="flex flex-col gap-[6px]">
				<h5 className="text-2xl font-medium">Hubungi Kami</h5>
				<p>Alamat email Anda tidak akan dipublikasikan. Kolom yang harus diisi ditandai*</p>
			</div>
			<div className="flex flex-row w-full gap-5 justify-between">
				<Input text="Nama *" placeholder="John Doe" />
				<Input text="Email *" placeholder="john@email.com" />
			</div>
			<Input text="Subjek *" placeholder="Masukan Subjek" />
			<Input text="Isi Pesan *" placeholder="Masukan Pesan" type="textArea" />
			<div>
				<Button text="Kirim Pesan" />
			</div>
		</section>
	);
}
