


export default function Square ({
	width, height, bg, radius
}) {

	let style = {
		width: width + "px",
		height: height + "px"
	};

	let squareClass = bg + " " + radius;
	return (
		<div className={squareClass} style={style}></div>
	);
}
