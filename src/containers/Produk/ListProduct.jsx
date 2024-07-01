import Card from '@/components/Card';
import FilterProducts from '@/components/FilterProducts';

export default function ListProduct({ data, filter, params }) {
	const { meta } = data;
	const start = (meta?.page - 1) * meta?.limit + 1;
	const end = Math.min(meta?.page * meta?.limit, meta?.totalData);

	return (
		<section className="px-[108px] py-12 flex flex-col gap-8">
			<div className="flex flex-row justify-between items-center">
				<span className="w-full">
					{params
						? `Menampilkan ${meta?.totalData} hasil dari pencarian ${params}`
						: `Menampilkan ${start}-${end} dari ${meta?.totalData} `}
				</span>
				{filter && <FilterProducts />}
			</div>
			<div className={`grid grid-cols-4 gap-8`}>
				{data.data?.map((product, index) => (
					<Card
						key={index}
						id={product.id}
						category={product.category}
						name={product.name}
						image={product.image}
					/>
				))}
			</div>
		</section>
	);
}
