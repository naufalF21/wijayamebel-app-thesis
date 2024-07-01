export default function Pagination({ data, setPage }) {
	const handleNextPage = () => {
		setPage((prevState) => prevState + 1);
	};

	const handlePrevPage = () => {
		setPage((prevState) => prevState - 1);
	};

	return (
		<div className="w-full flex justify-center flex-row gap-2">
			{data?.page > 1 && <button onClick={handlePrevPage}>Prev</button>}
			<span>
				{data?.page} of {data?.totalPages}
			</span>
			{data?.page !== data?.totalPages && <button onClick={handleNextPage}>Next</button>}
		</div>
	);
}
