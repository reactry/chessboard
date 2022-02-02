


export default function InputComponent ({
	resolutions, resolutionIndex, setResolutionIndex
}) {

	let resolution = resolutions[resolutionIndex];
	let width = resolution.width;
	let height = resolution.height;

	let resolutionItems = resolutions.map((v, i) => {
		let borderClass = (i === resolutionIndex) ? "border-y-4 border-red-500" : "border-y-4";
		let classNames = `px-3 py-1 mr-1 cursor-pointer bg-slate-600 ${borderClass}`;
		return (
			<div className={classNames} key={i} onClick={(e) => setResolutionIndex(i)}>{v.name}</div>
		);
	});

	return (
		<div className="InputComponent">
			<div className="flex py-2 text-white font-bold text-sm">
				{resolutionItems}
				<div className="px-4 py-2 ml-4 bg-rose-500 inline-block rounded-full">
					<span>{width}</span>
					<span className="px-1">x</span>
					<span>{height}</span>
				</div>
			</div>
		</div>
	);
}
