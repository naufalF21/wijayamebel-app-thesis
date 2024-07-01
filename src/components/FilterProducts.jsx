export default function FilterProducts(params) {
	return (
		<>
			<div className="flex flex-row w-full items-center gap-1 justify-end">
				<span>Urutkan berdasarkan :</span>
				<select className="select select-bordered w-full max-w-xs rounded-full">
					<option defaultValue>Default</option>
					<option>Terbaru</option>
					<option>Harga Minimum</option>
					<option>Harga Maksimum</option>
				</select>
			</div>
		</>
	);
}
