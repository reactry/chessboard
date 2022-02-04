import React from 'react';

import InputComponent from './InputComponent';
import OutputComponent from './OutputComponent';

import settings from './settings.json';


function App () {
	const borders = settings.borders;
	const colors = settings.colors;
	const resolutions = settings.resolutions;
	const sizes = settings.sizes;

	let [borderIndex, setBorderIndex] = React.useState(0);
	let [sizeIndex, setSizeIndex] = React.useState(11);

	let [backgroundColorIndex, setBackgroundColorIndex] = React.useState(2);
	let [primaryColorIndex, setPrimaryColorIndex] = React.useState(1);
	let [secondaryColorIndex, setSecondaryColorIndex] = React.useState(2);

	let [resolutionIndex, setResolutionIndex] = React.useState(3);
	let inputProps = {
		borders, borderIndex, setBorderIndex,
		sizes, sizeIndex, setSizeIndex,
		resolutions, resolutionIndex, setResolutionIndex,
		colors, backgroundColorIndex, setBackgroundColorIndex,
		primaryColorIndex, setPrimaryColorIndex,
		secondaryColorIndex, setSecondaryColorIndex
	};
	let outputProps = {
		borders, borderIndex,
		sizes, sizeIndex,
		resolutions, resolutionIndex,
		colors, backgroundColorIndex, primaryColorIndex, secondaryColorIndex
	};

	return (
		<div className="App">
			<main className="md:flex md:min-h-screen">
				<div className="bg-slate-200 md:w-2/3 h-48 md:h-auto overflow-hidden">
					<OutputComponent {...outputProps} />
				</div>
				<div className="bg-purple-200 p-4 grow border-t-2 md:border-t-0 md:border-l-2 border-purple-800 overflow-hidden">
					<InputComponent {...inputProps} />
				</div>
			</main>
		</div>
	);
}

export default App;
