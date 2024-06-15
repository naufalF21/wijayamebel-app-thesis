export default function Questions({ data }) {
	return (
		<>
			<ul>
				{data &&
					data.map((item, index) => {
						return (
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
						);
					})}
			</ul>
		</>
	);
}
