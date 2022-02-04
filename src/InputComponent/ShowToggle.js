


export default function ShowToggle ({
	title, show, setShow
}) {

	let circleClass = "h-5 w-5 -translate-y-1 rounded-full duration-300";
	circleClass += show ? " bg-green-600 translate-x-7" : " bg-gray-600";

	function handleKeyPress (e) {
		if (e.keyCode === 32) {
			e.preventDefault();
			setShow(!show);
		}
	}

	return (
		<div className="ShowToggle px-2 py-2 flex">
			<div className="px-2 py-3 cursor-pointer rounded-md outline-none duration-300 hover:bg-gray-200 focus:bg-gray-200"
				onClick={(e) => setShow(!show)} tabIndex="0"
				onKeyDown={handleKeyPress}>
				<div className="bg-gray-400 w-12 h-3 rounded-full">
					<div className={circleClass}></div>
				</div>
			</div>
			<div className="px-2 py-2">
				<h2 className="text-sm font-bold">{title}</h2>
			</div>
		</div>
	);
}
