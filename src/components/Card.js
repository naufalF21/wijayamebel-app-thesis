import Button from '@/components/Button';
import Image from 'next/image';

export default function Card({ category, name, description, image }) {
	return (
		<div className="card bg-base-100 shadow-xl">
			<figure>
				<Image src={`/images/products/${image}`} alt={name} width={500} height={0} />
			</figure>
			<div className="card-body">
				<h2 className="card-title">{category}</h2>
				<p className="font-medium">{name}</p>
				<div className="card-actions justify-end">
					<Button text="Detail" variant="fill" />
				</div>
			</div>
		</div>
	);
}
