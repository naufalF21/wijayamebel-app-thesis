import LeftSide from './LeftSide';
import RightSide from './RightSide';

export default function FormSection() {
	return (
		<div className="flex flex-row w-full px-[108px] py-[50px] text-gray-800 gap-10 h-fit">
			<LeftSide />
			<RightSide />
		</div>
	);
}
