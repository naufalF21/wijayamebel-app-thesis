import Loading from '@/components/Loading';
import { useState, useEffect } from 'react';

export default function Questions({ value }) {
	const [data, setData] = useState(null);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`/api/questions`)
			.then((res) => res.json())
			.then((data) => {
				data.forEach((e) => {
					if (e.categoryId === value) {
						setData(e.questions);
						setLoading(false);
					}
				});
			});
	}, [value]);

	if (isLoading) return <Loading />;
	if (!data) return <p>No data</p>;

	return (
		<>
			<ul>
				{data.map((item, index) => (
					<li key={index}>
						<div
							tabIndex={0}
							className="collapse collapse-plus border border-gray-800 mb-5 rounded-xl focus:bg-gray-800 focus:text-white"
						>
							<div className="collapse-title text-lg font-medium">
								{item.question}
							</div>
							<div className="collapse-content text-sm">
								<p>{item.answer}</p>
							</div>
						</div>
					</li>
				))}
			</ul>
		</>
	);
}
