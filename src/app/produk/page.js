import Banner from '@/components/Banner';
import ListProduct from '@/containers/Produk/ListProduct';

export default function Produk() {
	return (
		<main>
			<Banner name="Produk" link="/produk" />
			<ListProduct />
		</main>
	);
}
