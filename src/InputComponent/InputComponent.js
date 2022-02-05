import TopTabBar from './TopTabBar';
import ColorTab from './ColorTab';
import SizeTab from './SizeTab';
import DebugTab from './DebugTab';

import React from 'react';
import domtoimage from 'dom-to-image';
const FileSaver = require('file-saver');

const tabs = ["Color", "Size", "Debug"];



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

	let [currentTabIndex, setCurrentTabIndex] = React.useState(0);
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

	let topTabBarProps = {
		tabs, currentTabIndex, setCurrentTabIndex
	};

	let colorTabProps = {
		colors, backgroundColorIndex, setBackgroundColorIndex,
		primaryColorIndex, setPrimaryColorIndex,
		secondaryColorIndex, setSecondaryColorIndex
	};

	let sizeTabProps = {
		selectSquare, setSelectSquare,
		borders, borderIndex, setBorderIndex,
		sizes,
		widthIndex, setWidthIndex,
		heightIndex, setHeightIndex,
		resolutions, resolutionIndex, setResolutionIndex
	};

	let debugTabProps = {
		showDebugTable, setShowDebugTable,
		selectSquare, borderIndex,
		widthIndex, heightIndex, resolutionIndex,
		backgroundColorIndex, primaryColorIndex, secondaryColorIndex
	};

	function currentTab () {
		let currentTabName = tabs[currentTabIndex];
		if (currentTabName === "Color") {
			return <ColorTab {...colorTabProps} />;
		} else if (currentTabName === "Size") {
			return <SizeTab {...sizeTabProps} />
		} else if (currentTabName === "Debug") {
			return <DebugTab {...debugTabProps} />
		}
	}

	return (
		<div className="InputComponent">
			<TopTabBar {...topTabBarProps} />
			<div className="flex px-4 py-2 text-white font-bold text-sm">
				{resolutionItems}
				<div className="px-4 py-2 ml-4 bg-rose-500 inline-block rounded-full">
					<span>{width}</span>
					<span className="px-1">x</span>
					<span>{height}</span>
				</div>
			</div>
			<div className="p-4">
				{currentTab()}

				<div className="py-4">
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={downloadPng}>Download</button>
				</div>
			</div>
		</div>
	);
}
