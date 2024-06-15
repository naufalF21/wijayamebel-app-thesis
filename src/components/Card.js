import Button from '@/components/Button';
import Image from 'next/image';
import Link from 'next/link';

export default function Card({ category, name, image, id }) {
	return (
		<div className="card bg-base-100 shadow-xl">
			<figure>
				<Image src={`/images/products/${image}`} alt={name} width={500} height={0} />
			</figure>
			<div className="card-body">
				<h2 className="card-title">{category}</h2>
				<p className="font-medium">{name}</p>
				<div className="card-actions justify-end">
					<Link href={`/produk/${id}`}>
						<Button text="Detail" variant="fill" />
					</Link>
				</div>
			</div>
		</div>
	);
}
