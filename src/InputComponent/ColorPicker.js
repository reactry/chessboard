


export default function ColorPicker ({
	colors, title, index, setIndex
}) {

	const maxColors = colors.length;

	let colorItems = colors.map((v, i) => {
		let borderClass = (i === index) ? "border-4 border-black" : "border-4 hover:border-black";
		let classNames = `w-8 h-8 cursor-pointer ${colors[i]} ${borderClass}`;
		return (
			<div className={classNames} key={i} onClick={(e) => setIndex(i)}></div>
		);
	});

	function pickRandomColor (e) {
		setIndex(Math.floor(Math.random() * maxColors));
	}

	let randomizeButton = <span className="text-sm px-2 py-1 ml-2 bg-slate-400 cursor-pointer duration-300 hover:bg-slate-600 hover:text-white" onClick={pickRandomColor}>random</span>;

	function handleKeyDown (e) {
		let keyCode = e.keyCode;
		if (keyCode === 32) {
			e.preventDefault();
			pickRandomColor();
		} else if (keyCode === 37) {
			// left arrow
			e.preventDefault();
			if (index > 0) setIndex(index - 1);
		} else if (keyCode === 39) {
			// right arrow
			e.preventDefault();
			if (index + 1 < maxColors) setIndex(index + 1)
		}
	}

	return (
		<div className="ColorPicker mb-6">
			<h2 className="font-bold mb-1">
				<span className="text-sm">{title}</span>
				{randomizeButton}
			</h2>
			<div className="flex outline-none p-1 border-2 focus:bg-slate-400" tabIndex="0" onKeyDown={handleKeyDown}>
				{colorItems}
			</div>
		</div>
	);
}
