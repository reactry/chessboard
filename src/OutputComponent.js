


export default function OutputComponent ({
	resolutions, resolutionIndex
}) {

	let resolution = resolutions[resolutionIndex];
	let width = resolution.width;
	let height = resolution.height;
	let style = {
		width: width + "px",
		height: height + "px"
	};

	return (
		<div className="OutputComponent">
			<div className={`bg-slate-500 w-24 h-24 p-12 relative ${resolution.classes}`}>
				<div id="OutputBox" className={"absolute border-8 border-red-800 bg-red-400"} style={style}>
					<div></div>
				</div>
			</div>
		</div>
	);
}
