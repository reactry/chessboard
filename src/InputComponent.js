import ColorPicker from './ColorPicker';

import domtoimage from 'dom-to-image';
const FileSaver = require('file-saver');



export default function InputComponent ({
	resolutions, resolutionIndex, setResolutionIndex,
	colors, backgroundColorIndex, setBackgroundColorIndex,
	primaryColorIndex, setPrimaryColorIndex,
	secondaryColorIndex, setSecondaryColorIndex
}) {

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

			<div className="py-4">
				<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={downloadPng}>Download</button>
			</div>
		</div>
	);
}
