import ColorPicker from './ColorPicker';
import NumberPicker from './NumberPicker';
import ShowToggle from './ShowToggle';
import DebugTable from './DebugTable';

import React from 'react';
import domtoimage from 'dom-to-image';
const FileSaver = require('file-saver');



export default function InputComponent ({
	selectSquare, setSelectSquare,
	borders, borderIndex, setBorderIndex,
	sizes,
	widthIndex, setWidthIndex,
	heightIndex, setHeightIndex,
	resolutions, resolutionIndex, setResolutionIndex,
	colors, backgroundColorIndex, setBackgroundColorIndex,
	primaryColorIndex, setPrimaryColorIndex,
	secondaryColorIndex, setSecondaryColorIndex
}) {

	let sizeIndex = widthIndex;
	let setSizeIndex = (x) => {
		setWidthIndex(x);
		setHeightIndex(x);
	};
	let [showDebugTable, setShowDebugTable] = React.useState(true);

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

	function downloadPng (e) {
		const filename = `reactry_${resolution.name}.png`;
		domtoimage.toBlob(document.getElementById('OutputBox'))
			.then(function (blob) {
			FileSaver.saveAs(blob, filename);
		});
		console.log("Downloaded: " + filename);
	}

	let selectShapeProps = {
		show: selectSquare,
		setShow: setSelectSquare,
		title: "Square"
	};

	let debugTableToggleProps = {
		show: showDebugTable,
		setShow: setShowDebugTable,
		title: "Debug Info"
	};

	let debugTableProps = {
		selectSquare,
		borderIndex,
		widthIndex,
		heightIndex,
		resolutionIndex,
		backgroundColorIndex,
		primaryColorIndex,
		secondaryColorIndex
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
		<div className="InputComponent">
			<div className="flex py-2 text-white font-bold text-sm">
				{resolutionItems}
				<div className="px-4 py-2 ml-4 bg-rose-500 inline-block rounded-full">
					<span>{width}</span>
					<span className="px-1">x</span>
					<span>{height}</span>
				</div>
			</div>
			<ColorPicker title="Background color"
				colors={colors}
				index={backgroundColorIndex}
				setIndex={setBackgroundColorIndex} />
			<ColorPicker title="Primary color"
				colors={colors}
				index={primaryColorIndex}
				setIndex={setPrimaryColorIndex} />
			<ColorPicker title="Secondary color"
				colors={colors}
				index={secondaryColorIndex}
				setIndex={setSecondaryColorIndex} />

			<ShowToggle {...selectShapeProps} />
			{shapeSelector()}
			<NumberPicker title="Border size"
				numbers={borders}
				index={borderIndex}
				setIndex={setBorderIndex} />

			<div className="py-4">
				<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={downloadPng}>Download</button>
			</div>
			<ShowToggle {...debugTableToggleProps} />
			{showDebugTable && <DebugTable {...debugTableProps} />}
		</div>
	);
}
