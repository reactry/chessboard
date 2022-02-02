


export default function ColorPicker ({
	colors, title, index, setIndex
}) {

	let colorItems = colors.map((v, i) => {
		let borderClass = (i === index) ? "border-4 border-black" : "border-y-4";
		let classNames = `w-8 h-8 mr-1 cursor-pointer bg-slate-600 ${colors[i]} ${borderClass}`;
		return (
			<div className={classNames} key={i} onClick={(e) => setIndex(i)}></div>
		);
	});

	return (
		<div className="ColorPicker mb-4">
			<h2 className="text-sm font-bold mb-1">{title}</h2>
			<div className="flex">
				{colorItems}
			</div>
		</div>
	);
}
