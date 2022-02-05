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
	links, sizes,
	widthIndex, setWidthIndex,
	heightIndex, setHeightIndex,
	paddings, paddingIndex, setPaddingIndex,
	radiuses, radiusIndex, setRadiusIndex,
	resolutions, resolutionIndex, setResolutionIndex,
	colors, backgroundColorIndex, setBackgroundColorIndex,
	primaryColorIndex, setPrimaryColorIndex,
	secondaryColorIndex, setSecondaryColorIndex
}) {

	let [currentTabIndex, setCurrentTabIndex] = React.useState(0);

	let resolution = resolutions[resolutionIndex];

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
		paddings, paddingIndex, setPaddingIndex,
		radiuses, radiusIndex, setRadiusIndex,
		resolutions, resolutionIndex, setResolutionIndex
	};

	let debugTabProps = {
		selectSquare, borderIndex,
		widthIndex, heightIndex, resolutionIndex, paddingIndex, radiusIndex,
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

	let linkItems = links.map((v, i) => {
		return <a key={i} target="_blank" href={v.url} className="text-blue-700 px-3 py-2 hover:bg-slate-300 focus:bg-slate-300">{v.title}</a>;
	});

	return (
		<div className="InputComponent">
			<TopTabBar {...topTabBarProps} />

			<div className="py-4">
				{currentTab()}

				<div className="px-4 py-4">
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={downloadPng}>Download</button>
				</div>
				<div className="px-4 py-4">
					{linkItems}
				</div>
			</div>
		</div>
	);
}
