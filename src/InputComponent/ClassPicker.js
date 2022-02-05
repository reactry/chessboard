


export default function ClassPicker ({
	classes, title, index, setIndex
}) {

	let items = classes.map((v, i) => {
		let extraClass = (i === index) ? "bg-white border-black" : "bg-gray-200 border-gray-400 hover:bg-white";
		let classNames = `inline-block px-2 py-1 cursor-pointer text-sm font-bold border-y-4 ${extraClass}`;
		return (
			<div className={classNames} key={i} onClick={(e) => setIndex(i)}>{v.title}</div>
		);
	});

	function handleKeyDown (e) {
		let keyCode = e.keyCode;
		if (keyCode === 37) {
			// left arrow
			e.preventDefault();
			if (index > 0) setIndex(index - 1);
		} else if (keyCode === 39) {
			// right arrow
			e.preventDefault();
			if (index + 1 < classes.length) setIndex(index + 1)
		}
	}

	return (
		<div className="ClassPicker mb-4 outline-none px-4 py-2 focus:bg-slate-400" tabIndex="0" onKeyDown={handleKeyDown}>
			<h2 className="text-sm font-bold mb-1">{title}</h2>
			<div className="">
				{items}
			</div>
		</div>
	);
}
