import Row from './Row';



export default function OutputComponent ({
	borders, borderIndex,
	sizes, widthIndex, heightIndex,
	resolutions, resolutionIndex,
	colors, backgroundColorIndex, primaryColorIndex, secondaryColorIndex
}) {

	let backgroundColor = colors[backgroundColorIndex];
	let primaryColor = colors[primaryColorIndex];
	let secondaryColor = colors[secondaryColorIndex];

	let resolution = resolutions[resolutionIndex];
	let width = resolution.width;
	let height = resolution.height;
	let style = {
		width: width + "px",
		height: height + "px"
	};

	let size_x = sizes[widthIndex];
	let nx = Math.ceil(width / size_x);
	let size_y = sizes[heightIndex];
	let ny = Math.ceil(height / size_y);

	let arr = [...Array(ny).keys()].map(i => i+1);
	let rowItems = arr.map((v, rowIndex) => {
		let args = {rowIndex, nx, size_x, size_y, primaryColor, secondaryColor};
		return <Row key={rowIndex} {...args} />;
	});

	return (
		<div className="OutputComponent">
			<div className={`bg-slate-500 w-24 h-24 relative ${resolution.classes}`}>
				<div id="OutputBox" className={`absolute shadow-xl overflow-hidden ${backgroundColor}`} style={style}>
					{rowItems}
				</div>
			</div>
		</div>
	);
}
