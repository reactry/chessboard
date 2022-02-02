


export default function OutputComponent ({
	resolutions, resolutionIndex,
	colors, backgroundColorIndex, primaryColorIndex, secondaryColorIndex
}) {

	let backgroundColor = colors[backgroundColorIndex];
	let resolution = resolutions[resolutionIndex];
	let width = resolution.width;
	let height = resolution.height;
	let style = {
		width: width + "px",
		height: height + "px"
	};

	return (
		<div className="OutputComponent">
			<div className={`bg-slate-500 w-24 h-24 relative ${resolution.classes}`}>
				<div id="OutputBox" className={`absolute shadow-xl ${backgroundColor}`} style={style}>
					<div></div>
				</div>
			</div>
		</div>
	);
}
