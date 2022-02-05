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
			<div className="flex px-4 py-2 text-white font-bold text-sm">
				{resolutionItems}
				<div className="px-4 py-2 ml-4 bg-rose-500 inline-block rounded-full">
					<span>{width}</span>
					<span className="px-1">x</span>
					<span>{height}</span>
				</div>
			</div>
			<div className="px-4">
				<ShowToggle {...selectShapeProps} />
			</div>
			{shapeSelector()}
			<NumberPicker title="Border size"
				numbers={borders}
				index={borderIndex}
				setIndex={setBorderIndex} />
		</div>
	);
}
