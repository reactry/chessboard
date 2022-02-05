import TopTabBar from './TopTabBar';
import ColorTab from './ColorTab';
import SizeTab from './SizeTab';
import TextTab from './TextTab';
import DebugTab from './DebugTab';
import Links from './Links';

import React from 'react';
import domtoimage from 'dom-to-image';
const FileSaver = require('file-saver');

const tabs = [
	{
		"title": "Color"
	},
	{
		"title": "Size"
	},
	{
		"title": "Text"
	},
	{
		"title": "Debug",
		"hidden": true
	}
];



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

	let textTabProps = {};

	let debugTabProps = {
		selectSquare, borderIndex,
		widthIndex, heightIndex, resolutionIndex, paddingIndex, radiusIndex,
		backgroundColorIndex, primaryColorIndex, secondaryColorIndex
	};

	function currentTab () {
		let currentTabName = tabs[currentTabIndex]["title"];
		if (currentTabName === "Color") {
			return <ColorTab {...colorTabProps} />;
		} else if (currentTabName === "Size") {
			return <SizeTab {...sizeTabProps} />
		} else if (currentTabName === "Text") {
			return <TextTab {...textTabProps} />
		} else if (currentTabName === "Debug") {
			return <DebugTab {...debugTabProps} />
		}
	}

	let linksProps = {links};

	return (
		<div className="InputComponent">
			<TopTabBar {...topTabBarProps} />

			<div className="py-4">
				{currentTab()}

				<div className="px-4 py-4">
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={downloadPng}>Download</button>
				</div>
				<Links {...linksProps} />
			</div>
		</div>
	);
}
