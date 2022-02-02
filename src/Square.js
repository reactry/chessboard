


export default function Square ({
	width, height, bg
}) {

	let style = {
		width: width + "px",
		height: height + "px"
	};

	return (
		<div className={bg} style={style}></div>
	);
}
