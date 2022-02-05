import Square from './Square';


export default function Row ({
	rowIndex, nx, size_x, size_y, primaryColor, secondaryColor
}) {

	let arr = [...Array(nx).keys()].map(i => i+1);
	let squareItems = arr.map((v, squareIndex) => {
		let evenRow = rowIndex % 2 === 0;
		let evenSquare = squareIndex % 2 === 0;
		let bg = (evenRow ? !evenSquare : evenSquare) ? primaryColor : secondaryColor;
		let args = {
			width: size_x,
			height: size_y,
			bg: bg
		};
		return <Square key={squareIndex} {...args} />;
	});

	return (
		<div className="Row flex">
			{squareItems}
		</div>
	);
}
