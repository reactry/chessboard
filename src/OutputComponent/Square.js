


export default function Square ({
	width, height, bg, padding, radius
}) {

	let padX = (width * padding / 100) + "px";
	let padY = (height * padding / 100) + "px";
	let outerSquareStyle = {
		width: width + "px",
		height: height + "px",
		padding: padY + " " + padX
	};
	let innerSquareStyle = {
		width: width * (100 - 2 * padding) / 100 + "px",
		height: height * (100 - 2 * padding) / 100 + "px"
	};

	let outerSquareClass = "";
	let innerSquareClass = bg + " " + radius;
	return (
		<div className={outerSquareClass} style={outerSquareStyle}>
			<div className={innerSquareClass} style={innerSquareStyle}></div>
		</div>
	);
}
