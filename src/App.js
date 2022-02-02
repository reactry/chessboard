import './App.css';

import React from 'react';

import InputComponent from './InputComponent';
import OutputComponent from './OutputComponent';

import settings from './settings.json';


function App () {
	const resolutions = settings.resolutions;

	let [resolutionIndex, setResolutionIndex] = React.useState(3);
	let inputProps = {
		resolutions, resolutionIndex, setResolutionIndex
	};
	let outputProps = {
		resolutions, resolutionIndex
	};

	return (
		<div className="App">
			<main className="flex min-h-screen">
				<div className="bg-slate-200 w-1/3 overflow-hidden">
					<OutputComponent {...outputProps} />
				</div>
				<div className="bg-purple-200 p-4 grow border-l-2 border-purple-800">
					<InputComponent {...inputProps} />
				</div>
			</main>
		</div>
	);
}

export default App;
