export default function Input({ text, placeholder, type }) {
	const inputType =
		type === 'textArea' ? (
			<textarea
				placeholder={placeholder}
				className="border border-gray-400 px-5 py-3 resize rounded-2xl h-32"
			/>
		) : (
			<input
				className="px-5 py-3 border border-gray-400 rounded-full"
				placeholder={placeholder}
			/>
		);

	return (
		<div className="flex flex-col gap-[6px] w-full">
			<label className="text-base font-medium">{text}</label>
			{inputType}
		</div>
	);
}
