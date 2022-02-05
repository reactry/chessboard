import NumberPicker from './NumberPicker';
import ClassPicker from './ClassPicker';
import ShowToggle from './ShowToggle';



export default function SizeTab ({
	selectSquare, setSelectSquare,
	borders, borderIndex, setBorderIndex,
	sizes,
	widthIndex, setWidthIndex,
	heightIndex, setHeightIndex,
	paddings, paddingIndex, setPaddingIndex,
	radiuses, radiusIndex, setRadiusIndex,
	resolutions, resolutionIndex, setResolutionIndex
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
		let borderClass = (i === resolutionIndex) ? "bg-slate-800 text-white" : "text-black cursor-pointer";
		let classNames = `px-3 py-1 text-sm border-2 border-slate-800 duration-300 ${borderClass}`;
		return (
			<div key={i}>
				<div className={classNames} onClick={(e) => setResolutionIndex(i)}>{v.name}</div>
			</div>
		);
	});

	let selectShapeProps = {
		show: selectSquare,
		setShow: setSelectSquare,
		title: "Square"
	};

	let radiusPickerProps = {
		classes: radiuses,
		title: "Radius",
		index: radiusIndex,
		setIndex: setRadiusIndex
	};

	function shapeSelector () {
		if (selectSquare) {
			return (
				<div>
					<NumberPicker title="Width"
						numbers={sizes}
						index={sizeIndex}
						setIndex={setSizeIndex} />
				</div>
			);
		} else {
			return (
				<div>
					<NumberPicker title="Width"
						numbers={sizes}
						index={widthIndex}
						setIndex={setWidthIndex} />
					<NumberPicker title="Height"
						numbers={sizes}
						index={heightIndex}
						setIndex={setHeightIndex} />
				</div>
			);
		}
	}

	return (
		<div className="SizeTab">
			<div className="flex px-4 text-white font-bold text-sm">
				<div className="flex py-1">
					{resolutionItems}
				</div>
				<div>
					<div className="px-4 pt-3 pb-2 text-md font-bold ml-4 bg-rose-500 inline-block rounded-md">
						<span>{width}</span>
						<span className="px-1">x</span>
						<span>{height}</span>
					</div>
				</div>
			</div>
			<div className="px-4">
				<ShowToggle {...selectShapeProps} />
			</div>
			{shapeSelector()}
			<NumberPicker title="Padding"
				numbers={paddings}
				index={paddingIndex}
				setIndex={setPaddingIndex} />
			<NumberPicker title="Border"
				numbers={borders}
				index={borderIndex}
				setIndex={setBorderIndex} />
			<ClassPicker {...radiusPickerProps} />
		</div>
	);
}
