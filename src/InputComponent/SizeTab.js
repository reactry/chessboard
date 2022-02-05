import NumberPicker from './NumberPicker';
import ShowToggle from './ShowToggle';



export default function SizeTab ({
	selectSquare, setSelectSquare,
	borders, borderIndex, setBorderIndex,
	sizes,
	widthIndex, setWidthIndex,
	heightIndex, setHeightIndex,
	resolutions, resolutionIndex, setResolutionIndex,
}) {

	let sizeIndex = widthIndex;
	let setSizeIndex = (x) => {
		setWidthIndex(x);
		setHeightIndex(x);
	};

	let selectShapeProps = {
		show: selectSquare,
		setShow: setSelectSquare,
		title: "Square"
	};

	function shapeSelector () {
		if (selectSquare) {
			return (
				<div>
					<NumberPicker title="Square Width"
						numbers={sizes}
						index={sizeIndex}
						setIndex={setSizeIndex} />
				</div>
			);
		} else {
			return (
				<div>
					<NumberPicker title="Rectangle Width"
						numbers={sizes}
						index={widthIndex}
						setIndex={setWidthIndex} />
					<NumberPicker title="Rectangle Height"
						numbers={sizes}
						index={heightIndex}
						setIndex={setHeightIndex} />
				</div>
			);
		}
	}

	return (
		<div className="SizeTab">
			<ShowToggle {...selectShapeProps} />
			{shapeSelector()}
			<NumberPicker title="Border size"
				numbers={borders}
				index={borderIndex}
				setIndex={setBorderIndex} />
		</div>
	);
}
